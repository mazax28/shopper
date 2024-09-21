import React from 'react'
import Hero from '../../components/Hero/Hero'
import Popular from '../../components/Popular/Popular'
import Offers from '../../components/Offers/Offers'
import NewCollection from '../../components/NewCollection/NewCollection'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

export default function Shop() {
  return (
    <div className='shop container'>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection /> 
      <NewsLetter />
    </div>
  )
}
