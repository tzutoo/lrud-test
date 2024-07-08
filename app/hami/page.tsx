'use client'

import React, { useState, useEffect } from 'react'
import Drawer from './components/Drawer'
import Navbar from './components/Navbar'
import Content from './components/Content'

export default function HamiComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  const [activePage, setActivePage] = useState(0)
  const [activeSubPage, setActiveSubPage] = useState(0)
  const [focusedElement, setFocusedElement] = useState('drawer')
  const [previousDrawerItem, setPreviousDrawerItem] = useState(0)

  const pages = [
    { name: 'Page 1', subPages: ['Subpage 1', 'Subpage 2', 'Subpage 3'] },
    { name: 'Page 2', subPages: [] },
    { name: 'Page 3', subPages: [] },
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (focusedElement === 'drawer') {
            setActivePage((prev) => (prev > 0 ? prev - 1 : prev))
          } else if (focusedElement === 'navbar') {
            setFocusedElement('drawer')
            setIsDrawerOpen(true)
          }
          break
        case 'ArrowDown':
          if (focusedElement === 'drawer') {
            setActivePage((prev) => (prev < pages.length - 1 ? prev + 1 : prev))
          }
          break
        case 'ArrowLeft':
          if (focusedElement === 'navbar') {
            if (activeSubPage > 0) {
              setActiveSubPage((prev) => prev - 1)
            } else {
              setFocusedElement('drawer')
              setActivePage(previousDrawerItem)
              setIsDrawerOpen(true)
            }
          } else if (focusedElement === 'content') {
            setFocusedElement('drawer')
            setActivePage(previousDrawerItem)
            setIsDrawerOpen(true)
          }
          break
        case 'ArrowRight':
          if (focusedElement === 'drawer') {
            setPreviousDrawerItem(activePage)
            setIsDrawerOpen(false)
            if (pages[activePage].subPages.length > 0) {
              setFocusedElement('navbar')
            } else {
              setFocusedElement('content')
            }
          } else if (focusedElement === 'navbar') {
            setActiveSubPage((prev) =>
              prev < pages[activePage].subPages.length - 1 ? prev + 1 : prev
            )
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activePage, pages, focusedElement, activeSubPage, previousDrawerItem])

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
        backgroundColor: '#000',
      }}
    >
      <Drawer
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
        setActiveSubPage={setActiveSubPage}
        setFocusedElement={setFocusedElement}
        isDrawerOpen={isDrawerOpen}
        focusedElement={focusedElement}
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          transition: 'margin-left 0.3s ease',
          marginLeft: '0',
          position: 'relative',
        }}
      >
        {pages[activePage].subPages.length > 0 && (
          <Navbar
            pages={pages}
            activePage={activePage}
            activeSubPage={activeSubPage}
            setActiveSubPage={setActiveSubPage}
            setFocusedElement={setFocusedElement}
            focusedElement={focusedElement}
          />
        )}
        <Content pages={pages} activePage={activePage} activeSubPage={activeSubPage} />
      </div>
    </div>
  )
}
