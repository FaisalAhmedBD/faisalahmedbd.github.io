import React from 'react'

import { Menu, ProfileView, CarrerObjectives, Skills, Professional, Academic, Footer } from './index'
import '../styles/home.scss'

class Home extends React.Component {
    render() {
        return (
            <div className="homepage">
                <div className="header container-fluid menu">
                    <Menu />
                </div>
                <ProfileView />
                <CarrerObjectives />
                <Skills />
                <Professional />
                <Academic />
                <Footer />
            </div>


        )
    }
}
export default Home