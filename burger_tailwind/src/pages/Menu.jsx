import React from 'react'
import chocolate_cookies from '../assets/chocolate_cookies.png'
import burger_page2 from '../assets/burger_page2.png'
import tea_svg from '../assets/tea_svg.svg'
import donuts from '../assets/donuts.png'
import food_bowl from '../assets/food_bowl.png'
import fries from '../assets/fries.png'
import burger_grid from '../assets/burger_grid.png'
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
      <div>
        <h1 className="font-lexend text-amber-50 text-center font-bold  text-2xl md:text-3xl mb-2">
          MENU
        </h1>
        <div className="w-150 mx-auto mt-8">
          <div className="grid grid-cols-4 gap-4 ">
            <div className=" flex  flex-col justify-center  bg-gradient-to-b from-[rgba(255,255,255,0.35)] via-[rgba(255,225,180,0.25)] to-[rgba(255,225,180,0.15)] w-30 h-40 rounded-xl">
              <img classname="" src={club} alt="" />
              <p className="font-lexend text-[6px] text-center text-amber-50 ">
                NEW-IN-THE-CLUB
              </p>
            </div>

            <div className=" flex  flex-col justify-center  bg-gradient-to-b from-[rgba(255,255,255,0.35)] via-[rgba(255,225,180,0.25)] to-[rgba(255,225,180,0.15)] w-30 h-40 rounded-xl">
              <img classname="" src={burger_grid} alt="" />
              <p className="font-lexend text-[6px] text-center text-amber-50 ">
                BURGUR
              </p>
            </div>
            <div className="  flex  flex-col justify-center bg-gradient-to-b from-[rgba(255,255,255,0.35)] via-[rgba(255,225,180,0.25)] to-[rgba(255,225,180,0.15)] w-30 h-40 rounded-xl">
              <img src={sides} alt="" />
              <p className="font-lexend text-[6px] text-center text-amber-50 ">
                SIDES
              </p>
            </div>
            <div className=" flex  flex-col justify-center  gap-1 bg-gradient-to-b from-[rgba(255,255,255,0.35)] via-[rgba(255,225,180,0.25)] to-[rgba(255,225,180,0.15)] w-30 h-40 rounded-xl">
              <img src={fries} alt="" />
              <p className="font-lexend text-[6px] text-center text-amber-50 ">
                FRIES
              </p>
            </div>
            <div className="  flex  flex-col justify-center  bg-gradient-to-b from-[rgba(255,255,255,0.35)] via-[rgba(255,225,180,0.25)] to-[rgba(255,225,180,0.15)] w-30 h-40 rounded-xl">
              <img src={tea_svg} alt="" />
              <p className="font-lexend text-[6px] text-center text-amber-50 ">
                DESERT AND <br />
                BEVERAGES
              </p>
            </div>
            <div className=" flex  flex-col justify-center  bg-gradient-to-b from-[rgba(255,255,255,0.35)] via-[rgba(255,225,180,0.25)] to-[rgba(255,225,180,0.15)] w-30 h-40 rounded-xl">
              <img src={lunch_offer} alt="" />
              <p className="font-lexend text-[6px] text-center text-amber-50 ">
                LUNCH OFFER <br /> @99
              </p>
            </div>
            <div className=" flex  flex-col justify-center  bg-gradient-to-b from-[rgba(255,255,255,0.35)] via-[rgba(255,225,180,0.25)] to-[rgba(255,225,180,0.15)] w-30 h-40 rounded-xl">
              <img src={wraps} alt="" />
              <p className="font-lexend text-[6px] text-center text-amber-50 ">
                WRAPS
              </p>
            </div>
            <div className="  flex  flex-col justify-center bg-gradient-to-b from-[rgba(255,255,255,0.35)] via-[rgba(255,225,180,0.25)] to-[rgba(255,225,180,0.15)] w-30 h-40 rounded-xl">
              <img src={salads} alt="" />
              <p className="font-lexend text-[6px] text-center text-amber-50 ">
                SALADS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
