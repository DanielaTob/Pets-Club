import React from 'react'
import Categories from '../../components/containers/Categories'
import Banner from '../../components/cards/Banner'
import Popular from '../../components/containers/Popular'
import SliderLogo from '../../components/containers/SliderLogo'

export default function Shop() {
  return (
    <div>
        <Banner/>
        <Categories/>
        <Popular />
        <SliderLogo />
    </div>
  )
}
