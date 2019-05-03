import React from 'react'
import '../styles/footer.scss'
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 bottom-widget">
                            <div id="text-3" className="widget widget_text">
                                <h3 className="widget-title">Get In Touch</h3>
                                <div className="textwidget">
                                    <div className="info-contact">
                                        <h4>Contact with Me about a work opportunities </h4><a className="btn btn-primary" href="#">HIRE ME</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 bottom-widget">
                            <div id="nav_menu-2" className="widget widget_nav_menu">
                                <h3 className="widget-title">Quick Link</h3>
                                <div className="menu-quick-link-container">
                                    <ul id="menu-quick-link" className="menu">
                                        <li id="menu-item-43" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-43"><a href="http://demo.themeum.com/wordpress/aresmurphy/">Home</a></li>
                                        <li id="menu-item-44" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-44"><a href="#">About</a></li>
                                        <li id="menu-item-45" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-45"><a href="#">Contact Me</a></li>
                                        <li id="menu-item-46" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-46"><a href="#">Work</a></li>
                                        <li id="menu-item-47" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-47"><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 bottom-widget">
                            <div id="social_share_widget" className="widget">
                                <h3 className="widget-title">Follow Me</h3>
                                <ul className="social-share">
                                    <li><a className="facebook" href="#" target="_blank"><i className="fa fa-facebook"/></a></li>
                                    <li><a className="twitter" href="#" target="_blank"><i className="fa fa-linkedin"/></a></li>
                                    <li><a className="g-plus" href="#" target="_blank"><i className="fa fa-envelope"/></a></li>
                                    <li><a className="rss" href="#" target="_blank"><i className="icon-rss"/></a></li>
                                    <li><a className="youtube" href="#" target="_blank"><i className="icon-youtube"/></a></li>
                                    <li><a className="instagram" href="#" target="_blank"><i className="icon-instagram"/></a></li>
                                    <li><a className="vimeo" href="#" target="_blank"><i className="icon-vimeo"/></a></li>
                                </ul>
                                <div className="copyright-area">
                                    Copyright<strong> © Faisal Ahmed, 2019</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default Footer