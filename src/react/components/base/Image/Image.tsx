import React, { Component , ReactElement } from 'react';

import './Image.css';

const Image = (props: Local.ImageProps) => {
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