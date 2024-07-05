'use client'

import React, { useState, useEffect } from 'react'
import { FocusNode } from "@please/lrud";
import './App.css'

export default function HamiComponent() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const [activePage, setActivePage] = useState(0);
    const [activeSubPage, setActiveSubPage] = useState(0);
    const [focusedElement, setFocusedElement] = useState('drawer');
    const [previousDrawerItem, setPreviousDrawerItem] = useState(0);

    const pages = [
        { name: 'Page 1', subPages: ['SubPage 1', 'SubPage 2', 'SubPage 3'] },
        { name: 'Page 2', subPages: [] },
        { name: 'Page 3', subPages: [] }
    ];

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (focusedElement === 'drawer') {
                        setActivePage((prev) => (prev > 0 ? prev - 1 : prev));
                    } else if (focusedElement === 'navbar') {
                        setFocusedElement('drawer');
                        setIsDrawerOpen(true);
                    }
                    break;
                case 'ArrowDown':
                    if (focusedElement === 'drawer') {
                        setActivePage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
                    }
                    break;
                case 'ArrowLeft':
                    if (focusedElement === 'navbar') {
                        if (activeSubPage > 0) {
                            setActiveSubPage((prev) => prev - 1);
                        } else {
                            setFocusedElement('drawer');
                            setActivePage(previousDrawerItem);
                            setIsDrawerOpen(true);
                        }
                    } else if (focusedElement === 'content') {
                        setFocusedElement('drawer');
                        setActivePage(previousDrawerItem);
                        setIsDrawerOpen(true);
                    }
                    break;
                case 'ArrowRight':
                    if (focusedElement === 'drawer') {
                        setPreviousDrawerItem(activePage);
                        setIsDrawerOpen(false);
                        if (pages[activePage].subPages.length > 0) {
                            setFocusedElement('navbar');
                        } else {
                            setFocusedElement('content');
                        }
                    } else if (focusedElement === 'navbar') {
                        setActiveSubPage((prev) => (prev < pages[activePage].subPages.length - 1 ? prev + 1 : prev));
                    }
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activePage, pages, focusedElement, activeSubPage, previousDrawerItem]);

    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            fontFamily: 'Arial, sans-serif',
            color: '#fff',
            backgroundColor: '#000'
        }}>
            <div style={{
                width: isDrawerOpen ? '250px' : '60px',
                transition: 'width 0.3s ease',
                backgroundColor: '#2c3e50',
                overflow: 'hidden'
            }}>
                {pages.map((page, index) => (
                    <FocusNode
                        key={index}
                        onSelected={() => {
                            setActivePage(index);
                            setActiveSubPage(0);
                            setFocusedElement('drawer');
                        }}
                        className={`drawer-btn ${activePage === index ? 'selected' : ''} ${focusedElement === 'drawer' && activePage === index ? 'focused' : ''}`}
                    >
                        <div style={{
                            padding: '15px',
                            color: '#ecf0f1',
                            cursor: 'pointer',
                            borderBottom: '1px solid #34495e',
                            backgroundColor: focusedElement === 'drawer' && activePage === index ? '#3498db' : (activePage === index ? '#34495e' : 'transparent'),
                            transition: 'background-color 0.3s ease'
                        }}>
                            {isDrawerOpen ? page.name : page.name[0]}
                        </div>
                    </FocusNode>
                ))}
            </div>
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                transition: 'margin-left 0.3s ease',
                marginLeft: '0',
                position: 'relative'
            }}>
                {pages[activePage].subPages.length > 0 && (
                    <nav style={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'fixed',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderRadius: '10px',
                        border: '2px solid #e74c3c',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        backgroundColor: '#fff'
                    }}>
                        {pages[activePage].subPages.map((subPage, index) => (
                            <FocusNode
                                key={index}
                                onSelected={() => {
                                    setActiveSubPage(index);
                                    setFocusedElement('navbar');
                                }}
                                className={`navbar-btn ${activeSubPage === index ? 'selected' : ''} ${focusedElement === 'navbar' && activeSubPage === index ? 'focused' : ''}`}
                            >
                                <div style={{
                                    margin: '0 10px',
                                    padding: '5px 15px',
                                    backgroundColor: focusedElement === 'navbar' && activeSubPage === index ? '#c0392b' : (activeSubPage === index ? '#d35400' : 'transparent'),
                                    color: '#e74c3c',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease'
                                }}>
                                    {subPage}
                                </div>
                            </FocusNode>
                        ))}
                    </nav>
                )}
                <div style={{
                    flex: 1,
                    padding: '20px',
                    backgroundColor: '#000',
                    color: '#fff',
                    overflowY: 'auto'
                }}>
                    <h2 style={{ color: '#fff', marginBottom: '15px' }}>{pages[activePage].name}</h2>
                    {pages[activePage].subPages.length > 0 && (
                        <h3 style={{ color: '#fff', marginBottom: '10px' }}>{pages[activePage].subPages[activeSubPage]}</h3>
                    )}
                    <p style={{ lineHeight: '1.6' }}>This is the content for {pages[activePage].name} {pages[activePage].subPages[activeSubPage] || ''}</p>
                </div>
            </div>
        </div>
    )
}
