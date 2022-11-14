import { Card, Col, Container, Row } from "react-bootstrap"
import kartuImage from "../assets/images/superhero/antman.jpg"

const Trending = () => {
    return(
        <div>
            <Container>
                <h1 className="pt-2 text-white" id="trending">Trending Movie</h1>
                <Row>
                    <Col md={4} className="movieWrapper p-4">
                    <Card className=" bg-dark movieImage mt-2 ">
                        <Card.Img src={kartuImage} />   
                        <div className="text-white p-2 m-1">
                            <Card.Title className="text-center">Ant Man </Card.Title>
                            <Card.Text className="text-left"> awkioakodaowkdoakokwodkakdo </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper p-4">
                    <Card className=" bg-dark movieImage mt-2">
                        <Card.Img src={kartuImage} />   
                        <div className="text-white p-2 m-1">
                            <Card.Title className="text-center">Ant Man </Card.Title>
                            <Card.Text className="text-left"> awkioakodaowkdoakokwodkakdo </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper p-4">
                    <Card className=" bg-dark movieImage mt-2">
                        <Card.Img src={kartuImage} />   
                        <div className="text-white p-2 m-1">
                            <Card.Title className="text-center">Ant Man </Card.Title>
                            <Card.Text className="text-left"> awkioakodaowkdoakokwodkakdo </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper p-4">
                    <Card className=" bg-dark movieImage mt-2 ">
                        <Card.Img src={kartuImage} />   
                        <div className="text-white p-2 m-1">
                            <Card.Title className="text-center">Ant Man </Card.Title>
                            <Card.Text className="text-left"> awkioakodaowkdoakokwodkakdo </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper p-4">
                    <Card className=" bg-dark movieImage mt-2">
                        <Card.Img src={kartuImage} />   
                        <div className="text-white p-2 m-1">
                            <Card.Title className="text-center">Ant Man </Card.Title>
                            <Card.Text className="text-left"> awkioakodaowkdoakokwodkakdo </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper p-4">
                    <Card className=" bg-dark movieImage mt-2">
                        <Card.Img src={kartuImage} />   
                        <div className="text-white p-2 m-1">
                            <Card.Title className="text-center">Ant Man </Card.Title>
                            <Card.Text className="text-left"> awkioakodaowkdoakokwodkakdo </Card.Text>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Trending