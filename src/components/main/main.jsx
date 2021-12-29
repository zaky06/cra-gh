import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ActionPost from "../actionpost/actionpost";
import ProfileInfo from "../profileinfo";
import SignUp from "../signup";
import Suggestions from "../suggestions";
import Post from "../post";
import TopJobs from "../topjobs";
import style from "./main.module.css";
import Copyright from "../copyright";
import Viewed from "../viewed";
import ViewedPeople from "../viewedpeople";
import TopProfiles from "../topprofiles";

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
                    <div className={style.block}>
                        <Copyright />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                     <div className={style.block}>
                         <ActionPost />
                     </div>
                     <div className={style.block}>
                         <Post />
                     </div>
                     <div className={style.block}>
                         <TopProfiles />
                     </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className={style.block}>
                        <SignUp />
                    </div>
                    <div className={style.block}>
                        <TopJobs />
                    </div>
                    <div className={style.block}>
                        <Viewed />
                    </div>
                    <div className={style.block}>
                        <ViewedPeople />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;