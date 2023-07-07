import React from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import './RecentCustomer.css'

const RecentCustomer = () => {
    const data = [
        {
            img: '/assets/admin/customer-3.svg',
            name: 'Benny Chagur',
            position: 'Member'
        },
        {
            img: '/assets/admin/customer-2.svg',
            name: 'Benny Chagur',
            position: 'Member'
        },
        {
            img: '/assets/admin/customer-1.svg',
            name: 'Benny Chagur',
            position: 'Member'
        },
        {
            img: '/assets/admin/customer-4.svg',
            name: 'Benny Chagur',
            position: 'Member'
        }
    ]
    return (
        <div className='col-lg-3 recent-customer'>
            <div className='recent-customer-div'>
                <div className='recent-customer-heading-div'>
                    <div>
                        <span className='recent-customer-heading'>Recent Customer</span>
                    </div>
                    <div><SlOptionsVertical /></div>
                </div>
                {data.map((item) => {
                    return (
                        <div className='recent-customer-box gap-2'>
                            <div>
                                <img src={item.img} className='recent-customer-img' />
                            </div>
                            <div>
                                <span className='recent-customer-name'>{item.name}</span>
                                <span className='recent-customer-position'>{item.position}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecentCustomer