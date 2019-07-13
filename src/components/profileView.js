import React from 'react'
import '../styles/profile.scss'
import Avatar from '../assets/me.jpg'
class ProfileView extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row profile-wraper">
                    <div className="col-sm-12">
                        <div className="blog-profile-view">
                            <div className="blog-profile-view-in">
                                <img className="profile-image img-responsive" src={Avatar} alt="faisal_ahmed" title="Profile" />
                                <div className="welcome-message">
                                    <span className="introductory">Hello, I am Faisal Ahmed</span>
                                    <span className="message">Thank you for hanging-around on my online portfolio</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ProfileView