import React, { Component , ReactElement } from 'react';

import './Image.css';

interface Props {
  src: string
  alt: string
  type?: string
}

const Image = (props: Props) => {
  const { src, alt, type } = props
  return (
    <img
      className={`image ${type ? `image--${type}` : ''}`}
      src={src}
      alt={alt}
    >
    </img>
  )
}

export {
  Image
}