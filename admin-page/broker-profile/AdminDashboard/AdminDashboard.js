import React from 'react'
import './AdminDashboard.css'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TotalRevenue from './TotalRevenue/TotalRevenue'
import PropertyReferrals from './PropertyReferrals/PropertyReferrals';

const AdminDashboard = () => {
  const data = [
    {
      title: 'Properties for Sale',
      number: '684',
      color: '#278fd9',
      percentage: 66,
    },
    {
      title: 'Properties on Hold',
      number: '546',
      color: '#FC5C67',
      percentage: 80,
    },
    {
      title: 'Total Customer',
      number: '5,732',
      color: '#2ED480',
      percentage: 30,
    },
    {
      title: 'Total Agents',
      number: '90',
      color: '#3016D0',
      percentage: 90,
    },
  ]
  return (
    <div className='admin-dashboard'>
      <div className='row admin-dashboard-row'>
        <span className='admin-dashboard-title'>Dashboard</span>
        {data.map((item) => {
          return (
            <div className='col-lg-3 admin-dashboard_top-card'>
              <div className='admin-dashboard_top-card-div'>
                <div className='admin-dashboard_top-card_text-div'>
                  <span className='admin-dashboard_top-card-title'>{item.title}</span>
                  <span className='admin-dashboard_top-card-number'>{item.number}</span>
                </div>
                <div className='admin-dashboard_top-card-circle-div'>
                  <CircularProgressbar
                    value={item.percentage}
                    className='admin-dashboard_top-card-circle'
                    strokeWidth={24}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathColor: `${item.color}`,
                    })}
                  />
                </div>
              </div>
            </div>
          )
        })}
        <TotalRevenue />
        <PropertyReferrals />
      </div>
    </div>
  )
}

export default AdminDashboard