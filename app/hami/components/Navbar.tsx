import React from 'react'
import { FocusNode } from '@please/lrud'

interface NavbarProps {
  pages: { name: string, subPages: string[] }[]
  activePage: number
  activeSubPage: number
  setActiveSubPage: (index: number) => void
  setFocusedElement: (element: string) => void
  focusedElement: string
}

const Navbar: React.FC<NavbarProps> = ({
  pages,
  activePage,
  activeSubPage,
  setActiveSubPage,
  setFocusedElement,
  focusedElement,
}) => {
  return (
    <nav
      style={{
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
        backgroundColor: '#fff',
      }}
    >
      {pages[activePage].subPages.map((subPage, index) => (
        <FocusNode
          key={index}
          onSelected={() => {
            setActiveSubPage(index)
            setFocusedElement('navbar')
          }}
          className={`navbar-btn ${activeSubPage === index ? 'selected' : ''} ${
            focusedElement === 'navbar' && activeSubPage === index ? 'focused' : ''
          }`}
        >
          <div
            style={{
              margin: '0 10px',
              padding: '5px 15px',
              backgroundColor:
                focusedElement === 'navbar' && activeSubPage === index
                  ? '#c0392b'
                  : activeSubPage === index
                  ? '#d35400'
                  : 'transparent',
              color: activeSubPage === index ? '#fff' : '#e74c3c',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            {subPage}
          </div>
        </FocusNode>
      ))}
    </nav>
  )
}

export default Navbar
