import React, { Component } from 'react';
import SingleTeam from './SingleTeam';

import img1 from '../assets/img/team/1.jpg';
import img2 from '../assets/img/team/2.jpg';
import img3 from '../assets/img/team/3.jpg';



const teams = [
    { name: 'Kay Garland', role: 'Lead Designer', image: img1 },
    { name: 'Larry Parker', role: 'Lead Marketer', image: img2 },
    { name: 'Diana Petersen', role: 'Lead Developer', image: img3 }
]

class Teams extends Component {
    render() {
        return (
            // < !--Team-- >
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {/* <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="" />
                                <h4>Kay Garland</h4>
                                <p className="text-muted">Lead Designer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="" />
                                <h4>Larry Parker</h4>
                                <p className="text-muted">Lead Marketer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="" />
                                <h4>Diana Petersen</h4>
                                <p className="text-muted">Lead Developer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div> */}



                        {teams.map((team, index) => {
                            return <SingleTeam {...team} key={index} />
                        })}

                    </div>




                </div>
            </section>
        )
    }
}
export default Teams;