import React from 'react'
import './style/Home.css'
import Card from './Card';
import Img from '../images/Home.jpg'

function Home() {
 
    fetch('/shoes')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });

  return (
       <div className='Home_container'>
          <div className='Home_img'>
              <div>
                  <h1 className='welcome'>Lorem ipsum dolor sit amet</h1>
                  <p className='paragraph1'>Lorem ipsum dolor sit amet</p>
                  <input  type={'button'} className='shop_now'  value='Shop Now' />
              </div>
         </div>
         <div className='products'>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
              </div>
       </div>
  )}

export default Home