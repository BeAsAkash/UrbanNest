import React from 'react'
import "./Help.css"
import { Height } from '@mui/icons-material'

const Help = () => {
    return (
        <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:'center'}} className='container'>
            <div className='footer-container '>
                <div className='footer-sub-1'>
                    <img style={{ width: "65px", height: "65px" }} className="icon" alt="Icon" src="https://cdn-icons-png.flaticon.com/512/2484/2484013.png" />
                    
                    <div style={{ marginTop: "1rem" }}>
                        <p>Urban Nest is the best place to find your next perfect place to live.We have a wide range of properties for you to choose from.</p>
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                        <p style={{ fontWeight: 600 }}>Company Information:</p>
                        <ul>
                            <li>Lucknow</li>
                            <li>8318603271</li>
                            <li>UrbanNest@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-sub-2'>
                    <div className='dummy' style={{ height: "50px" }}></div>
                    <div style={{ marginTop: "1rem" }}>
                        <p>Discover the perfect blend of comfort and style in our exquisite properties. Experience the epitome of luxurious living today.</p>
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                        <p style={{ fontWeight: 600 }}>Connect with us:</p>
                        <div style={{ display: "flex", gap: "45px" }}>
                            <a target='_blank' href='https://twitter.com/'><img src='https://i.ibb.co/qJrRfr6/Vector.png' /></a>
                            <a target='_blank' href='https://web.whatsapp.com/'><img src='https://i.ibb.co/WKb2jLD/Vector-1.png' /></a>
                            <a target='_blank' href='https://www.facebook.com/'><img src='https://i.ibb.co/Hp40Qnm/Vector-2.png' /></a>
                            <a target='_blank' href='https://www.linkedin.com/'><img src='https://i.ibb.co/P6g0MYF/Vector-3.png' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help