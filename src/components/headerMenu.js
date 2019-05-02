import React from 'react'
import '../styles/header-menu.scss'

export default () => {

    return (
        <div className="container">
            <div className="header-menu">
                <div className="row">
                    <div className="col-xs-4 col-sm-3 col-md-2">
                        <div className="social-share">
                            <ul>
                                <li> facebook   </li>
                                <li>  LinkedIn   </li>
                                <li>   Gmail   </li>

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

    )
}