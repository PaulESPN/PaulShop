import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'


function Footer() {
    return (
          <footer>
            <Container>
              <Row>
                <Col className="text-center py-3">© Paul Espinoza {(new Date().getFullYear())}</Col>
              </Row>
              <Row>
                <Col className="text-center py-3">
                  <div>Icons made by <a title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com" title="Flaticon">www.flaticon.com</a></div>
                </Col>
              </Row>


            </Container>
          </footer>
    )
}

export default Footer
