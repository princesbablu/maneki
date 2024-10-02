import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap';
import communitylrgimg from "../assets/img/cmnityimg.png"
import Social from './Social';
export default function Community() {
  return (
    <div className='community'>
      <Container>
        <Row>
          <Col>
            <div className="community-content text-center">
              <h2>Our community</h2>
              <div className="community-items position-relative">
                <figure className='communitylrgimg'>
                  <img src={communitylrgimg} alt="" />
                </figure>
                <div className="cm-socials">
                  <Social />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
