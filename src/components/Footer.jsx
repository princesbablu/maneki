import { Container, Row, Col } from "react-bootstrap"
import Logo from './Logo'
import Social from './Social'

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="footer-wrap flex-wrap d-flex align-items-center justify-content-between gap-3">
              <Logo />
              <p>©$MANEKI 2024 BY MEGA AND OTHER MEME COIN S COMES WITH RISKS. THERES A CHANCE YOU COOULD LOSE YOUR INVESTMENT.MAKE SURE TO DO THOROUGH RESEARCH (DYOR)  BEFORE DIVING IN</p>
              <Social />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
