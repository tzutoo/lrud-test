'use client'

import React from 'react'
import { FocusNode } from '@please/lrud'

interface DrawerProps {
  pages: { name: string, subPages: string[] }[]
  activePage: number
  setActivePage: (index: number) => void
  setActiveSubPage: (index: number) => void
  setFocusedElement: (element: string) => void
  isDrawerOpen: boolean
  focusedElement: string
}

const Drawer: React.FC<DrawerProps> = ({
  pages,
  activePage,
  setActivePage,
  setActiveSubPage,
  setFocusedElement,
  isDrawerOpen,
  focusedElement,
}) => {
  return (
    <div
      style={{
        width: isDrawerOpen ? '250px' : '60px',
        transition: 'width 0.3s ease',
        backgroundColor: '#2c3e50',
        overflow: 'hidden',
      }}
    >
      {pages.map((page, index) => (
        <FocusNode
          key={index}
          onSelected={() => {
            setActivePage(index)
            setActiveSubPage(0)
            setFocusedElement('drawer')
          }}
          className={`drawer-btn ${activePage === index ? 'selected' : ''} ${
            focusedElement === 'drawer' && activePage === index ? 'focused' : ''
          }`}
        >
          <div
            style={{
              padding: '15px',
              color: '#ecf0f1',
              cursor: 'pointer',
              borderBottom: '1px solid #34495e',
              backgroundColor:
                focusedElement === 'drawer' && activePage === index
                  ? '#3498db'
                  : activePage === index
                  ? '#34495e'
                  : 'transparent',
              transition: 'background-color 0.3s ease',
            }}
          >
            {isDrawerOpen ? page.name : page.name[0]}
          </div>
        </FocusNode>
      ))}
    </div>
  )
}

export default Drawer
