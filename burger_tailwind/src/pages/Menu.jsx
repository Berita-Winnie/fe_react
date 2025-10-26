import React from 'react'
import chocolate_cookies from '../assets/chocolate_cookies.png'
import burger_page2 from '../assets/burger_page2.png'
import deserts_bevarage from '../assets/deserts_bevarage.png'
import donuts from '../assets/donuts.png'
import food_bowl from '../assets/food_bowl.png'
import fries from '../assets/fries.png'

import lunch_offer from '../assets/lunch_offer.png'
import club from '../assets/club.png'
import salads from '../assets/salads.png'
import sides from '../assets/sides.png'
import wraps from '../assets/wraps.png'
import burger_with_juice from '../assets/burger_with_juice.png'

const Menu = () => {
  return (
    <div>
      <div className=" relative m-10 ">
        <div>
          <img className=" absolute w-60 left-40" src={burger_page2} alt="" />
          <img
            className="w-40 absolute left-4 top-50"
            src={chocolate_cookies}
            alt=""
          />
          <img
            className="w-60  absolute top-80 left-50"
            src={food_bowl}
            alt=""
          />

          <img
            className="w-40 absolute top-30 left-140"
            src={chocolate_cookies}
            alt=""
          />
          <img
            className="w-60 absolute top-0 left-220"
            src={burger_with_juice}
            alt=""
          />
          <img
            className="w-60 absolute top-48 left-230 "
            src={burger_page2}
            alt=""
          />
          <img className="w-60 absolute top-80 left-200" src={donuts} alt="" />
        </div>
      </div>
      <h1>MENU</h1>
    </div>
  )
}

export default Menu
