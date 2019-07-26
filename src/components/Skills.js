import React from 'react'
import '../styles/skills.scss'
export default function Skills() {

    let skills = [
        {
            title: 'Programming Languages',
            description: 'JavaScript, Python, Java, HTML5, CSS'
        },
        {
            title: 'Frameworks',
            description: 'Express.js, Bootstrap'
        },
        {
            title: 'Libraries',
            description: 'React.js, Redux, Reactstrap, mongoose, jQuery'
        },
        {
            title: 'Database',
            description: 'MySQL, MongoDB'
        },
        {
            title: 'Version Control',
            description: 'Git'
        }]
    return (
        <div className="container" id="tech-skills">
            <div className="row tech-skills">
                <div className="col-sm-12 ">
                    <span className="skills-header">Technical Skills</span>
                    <div className='skills-wraper'>
                        {
                            skills.map(({ title, description }) => {
                                return (
                                    <div className='individual-skill'>
                                        <span className='skill-title'>{title}</span>
                                        <span className='skill-description'>{description}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
