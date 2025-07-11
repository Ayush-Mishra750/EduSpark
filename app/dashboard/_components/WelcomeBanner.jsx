import Image from 'next/image';
import React from 'react'

function WelcomeBanner() {
  return (
    <div>
      <Image src={'/laptop.png'} alt='laptop' width={100} height={100}/>
      
    </div>
  )
}

export default WelcomeBanner;
