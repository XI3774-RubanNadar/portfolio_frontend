import React from 'react'
import * as Scroll from 'react-scroll'
import Home from './Home'
import Project from './Project'
import Skills from './Skills'

type Props = {}
const Element =  Scroll.Element
const Main = (props: Props) => {
  return (
    <div>  <Element name="Home">
        <Home />
        </Element>
        <Element name="Project">
        <Project/>
        </Element>
        <Element name="Skill & Exp">
        <Skills />
        </Element>
      
    </div>
  )
}

export default Main