import React from 'react'
import Marquee from 'react-fast-marquee'
import MarqueeImg1 from './marquee1.webp'
import MarqueeImg2 from './marquee2.webp'
import MarqueeImg3 from './marquee3.webp'
import MarqueeImg4 from './marquee4.webp'
import MarqueeImg5 from './marquee5.webp'
import MarqueeImg6 from './marquee6.webp'
import MarqueeImg7 from './marquee7.webp'
import MarqueeImg8 from './marquee8.webp'
import MarqueeImg9 from './marquee9.webp'
import MarqueeImg10 from './marquee10.webp'



function Marquees() {
    const images=[MarqueeImg1,MarqueeImg2,MarqueeImg3,MarqueeImg4,MarqueeImg5,MarqueeImg6,MarqueeImg7,MarqueeImg8,MarqueeImg9,MarqueeImg10]
  return (
    <div>
        <h1 style={{textAlign:'center',color:'blue'}}>Our Assosiate Partners</h1>
        <Marquee speed={100}>
            {images.map((img)=>(
                <img src={img} className='marquee-img'/>
            ))}
        </Marquee>
    </div>
  )
}

export default Marquees