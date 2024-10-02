import { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import img from '../assets/img/launch-img.png'
import VanillaTilt from 'vanilla-tilt'

export default function Launch() {
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
    <div className='launch'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="launch-wrap text-center">
              <div className="launch-content">
                <h2>Launch on sunpump</h2>
                <p>The First Meme Fair Launch Platform on Tron. PUMP TO THE SUN</p>
              </div>
              <div className="img" ref={tiltRef}>
                <img src={img} alt="" />
              </div>
              <a href="#" className="btn">Buy Now</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
