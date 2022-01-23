import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import ActionPost from "../actionpost/actionpost";
import ProfileInfo from "../profileinfo";
import SignUp from "../signup";
import Post from "../post";
import TopJobs from "../topjobs";
import style from "./main.module.css";
import Copyright from "../copyright";
import Viewed from "../viewed";
import TopProfiles from "../topprofiles";
import Post2 from "../post2";
import PostComments from "../post-comments/post-comments";
import AddFriend from "../add-friend";

const Main = (props) => {
    return (
        <Container>
            <Row className={style.row}>
                <Col xs={12} md={3}>
                    <div className={style.block}>
                        <ProfileInfo />
                    </div>
                    <div className={style.block}>
                        <AddFriend users={props.users} title={"Suggesions"}/>
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
                         <TopProfiles users={props.users}/>
                     </div>
                     <div className={style.block}>
                         <Post2 />
                     </div>
                     <div className={style.block}>
                         <PostComments />
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
                        <AddFriend users={props.users} title={"Most Viewed People"}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

const usersType = PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    })
  );

Main.propTypes = {
    users: usersType
}

export default Main;