import React from 'react'
import Home from './Home'
import Project from './Project'
import Skills from './Skills'

type Props = {}

const Main = (props: Props) => {
  return (
    <div>
        <Home/>
        <Project/>
        <Skills/>
    </div>
  )
}

export default Main