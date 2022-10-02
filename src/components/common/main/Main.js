import React from 'react'
import Food__main from './Foods/Food__main';
import Header from './header/Header'
import Work__main from './works/Work__main';

export default function Main() {
  return (
    <div>
        <Header/>
        <Work__main/>
        <Food__main/>
    </div>
  )
}
