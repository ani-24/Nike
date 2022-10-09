import React from 'react'
import '../components/style/Card.css'
import Img from '../../src/images/Home.jpg'
import {HiShoppingCart} from 'react-icons/hi'

function Card() {
  return (
      <div className='card_container'>
              <img src={Img} className='img_product'></img>
              <div className='card_footer'>
                    <div>
                        <p><span className='product_Name'>ProductName</span> <br/> <span className='price'>200$</span></p>
                    </div>
                    <button><HiShoppingCart  className='shopping_btn'/></button>
              </div>
      </div>
  )
}

export default Card