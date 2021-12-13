import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ActionPost from "../actionpost/actionpost";
import ProfileInfo from "../profileinfo";
import style from "./main.module.css";

const Main = () => {
    return (
        <Container>
            <Row className={style.row}>
                <Col xs={12} md={3}>
                    <div className={style.block}>
                        <ProfileInfo />
                    </div>
                    <div className={style.block}>Suggestions</div>
                </Col>
                <Col xs={12} md={6}>
                     <div className={style.block}>
                         <ActionPost />
                     </div>
                     <div className={style.block}>post</div>
                </Col>
                <Col xs={12} md={3}>
                    <div className={style.block}>signUp</div>
                    <div className={style.block}>topJobs</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;