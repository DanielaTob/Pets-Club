import React from 'react'
import Carousel from '../../components/containers/Carousel'
import Buttonhome from '../../components/buttons/Buttonhome'
import Contact from '../../components/containers/Contact'
import Text from '../../components/containers/Text'


export default function Landing() {
  return (
    <div>
        <Carousel /> 
        <Text />
        <Buttonhome />
        <Contact />

    </div>
  )
}
