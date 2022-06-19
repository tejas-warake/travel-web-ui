import React from 'react'

import delhi from '../assets/delhi.jpg';
import goa from '../assets/goa.jpg';
import kolkata from '../assets/kolkata.jpg';
import manali from '../assets/manali.jpg';
import ladakh from '../assets/ladakh.jpg';
import mumbai from '../assets/mumbai.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={delhi} text='Delhi' />
    <SelectsCard bg={goa} text='Goa' />
    <SelectsCard bg={kolkata} text='Kolkata' />
    <SelectsCard bg={manali} text='Manali' />
    <SelectsCard bg={ladakh} text='Ladakh' />
    <SelectsCard bg={mumbai} text='Mumbai' />
    
        
    </div>
  )
}

export default Selects