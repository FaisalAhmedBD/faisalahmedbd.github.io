import React from 'react'
import '../styles/menu.scss'

class Menu extends React.Component {
    render() {
        return (
            <div className="main-menu-wrap sticky-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="main-menu" className="common-menu-wrap hidden-xs hidden-sm">
                                <ul id="menu-main-menu" className="nav">
                                    <li className=" menu-item menu-item-type-post_type menu-item-object-page has-menu-child"><a href="about" rel="noopener noreferrer"><span className="custom-menu-item">About Me</span></a></li>
                                    <li className=" menu-item menu-item-type-post_type menu-item-object-page has-menu-child"><a href="https://drive.google.com/file/d/1G25jRjrMhHFdSmKNZdN8DwKbqxX3E6GV/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a></li>
                                     <li className=" menu-item menu-item-type-taxonomy menu-item-object-category has-menu-child"><a href="#professional-carrer" rel="noopener noreferrer">Professional Carrer</a></li>
                                     <li className=" menu-item menu-item-type-taxonomy menu-item-object-category has-menu-child"><a href="#academic-background" rel="noopener noreferrer">Education</a></li>
                                     <li className=" menu-item menu-item-type-post_type menu-item-object-page has-menu-child"><a href="contact" rel="noopener noreferrer">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu