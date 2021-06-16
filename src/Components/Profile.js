import { BadgeCheckIcon } from "@heroicons/react/solid"
import { Container, Row, Col } from "react-bootstrap"
import Lightbox from "./Lightbox"


const Profile = ({ isEnabled, setPosition}) => {
    const RedirectTo = (path) => {
        window.location.href = path;
    }
    return(
        <>
            {setPosition("home")}
            <div className="border-b-2 border-gray-200 py-8">
                <Container>
                    <Row>
                        <Col xs="4" className="flex justify-end">
                            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="profile" className="w-40 h-40 rounded-full" />
                        </Col> 
                        <Col className="mx-20">
                            <Row>
                                <Col xs="3" className="text-2xl font-thin">
                                    Testing
                                </Col>
                                <Col xs="1" className="h-12 py-2">
                                <BadgeCheckIcon className="w-6 h-6 text-blue-600" />
                                </Col>
                                <Col xs="3">
                                    <button className="btn btn-outline-secondary" onClick={() => {RedirectTo("/account/settings")}}>
                                        Edit profile
                                    </button>
                                </Col>
                            </Row>
                            <Row className="font-thin text-md">
                                <Col> Posts(45) </Col>
                                <Col> Followers(45) </Col>
                                <Col> Follows(45) </Col>
                                <Col xs="4" />
                            </Row> 
                            <Row className="font-medium text-md">
                                <Col>
                                    Testing Account
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Lightbox Theme={isEnabled} />
            </div>
        </>
    )
}

export default Profile;