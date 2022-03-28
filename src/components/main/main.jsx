import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ActionPost from "../action-post";
import ProfileInfo from "../profile-info";
import SignUp from "../signup";
import Posts from "../posts";
import Jobs from "../jobs";
import style from "./main.module.css";
import Copyright from "../copyright";
import TopProfiles from "../top-profiles";
import AddFriend from "../add-friend";

const Main = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const fetchPosts = async () => {
          const response = await fetch("http://localhost:8080/posts");
          const data = await response.json();
          return data;
      };

      fetchPosts().then((posts) => {
          setPosts(posts);
      });
  }, []);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
      const fetchJobs = async () => {
          const response = await fetch("http://localhost:8080/jobs");
          const data = await response.json();
          return data;
      };

      fetchJobs().then((jobs) => {
          setJobs(jobs);
      });
  }, []);

  const [users, setUsers] = useState([]);

  useEffect(() => {
      const fetchUsers = async () => {
          const response = await fetch("http://localhost:8080/users");
          const data = response.json();
          return data;
      };

      fetchUsers().then((users) => {
          setUsers(users);
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
                        <AddFriend users={users} title={"Suggesions"}/>
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
                         <TopProfiles users={users}/>
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
                        <AddFriend users={users} title={"Most Viewed People"} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;