import React from 'react'
interface ImgProp {
  src: string;
  alt: string;
  width: number;
  height: number;
}
const Image: React.FC<ImgProp> = ({ src, alt, width, height }) => {
  return (
    <img src={src} alt={alt} width={width} height={height} loading="lazy" />
  )
}

export default Image
