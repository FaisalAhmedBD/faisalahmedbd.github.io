import React from 'react'
import '../styles/professional.scss'
export default function Professional() {
    return (
        <div className="container" id="professional-carrer">
            <div className="row professional-carrer">
                <div className="col-sm-12 ">
                    <span className="carrer-header">Professional Carrer</span>
                    <div className='employment-wraper'>
                        <span className="employment-period">December, 2018 - Present</span>
                        <div className="employment-description">
                            <span >Web Application Developer</span>
                            <a className="company" href="https://www.joomshaper.com/" target="_blank" rel="noopener noreferrer"> JoomShaper</a>
                            <span className="tech-desciption"> Working with : <span className="technologies">React.js, Gutenberg, jQuery</span></span>
                            <span className="job-responsibilites"> Job Responsibilites : Currently working on <a href="https://wordpress.org/plugins/qubely/" target="_blank" rel="noopener noreferrer"> Qubely </a>- Plugin, which is basically a page-builder for wordpress's new editor Gutenerg. Qubely is developed using React.js and Gutenberg's api, components.</span>
                        </div>
                    </div>
                    <div className='employment-wraper'>
                        <span className="employment-period">July - October, 2018</span>
                        <div className="employment-description">
                            <span >Backend Engineer</span>
                            <a className="company" href="https://techcare.co/" target="_blank" rel="noopener noreferrer"> TechCare Technologies Limited</a>
                            <span className="tech-description"> Worked with : <span className="technologies">Node.js, Express.js</span></span>
                        </div>
                    </div>
                    <div className='employment-wraper'>
                        <span className="employment-period">March - June, 2018</span>
                        <div className="employment-description">
                            <span >Web Development Intern</span>
                            <a className="company" href="https://techcare.co/" target="_blank" rel="noopener noreferrer"> TechCare Technologies Limited</a>
                            <span className="tech-desciption">  Worked with : <span className="technologies">JavaScript, jQyery, React.js, Node.js </span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
