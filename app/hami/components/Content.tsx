'use client'

import React from 'react'

interface ContentProps {
  pages: { name: string, subPages: string[] }[]
  activePage: number
  activeSubPage: number
}

const Content: React.FC<ContentProps> = ({ pages, activePage, activeSubPage }) => {
  return (
    <div
      style={{
        flex: 1,
        padding: '20px',
        backgroundColor: '#000',
        color: '#fff',
        overflowY: 'auto',
      }}
    >
      <h2 style={{ color: '#fff', marginBottom: '15px' }}>{pages[activePage].name}</h2>
      {pages[activePage].subPages.length > 0 && (
        <h3 style={{ color: '#fff', marginBottom: '10px' }}>
          {pages[activePage].subPages[activeSubPage]}
        </h3>
      )}
      <p style={{ lineHeight: '1.6' }}>
        This is the content for {pages[activePage].name}{' '}
        {pages[activePage].subPages[activeSubPage] || ''}
      </p>
    </div>
  )
}

export default Content
