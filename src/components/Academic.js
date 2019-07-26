import React from 'react'
import '../styles/academic.scss'
export default function Academic() {
    return (
        <div className="container" id="academic-background">
            <div className="row academic-background">
                <div className="col-sm-12 ">
                    <span className="academy-header">Education</span>
                    <div className='graduation-wraper'>
                        <span className="graduation-period">2013-2017</span>
                        <div className="academic-description">
                            <span > Bachelor of <b> Computer Science &amp; Engineering </b> </span>
                            <a className="academy" href="http://ruet.ac.bd/" target="_blank" rel="noopener noreferrer"> Rajshahi University of Engineering &amp; Technology </a>
                            <span className="grade">CGPA : 3.45 out of 4.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
