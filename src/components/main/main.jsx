import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import ActionPost from "../actionpost/actionpost";
import ProfileInfo from "../profileinfo";
import SignUp from "../signup";
import Posts from "../posts";
import Jobs from "../jobs";
import style from "./main.module.css";
import Copyright from "../copyright";
import TopProfiles from "../topprofiles";
import AddFriend from "../add-friend";

const Main = (props) => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
      const response = await fetch("http://localhost:8080/jobs");
      const data = await response.json();
      return data;
  };

  useEffect(() => {
      fetchJobs().then((jobs) => {
          setJobs(jobs)
      });
  }, []);

    return (
        <Container>
            <Row className={style.row}>
                <Col xs={12} lg={3} md={4}>
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
                <Col xs={12} lg={6} md={8}>
                     <div className={style.block}>
                         <ActionPost />
                     </div>
                     <div className={style.block}>
                         <Posts posts={posts.slice(0, 1)} />
                     </div>
                     <div className={style.block}>
                         <TopProfiles users={props.users}/>
                     </div>
                     <div className={style.block}>
                         <Posts posts={posts.slice(1, 3)}/>
                     </div>
                </Col>
                <Col xs={12} lg={3} md={0}>
                    <div className={style.block}>
                        <SignUp />
                    </div>
                    <div className={style.block}>
                        <Jobs jobs={jobs} title={"Top Jobs"} />
                    </div>
                    <div className={style.block}>
                        <Jobs jobs={jobs.slice(0, 3)} title={"Most Viewed This Week"} />
                    </div>
                    <div className={style.block}>
                        <AddFriend users={props.users} title={"Most Viewed People"} />
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
    users: usersType, 
}

export default Main;