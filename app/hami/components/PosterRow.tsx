'use client'

import React from 'react'
import { FocusNode } from '@please/lrud'

interface PosterProps {
  image: string
  title: string
}

interface PosterRowProps {
  title: string
  posters: PosterProps[]
}

const PosterRow: React.FC<PosterRowProps> = ({ title, posters }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {posters.map((poster, index) => (
          <FocusNode key={index} className="poster">
            <img src={poster.image} alt={poster.title} />
            <p>{poster.title}</p>
          </FocusNode>
        ))}
      </div>
    </div>
  )
}

export default PosterRow
