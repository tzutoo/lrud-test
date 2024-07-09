'use client'

import React from 'react'
import { FocusNode } from '@please/lrud'
import PosterRow from './PosterRow'

const SubPage1: React.FC = () => {
  const posterRows = [
    {
      title: 'Popular Movies',
      posters: [
        { image: '/poster1.jpg', title: 'Movie 1' },
        { image: '/poster2.jpg', title: 'Movie 2' },
        { image: '/poster3.jpg', title: 'Movie 3' },
        // 添加更多海報...
      ],
    },
    {
      title: 'New Releases',
      posters: [
        { image: '/poster4.jpg', title: 'Movie 4' },
        { image: '/poster5.jpg', title: 'Movie 5' },
        { image: '/poster6.jpg', title: 'Movie 6' },
        // 添加更多海報...
      ],
    },
    // 添加更多海報列...
  ]

  return (
    <div style={{ padding: '20px' }}>
      {posterRows.map((row, index) => (
        <PosterRow key={index} title={row.title} posters={row.posters} />
      ))}
    </div>
  )
}

export default SubPage1
