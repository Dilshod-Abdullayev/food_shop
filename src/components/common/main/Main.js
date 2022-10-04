import React from 'react'
import Food__main from './Foods/Food__main';
import Header from './header/Header'
import Target from './target/Target';
import Work__main from './works/Work__main';
import Card__sum from './Foods/Card__sum';
import Card__info from './Foods/Card__info';
import Download from "./Download/Download";
import Footer from "./Footer/Footer";
export default function Main() {
  return (
    <div>
        <Header/>
        <Work__main/>
        <Food__main/>
        <Card__info/>
        <Target/>
        <Download/>
        <Footer/>
    </div>
  )
}
