import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutCarton from '../assets/img/about-carton.png'
import AboutCartonBg from '../assets/img/about-carton-bg.png'
import AboutTitle from '../assets/img/about-heading.png'

export default function About() {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col md={12}>
            <div className="about-title text-center">
              <img src={AboutTitle} alt="" />
            </div>
            <div className="about-imgbox position-relative">
              <div className="about-cartonbg text-center pt-3 pt-md-3 pt-lg-5 mt-2 mt-md-3 mt-lg-4">
                <img className='mt-3' src={AboutCartonBg} alt="" />
              </div>
              <div className="about-carton">
                <img src={AboutCarton} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
