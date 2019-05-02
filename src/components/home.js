import React from 'react'
import Menu from './menu'
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
                                    <div className="col-xs-4 col-sm-6 col-md-8 text-center">

                                        <h1>Hello world!</h1>
                                    </div>
                                    <div className="col-xs-4 col-sm-3 col-md-2 text-right">
                                        <h1>Hello world</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Menu />
                </div>
            </div>


        )
    }
}
export default Home