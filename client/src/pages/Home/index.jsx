import React from "react";
import "./style.css";
import CardList from "../../components/CardList/CardList";
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <>
        <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="image-hero">
                <div className="container banner-content col-lg-9">
                    <div>
                        <h1 className="text-white">HELLO WE'RE BIZPRO</h1>
                        <h6 className="text-white">SUB HEAD, MOTTO OR MISSION SUBTITLE</h6>
                    </div>

                    <a href="add" className="primary-btn text-uppercase">
                        SEE OUR PROJECTS
                    </a>
                </div>
            </div>

            <CardList />

            <div id="team-section">
                <div className="container">
                    <div className="theme-title">
                        <h2 className="mt-5 mb-5">Meet our Team</h2>
                        <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    </div>
                    <div className="clear-fix team-member-wrapper">
                        <div className="float-left">
                            <div className="single-team-member">
                                <div className="img">
                                    <img src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg" alt="Image" />
                                    <div className="opacity tran4s">
                                        <h4>Gonzalez Gina</h4>
                                        <span>Web Developer</span>
                                        <p>On the other hand, We denounce ut with righteo indignation and dislike men who are so beguiled and demoralized.</p>
                                    </div>
                                </div>
                                <div className="member-name">
                                    <h6>Gonzalez Gina</h6>
                                    <p>Web Developer</p>

                                </div>
                            </div>
                        </div>
                        <div className="float-left">
                            <div className="single-team-member">
                                <div className="img">
                                    <img src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg" alt="Image" />
                                    <div className="opacity tran4s">
                                        <h4>Holly Vincenzini</h4>
                                        <span>Media Partner</span>
                                        <p>On the other hand, We denounce ut with righteo indignation and dislike men who are so beguiled and demoralized.</p>
                                    </div>
                                </div>
                                <div className="member-name">
                                    <h6>Holly Vincenzini</h6>
                                    <p>Media Partner</p>
                                </div>
                            </div>
                        </div>
                        <div className="float-left">
                            <div className="single-team-member">
                                <div className="img">
                                    <img src="	https://preview.colorlib.com/theme/bizpro/images/team/3.jpg" alt="Image" />
                                    <div className="opacity tran4s">
                                        <h4>Ramirez Minita</h4>
                                        <span>Graphic Design</span>
                                        <p>On the other hand, We denounce ut with righteo indignation and dislike men who are so beguiled and demoralized.</p>
                                    </div>
                                </div>
                                <div className="member-name">
                                    <h6>Ramirez Minita</h6>
                                    <p>Graphic Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="blog-section">
                <div className=" container">
                    <div className="theme-title">
                        <h2>OUR LATEST Blog</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    </div>
                    <div className="d-flex clear-fix">
                        <div className=" col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="single-news-item">
                                <div className="img"><img src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg" alt="Image"/>
                                    <a href="blog-details.html" className="opacity tran4s"><i className="fa fa-link" aria-hidden="true"></i></a>
                                </div>
                                <div className="post">
                                    <h6><a href="blog-details.html" className="tran3s">Playback: Akufo-Addo speaks to business community</a></h6>
                                    <a href="blog-details.html">Posted by <span className="p-color">admin</span> at 04 Feb, 2017</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... <a href="blog-details.html" className="tran3s">Read More</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="single-news-item">
                                <div className="img"><img src="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg" alt="Image"/>
                                    <a href="blog-details.html" className="opacity tran4s"><i className="fa fa-link" aria-hidden="true"></i></a>
                                </div>
                                <div className="post">
                                    <h6><a href="blog-details.html" className="tran3s">Playback: Akufo-Addo speaks to business community</a></h6>
                                    <a href="blog-details.html">Posted by <span className="p-color">admin</span> at 04 Feb, 2017</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... <a href="blog-details.html" className="tran3s">Read More</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="single-news-item">
                                <div className="img"><img src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg" alt="Image"/>
                                    <a href="blog-details.html" className="opacity tran4s"><i className="fa fa-link" aria-hidden="true"></i></a>
                                </div>
                                <div className="post">
                                    <h6><a href="blog-details.html" className="tran3s">Playback: Akufo-Addo speaks to business community</a></h6>
                                    <a href="blog-details.html">Posted by <span className="p-color">admin</span> at 04 Feb, 2017</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... <a href="blog-details.html" className="tran3s">Read More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;
