import { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Token from "./Token"
import bannerImg from "../assets/img/banner-img.png"
import VanillaTilt from 'vanilla-tilt'

export default function Banner() {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 15,
      perspective: 1400,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 1200,
      glare: true,
      "max-glare": 0.2,
      scale: 1.04
    });

    return () => tiltRef.current.vanillaTilt.destroy();
  }, []);
  
  return (
    <div className='banner position-relative z-1'>
      <Container>
        <Row className='justify-content-center'>
          <Col xl="8" className=''>
            <div className="banner-wrap text-center">
              <div className="banner-content">
                <h1>Maneki-neko two</h1>
                <p>招き猫は飼い主に幸運をもたらす</p>
              </div>
              <div className="img" ref={tiltRef}>
                <img src={bannerImg} alt="" />
              </div>
              <a href="#" className="btn">Buy now</a>
              <div className="token-wrap text-start">
                <p className='token-wrap-p'>Tron CONTRACT ADDRESS </p>
                <Token />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
