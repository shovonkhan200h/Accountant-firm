import React,{ useRef, useState } from 'react'
import FaqsCard from './FaqsCard'
import { heroimg } from '../assets'

const Faq = (props) => {
  return (
    <section className='container mx-auto' id='faq'>
        <div className='flex justify-center items-center'>
            <div className='w-full'>
                <img src={heroimg} className=''/>
            </div>
            <FaqsCard/>
        </div>
    </section>
  )
}

export default Faq