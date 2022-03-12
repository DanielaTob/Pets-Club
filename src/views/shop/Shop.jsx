import React from 'react'
import Banner from '../../components/cards/Banner'
import Popular from '../../components/containers/Popular'
import ButtonShopCategories from '../../components/buttons/ButtonShopCategories'


export default function Shop() {
  return (
    <div>
        <Banner/>
        <ButtonShopCategories/>
        <Popular />
    </div>
  )
}
