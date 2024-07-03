import React from 'react'

function Footer() {
  return (
    <div className='relative'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000000" fillOpacity="1" d="M0,32L1440,160L1440,320L0,320Z"></path></svg>

      <div className="info absolute right-1/2 top-1/2 sm:right-[40%]  text-white sm:top-[40%]">
        <h1>Develop By</h1>
        <p>Anonymous</p>
      </div>
      <div className="info absolute right-1/2 top-1/2 text-white sm:right-[40%] sm:top-[40%] ">
        <h1>Developed By</h1>
        <p>Some One Anonymous</p>
      </div>
    </div>
  )
}

export default Footer
