import React from 'react'
import { Container } from 'react-bootstrap'
import MissionTitle from '../assets/img/mission-title.png'
import MissionShape from '../assets/img/mission-shape.png'
import MissionPlane from '../assets/img/mission-carton.png'

export default function Mission() {
  return (
    <div className="mission">
      <div className="mission-shape">
        <img src={MissionShape} alt="" />
      </div>
      <Container>
      <div className="mission-title text-center">
        <img src={MissionTitle} alt="" />
      </div>
      <div className="mission-aeroplane text-center pt-0 mt-md-0 pt-lg-4">
        <img src={MissionPlane} alt="" />
      </div>
      </Container>
    </div>
  )
}
