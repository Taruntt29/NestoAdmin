import React from 'react'
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { SlOptionsVertical } from 'react-icons/sl'
import './PropertyReferrals.css'
const PropertyReferrals = () => {
    const data = [
        {
            title: 'Social Media',
            percentage: '20%',
            color: '#4879F5',
        },
        {
            title: 'Marketplaces',
            percentage: '40%',
            color: '#44D2F1',
        },
        {
            title: 'Websites',
            percentage: '15%',
            color: '#20C745',
        },
        {
            title: 'Digital Ads',
            percentage: '25%',
            color: '#F4A74B',
        },
        {
            title: 'Others',
            percentage: '15%',
            color: '#F45252',
        }
    ]
    return (
        <div className='row property-referrals'>
            <div className='col-lg-6 property-referrals-div'>
                <div className='property-referrals-top-bar'>
                    <div className='property-referrals-heading-div'>
                        <div>
                            <span className='property-referrals-heading'>Property Referrals</span>
                        </div>
                        <div><SlOptionsVertical /></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-5'>
                        <div className='row'>
                            {data.map((item) => {
                                return (
                                    <div className='col-lg-12 property-referrals-percentage'>
                                        <div className='property-referrals-percentage-div gap-2'>
                                            <div className='property-referrals-color-block' style={{ background: `${item.color}` }}></div>
                                            <span className='property-referrals-percentage-title'>{item.title}</span>
                                        </div>
                                        <div>
                                            <span className='property-referrals-percentage-percent'>{item.percentage}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <CircularProgressbarWithChildren
                            value={75}
                            strokeWidth={8}
                            styles={buildStyles({
                                pathColor: "#f00",
                                trailColor: "transparent"
                            })}
                        >
                            {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
                            <div style={{ width: "84%" }}>
                                <CircularProgressbar
                                    value={70}
                                    styles={buildStyles({
                                        trailColor: "transparent"
                                    })}
                                />
                                <div style={{ width: "44%" }}>
                                    <CircularProgressbar
                                        value={40}
                                        styles={buildStyles({
                                            trailColor: "transparent"
                                        })}
                                    />
                                </div>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyReferrals