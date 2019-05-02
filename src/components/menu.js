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
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children active has-menu-child current">
                                        <a href="#" rel="noopener noreferrer">Home</a>
                                        {/* <ul role="menu" className="sub-menu">
                                            <li className=" menu-item menu-item-type-post_type menu-item-object-page has-menu-child"><a className="custom-menu-item" href="#">Blog Left Sidebar</a></li>
                                            <li className=" menu-item menu-item-type-post_type menu-item-object-page has-menu-child"><a className="custom-menu-item" href="#">Blog Right Sidebar</a></li>
                                            <li className=" menu-item menu-item-type-post_type menu-item-object-page has-menu-child"><a className="custom-menu-item" href="#">Blog Full Width</a></li>
                                        </ul> */}
                                    </li>
                                    <li className=" menu-item menu-item-type-post_type menu-item-object-page has-menu-child"><a href="#" rel="noopener noreferrer"><span className="custom-menu-item">About Me</span></a></li>
                                    <li className=" menu-item menu-item-type-post_type menu-item-object-page has-menu-child"><a href="#" rel="noopener noreferrer">Contact Me</a></li>
                                    <li className=" menu-item menu-item-type-taxonomy menu-item-object-category has-menu-child"><a href="#" rel="noopener noreferrer">Academic Background</a></li>
                                </ul>
                            </div>


                            {/* <div id="mobile-menu" className="visible-xs visible-sm">
                                <div className="collapse navbar-collapse">
                                    <ul id="menu-main-menu-1" className="nav navbar-nav"><li id="menu-item-8" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children menu-item-8 active"><a title="Home" href="http://demo.themeum.com/wordpress/aresmurphy/">Home</a>
                                        <span className="menu-toggler collapsed" data-toggle="collapse" data-target=".collapse-8">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                        <ul role="menu" className="collapse collapse-8 ">
                                            <li id="menu-item-153" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-153"><a title="Blog Left Sidebar" href="https://demo.themeum.com/wordpress/aresmurphy/blog-left-sidebar/">Blog Left Sidebar</a></li>
                                            <li id="menu-item-152" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-152"><a title="Blog Right Sidebar" href="https://demo.themeum.com/wordpress/aresmurphy/blog-right-sidebar/">Blog Right Sidebar</a></li>
                                            <li id="menu-item-151" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-151"><a title="Blog Full Width" href="https://demo.themeum.com/wordpress/aresmurphy/blog-full-width/">Blog Full Width</a></li>
                                        </ul>
                                    </li>
                                        <li id="menu-item-143" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-143"><a title="About Me" href="https://demo.themeum.com/wordpress/aresmurphy/about-me/">About Me</a></li>
                                        <li id="menu-item-144" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"><a title="Contact Me" href="https://demo.themeum.com/wordpress/aresmurphy/contact-me/">Contact Me</a></li>
                                        <li id="menu-item-114" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-114"><a title="Graphic &amp; Design" href="https://demo.themeum.com/wordpress/aresmurphy/blog/category/graphic-design/">Graphic &amp; Design</a></li>
                                    </ul>    </div>
                            </div>
                            <div className="text-center clearfix">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu