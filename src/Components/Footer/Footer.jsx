import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innnerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />

                <span className='secondaryText'>
                    Our Vision is to make all peope <br/> the best place
                </span>
            </div>

            {/* right side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>
                    Information
                </span>
                <span>Jl. Karya Kasih Gg.kasih dalam Medan</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer