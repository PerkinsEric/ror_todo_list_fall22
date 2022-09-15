import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Price = () => (
  <Container>
    <h1 className="text-center">Prices</h1>
    
    <Row>
      <Col sm='12' md='4'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Bronze</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Base</Card.Subtitle>
            <Card.Text>
              <ol>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
              </ol>
              <Button variant="light">$</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm='12' md='4'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Silver</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Mid</Card.Subtitle>
            <Card.Text>
              <ol>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
              </ol>
              <Button variant="light">$$</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm='12' md='4'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Gold</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Extra</Card.Subtitle>
            <Card.Text>
              <ol>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
              </ol>
              <Button variant="light">$$$</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default Price;