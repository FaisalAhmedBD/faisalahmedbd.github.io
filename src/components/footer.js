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
                                        <h4>Contact with Me about a work opportunities </h4><a className="btn btn-primary" href="mailto:faisalcse9@gmail.com">HIRE ME</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 bottom-widget">
                            <div id="nav_menu-2" className="widget widget_nav_menu">
                                <h3 className="widget-title">Quick Link</h3>
                                <div className="menu-quick-link-container">
                                    <ul id="menu-quick-link" className="menu">
                                        <li id="menu-item-44" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-44"><a href="about" >About</a></li>
                                        <li id="menu-item-45" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-45"><a href="contact" >Contact Me</a></li>
                                        <li id="menu-item-46" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-46"><a href="work" >Work</a></li>
                                        <li id="menu-item-47" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-47"><a href="#test" >Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 bottom-widget">
                            <div id="social_share_widget" className="widget">
                                <h3 className="widget-title">Follow Me</h3>
                                <ul className="social-share">
                                    <li><a className="facebook" href="https://www.facebook.com/Faisal.Ahmed.029" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
                                    <li><a className="linkedin" href="https://www.linkedin.com/in/f29/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                                    <li><a className="twitter" href="https://twitter.com/FaisalA60634267" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
                                    <li><a className="instagram" href="https://www.instagram.com/faisal.__.ahmed/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
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