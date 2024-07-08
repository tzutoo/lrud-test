// 引入 React 和相關的 Hook
'use client'

import React, { useState, useEffect } from 'react'
import { FocusNode } from "@please/lrud";
import './App.css'

export default function HamiComponent() {
    // 定義狀態變量
    const [isDrawerOpen, setIsDrawerOpen] = useState(true); // 控制側邊欄是否打開
    const [activePage, setActivePage] = useState(0); // 當前頁面索引
    const [activeSubPage, setActiveSubPage] = useState(0); // 當前子頁面索引
    const [focusedElement, setFocusedElement] = useState('drawer'); // 當前聚焦元素
    const [previousDrawerItem, setPreviousDrawerItem] = useState(0); // 上一個側邊欄項目索引

    // 定義頁面數據
    const pages = [
        { name: '頁面 1', subPages: ['子頁面 1', '子頁面 2', '子頁面 3'] },
        { name: '頁面 2', subPages: [] },
        { name: '頁面 3', subPages: [] }
    ];

    // 使用 useEffect 監聽鍵盤事件
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp': // 上箭頭鍵
                    if (focusedElement === 'drawer') { // 如果當前聚焦元素是側邊欄
                        setActivePage((prev) => (prev > 0 ? prev - 1 : prev)); // 切換到上一個頁面
                    } else if (focusedElement === 'navbar') { // 如果當前聚焦元素是導航欄
                        setFocusedElement('drawer'); // 切換到側邊欄
                        setIsDrawerOpen(true); // 打開側邊欄
                    }
                    break;
                case 'ArrowDown': // 下箭頭鍵
                    if (focusedElement === 'drawer') { // 如果當前聚焦元素是側邊欄
                        setActivePage((prev) => (prev < pages.length - 1 ? prev + 1 : prev)); // 切換到下一個頁面
                    }
                    break;
                case 'ArrowLeft': // 左箭頭鍵
                    if (focusedElement === 'navbar') { // 如果當前聚焦元素是導航欄
                        if (activeSubPage > 0) { // 如果不是第一個子頁面
                            setActiveSubPage((prev) => prev - 1); // 切換到上一個子頁面
                        } else { // 如果是第一個子頁面
                            setFocusedElement('drawer'); // 切換到側邊欄
                            setActivePage(previousDrawerItem); // 恢復上一個側邊欄項目
                            setIsDrawerOpen(true); // 打開側邊欄
                        }
                    } else if (focusedElement === 'content') { // 如果當前聚焦元素是內容區
                        setFocusedElement('drawer'); // 切換到側邊欄
                        setActivePage(previousDrawerItem); // 恢復上一個側邊欄項目
                        setIsDrawerOpen(true); // 打開側邊欄
                    }
                    break;
                case 'ArrowRight': // 右箭頭鍵
                    if (focusedElement === 'drawer') { // 如果當前聚焦元素是側邊欄
                        setPreviousDrawerItem(activePage); // 記錄當前側邊欄項目索引
                        setIsDrawerOpen(false); // 關閉側邊欄
                        if (pages[activePage].subPages.length > 0) { // 如果當前頁面有子頁面
                            setFocusedElement('navbar'); // 切換到導航欄
                        } else { // 如果當前頁面沒有子頁面
                            setFocusedElement('content'); // 切換到內容區
                        }
                    } else if (focusedElement === 'navbar') { // 如果當前聚焦元素是導航欄
                        setActiveSubPage((prev) => (prev < pages[activePage].subPages.length - 1 ? prev + 1 : prev)); // 切換到下一個子頁面
                    }
                    break;
            }
        };

        // 添加鍵盤事件監聽器
        window.addEventListener('keydown', handleKeyDown);
        // 在組件卸載時移除監聽器
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
                width: isDrawerOpen ? '250px' : '60px', // 根據 isDrawerOpen 設置側邊欄寬度
                transition: 'width 0.3s ease', // 添加寬度過渡效果
                backgroundColor: '#2c3e50', // 設置側邊欄背景顏色
                overflow: 'hidden' // 隱藏溢出內容
            }}>
                {/* 使用 map 方法遍歷 pages 陣列 */}
                {pages.map((page, index) => (
                    // 為每個頁面渲染一個 FocusNode 組件
                    <FocusNode
                        // 使用 index 作為 key 值
                        key={index}
                        // 當點擊該組件時，執行以下函數
                        onSelected={() => {
                            // 設置當前頁面索引為點擊的頁面索引
                            setActivePage(index);
                            // 設置當前子頁面索引為 0
                            setActiveSubPage(0);
                            // 設置當前聚焦元素為 'drawer'
                            setFocusedElement('drawer');
                        }}
                        // 根據當前頁面索引和聚焦元素設置 CSS 類名
                        className={`drawer-btn ${activePage === index ? 'selected' : ''} ${focusedElement === 'drawer' && activePage === index ? 'focused' : ''}`}
                    >
                        {/* 渲染一個 div 作為頁面按鈕 */}
                        <div style={{
                            // 設置內邊距
                            padding: '15px',
                            // 設置文字顏色
                            color: '#ecf0f1',
                            // 設置游標樣式
                            cursor: 'pointer',
                            // 設置底部邊框樣式
                            borderBottom: '1px solid #34495e',
                            // 根據當前頁面索引和聚焦元素設置背景顏色
                            backgroundColor: focusedElement === 'drawer' && activePage === index ? '#3498db' : (activePage === index ? '#34495e' : 'transparent'),
                            // 設置背景顏色過渡效果
                            transition: 'background-color 0.3s ease'
                        }}>
                            {/* 根據 isDrawerOpen 的值顯示頁面名稱或首字母 */}
                            {isDrawerOpen ? page.name : page.name[0]}
                        </div>
                    </FocusNode>
                ))}
            </div>
            <div style={{
                flex: 1, // 佔據剩餘空間
                display: 'flex', // 使用 flex 布局
                flexDirection: 'column', // 垂直排列子元素
                transition: 'margin-left 0.3s ease', // 添加 margin-left 過渡效果
                marginLeft: '0', // 設置左邊距
                position: 'relative' // 設置相對定位
            }}>
                {/* 如果當前頁面有子頁面，則渲染導航欄 */}
                {pages[activePage].subPages.length > 0 && (
                    <nav style={{
                        padding: '10px', // 設置內邊距
                        display: 'flex', // 使用 flex 布局
                        justifyContent: 'center', // 水平居中對齊
                        position: 'fixed', // 設置固定定位
                        top: '20px', // 距離頂部 20px
                        left: '50%', // 水平居中
                        transform: 'translateX(-50%)', // 水平居中
                        borderRadius: '10px', // 設置圓角
                        border: '2px solid #e74c3c', // 設置邊框樣式
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)', // 設置陰影效果
                        zIndex: 1000, // 設置堆疊層級
                        backgroundColor: '#fff' // 設置背景顏色
                    }}>
                        {/* 使用 map 方法遍歷子頁面 */}
                        {pages[activePage].subPages.map((subPage, index) => (
                            <FocusNode
                                key={index}
                                onSelected={() => {
                                    setActiveSubPage(index); // 設置當前子頁面索引
                                    setFocusedElement('navbar'); // 設置當前聚焦元素為導航欄
                                }}
                                className={`navbar-btn ${activeSubPage === index ? 'selected' : ''} ${focusedElement === 'navbar' && activeSubPage === index ? 'focused' : ''}`}
                            >
                                <div style={{
                                    margin: '0 10px', // 設置外邊距
                                    padding: '5px 15px', // 設置內邊距
                                    backgroundColor: focusedElement === 'navbar' && activeSubPage === index ? '#c0392b' : (activeSubPage === index ? '#d35400' : 'transparent'), // 根據聚焦狀態設置背景顏色
                                    color: '#e74c3c', // 設置文字顏色
                                    borderRadius: '5px', // 設置圓角
                                    cursor: 'pointer', // 設置游標樣式
                                    transition: 'background-color 0.3s ease' // 添加背景顏色過渡效果
                                }}>
                                    {subPage}
                                </div>
                            </FocusNode>
                        ))}
                    </nav>
                )}
                <div style={{
                    flex: 1, // 佔據剩餘空間
                    padding: '20px', // 設置內邊距
                    backgroundColor: '#000', // 設置背景顏色
                    color: '#fff', // 設置文字顏色
                    overflowY: 'auto' // 允許垂直滾動
                }}>
                    <h2 style={{ color: '#fff', marginBottom: '15px' }}>{pages[activePage].name}</h2> {/* 渲染當前頁面標題 */}
                    {/* 如果當前頁面有子頁面，則渲染子頁面標題 */}
                    {pages[activePage].subPages.length > 0 && (
                        <h3 style={{ color: '#fff', marginBottom: '10px' }}>{pages[activePage].subPages[activeSubPage]}</h3>
                    )}
                    <p style={{ lineHeight: '1.6' }}>This is the content for {pages[activePage].name} {pages[activePage].subPages[activeSubPage] || ''}</p> {/* 渲染內容 */}
                </div>
            </div>
        </div>
    )
}
