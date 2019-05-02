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
                                <img className="profile-image img-responsive" src={Avatar} alt="Profile" title="Profile" />
                                <h3 className="profile-title">Hello, I am Faisal Ahmed</h3>

                                <div className="profile-short-note">Thank you for hanging around my online Portfolio for awhile.</div>
                                <div className="profile-short-note" style={{ color: 'red' }}>This site is under construction !</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ProfileView