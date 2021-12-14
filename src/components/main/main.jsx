import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ActionPost from "../actionpost/actionpost";
import ProfileInfo from "../profileinfo";
import SignUp from "../signup";
import Suggestions from "../suggestions";
import Post from "../post";
import TopJobs from "../topjobs";
import style from "./main.module.css";

const Main = () => {
    return (
        <Container>
            <Row className={style.row}>
                <Col xs={12} md={3}>
                    <div className={style.block}>
                        <ProfileInfo />
                    </div>
                    <div className={style.block}>
                        <Suggestions />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                     <div className={style.block}>
                         <ActionPost />
                     </div>
                     <div className={style.block}>
                         <Post />
                     </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className={style.block}>
                        <SignUp />
                    </div>
                    <div className={style.block}>
                        <TopJobs />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;