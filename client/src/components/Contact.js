import React from 'react'
import './style/Contact.css'

function Contact() {
  return (
    <div className='Contact_container'>
         
        <form className='form'>
            <input type={'text'} placeholder={'Email'} autoComplete='false'></input>
            <input type={'text'} placeholder={'Name'}  autoComplete='false'></input>
             <textarea placeholder='Message'></textarea>
            <input type={'submit'} ></input>

        </form>
       <div className='text'>
           <h1>Contact Us</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit dolor nec pharetra rutrum. Suspendisse gravida a eros vel egestas. Pellentesque euismod, tellus bibendum vehicula dapibus, dolor est pulvinar sapien, eget vulputate odio odio et nisi. Etiam consectetur in augue eget pharetra. Aenean lobortis nisl quis odio consequat pulvinar.</p>
       </div>
    </div>
  )
}

export default Contact