import React from 'react'
import Menu from './menu'
import ProfileView from './profileView'
import '../styles/home.scss'

class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div className="homepage">
                <div className="header container-fluid">
                    <div className="row">
                        <div className="container">
                            <div className="header-menu">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-3 col-md-2">
                                        <div className="social-share">
                                            <ul>
                                                <li ><a href="https://www.facebook.com/Faisal.Ahmed.029" target="_blank" rel="noopener noreferrer"> <i className="fa fa-facebook social-share-item" /></a> </li>
                                                <li ><a href="https://www.linkedin.com/in/f29/" target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin social-share-item" /></a> </li>
                                                <li ><a href="https://www.facebook.com/Faisal.Ahmed.029" target="_blank" rel="noopener noreferrer"> <i class="fa fa-envelope social-share-item" /></a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Menu />
                </div>
                <ProfileView />
            </div>


        )
    }
}
export default Home