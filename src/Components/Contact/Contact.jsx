import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className='orange Text'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We always ready to help your problem</span>
            

            <div className="flexcolStart contactModes ">
                {/* First Row */}
                <div className="flexStart row">
                    {/* First Mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter Icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>081347600932</span>
                            </div>
                        </div>
                        <div className="flexCenter button row">Call Now</div>
                    </div>
                    {/* Second Mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter Icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span>
                                <span className='secondaryText'>081347600932</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="flexStart row">
                    {/* Three Mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter Icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Video Call</span>
                                <span className='secondaryText'>081347600932</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call Now</div>
                    </div>
                    {/* Fourth Mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter Icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText'>081347600932</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Message Now</div>
                    </div>
                </div>
            </div>
           </div>
            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact