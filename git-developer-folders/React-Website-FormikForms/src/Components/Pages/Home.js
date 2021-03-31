import React, { Component } from 'react';
import Header from '../Common/Header'
// import image from '../assets/img/header-bg.jpg'
import image from '../assets/img/header-bg.jpg';
// import  image  from '/Users/suneetha/udemy-project-website/src/components/assets/img/header-bg.jpg'
// import image from '/Users/suneetha/udemy-react-website/src/Components/assets/img/header-bg.jpg'
//Re-usable components
import Services from '../Common/Services';
import Portofolio from '../Common/Portofolio';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';



class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portofolio />
                <Timeline />
                <Team />


            </div>
        )
    }
}
export default Home;