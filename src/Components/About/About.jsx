import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import "./About.css"


const About = () => {
  return (
    <Container>
      <h2>Why Choose WorkGenie</h2>
      <Image src="../Assets/Image/banner2.png" fluid /><br />
      <Row>
        {/* Each Col takes 12 columns on xs (mobile), 6 on sm, and 3 on md+ screens */}
        <Col xs={12} sm={6} md={6}>
          <Card className="m-4">
            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Title><Image src='../Assets/Logo/one.png' style={{height:50,width:"auto"}} /></Card.Title>
              <Card.Text style={{fontSize:20, fontWeight:600}}>
                Pioneering Career Growth Through Innovative Solution
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={6}>
          <Card className="m-4">
            <Card.Body className='d-flex flex-column justify-content-center align-items-center' >
              <Card.Title><Image src='../Assets/Logo/two.png'style={{height:50,width:"auto"}} /></Card.Title>
              <Card.Text style={{fontSize:19, fontWeight:600}}>
                Offering Detailed Insights into New Positions and Career Paths
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={6}>
          <Card className="m-4">
            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Title><Image src='../Assets/Logo/three.png'style={{height:50,width:"auto"}} /></Card.Title>
              <Card.Text style={{fontSize:20,fontWeight:600}}>
                Tailorrd Career Solutrions for Every Proffessional
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={6}>
          <Card className="m-4">
            <Card.Body className='d-flex flex-column justify-content-center align-items-center' >
              <Card.Title><Image src='../Assets/Logo/four.png'style={{height:50,width:"auto"}} /></Card.Title>
              <Card.Text style={{fontSize:20,fontWeight:600}}>
                Transforming Career Trajectories with Strategec insights
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About