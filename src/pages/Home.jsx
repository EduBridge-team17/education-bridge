import React from 'react'
import NavBar from '../component/NavBar'
import Hero from '../component/Hero'


const Home = () => {
  return (
        <>
      <Hero />
      {/* <Partnership/> */}
        
        <section className='min-h-screen bg-primary-400 flex items-center justify-center'>
            <h1 className='text-primary-2000 text-3xl font-bold'>
            Education bridge Website
            </h1>
        </section>

    </>
  )
}

export default Home
