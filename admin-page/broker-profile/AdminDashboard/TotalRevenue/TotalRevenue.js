import React from 'react'
import { Link } from 'react-router-dom'
import './TotalRevenue.css'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import TotalRevenueChart from './TotalRevenueChart/TotalRevenueChart'
import RecentCustomer from '../RecentCustomer/RecentCustomer'

const TotalRevenue = () => {
  return (
    <>
      <div className='row total-revenue'>
        <div className='col-lg-9 total-revenue-div'>
          <div className='total-revenue-top-bar'>
            <div className='total-revenue-top-bar-heading'>TotalRevenue</div>
            <div className='total-revenue-top-bar-option'>
              <span className='total-revenue-top-bar-option-1'>Yearly</span>
              <span className='total-revenue-top-bar-option-2'>Monthly</span>
              <span className='total-revenue-top-bar-option-3'>Daily</span>
            </div>
          </div>
          <div className='total-revenue-price-div gap-5'>
            <div>
              <span className='total-revenue-price'>$236,535</span>
            </div>
            <div className='total-revenue-price-div-2 gap-3'>
              <div>
                <BsFillArrowUpCircleFill className='total-revenue-price-div-2-icon' />
              </div>
              <div>
                <span className='total-revenue-price-div-2-span-1'>0,8%</span>
                <span className='total-revenue-price-div-2-span-2'>Than last Day</span>
              </div>
            </div>
          </div>
          <TotalRevenueChart />
        </div>
        <RecentCustomer />
      </div>
    </>
  )
}

export default TotalRevenue