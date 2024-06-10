/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/navbar/Navbar'
import ContactHeader from './components/contactHeader/ContactHeader'
import ContactForm from './components/contactForm/ContactForm'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  )
}

export default App