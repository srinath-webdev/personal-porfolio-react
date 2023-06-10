import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Srinath M</span>
                 and I'm from <span className="yellow"> Chennai, India.</span>
                <br />
                <br />
                I recently graduated with a Bachelor's degree in Computer Science  in 2020.
                <br />
                <br />
                  As a
                  <b className="yellow"> Fron End Web </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Web Development </b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Html , Css , Javascript</b> and
                  <i>
                    <b className="yellow">
                      
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Artificial Intelligence.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/srinath-webdev"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://twitter.com/srii__07"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/srinath-web-tech/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.instagram.com/srinath.07/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About