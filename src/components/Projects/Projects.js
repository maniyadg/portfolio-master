import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat Spot"
              description="Crafted with MERN stack and styled with precision using styled-components, this dynamic chat web application seamlessly integrates robust functionality and visually appealing design. Elevate your communication experience with an intuitive interface, real-time updates, and a seamless blend of modern technologies."
              clientLink="https://github.com/maniyadg/chatApp-client.git"
              serverLink="https://github.com/maniyadg/chatApp-server.git"
              demoLink="https://prismatic-malasada-c44b26.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Go Shop"
              description="I crafted a dynamic MERN stack e-commerce platform with integrated chat functionality, delivering a seamless shopping experience.My portfolio proudly showcases a MERN stack online shopping application complete with real-time chat capabilities, offering users an immersive browsing and communication experience.In my latest project, I engineered a cutting-edge MERN stack e-commerce solution featuring a sophisticated chat system, elevating online shopping interactions to new levels of engagement and convenience."
              clientLink="https://github.com/maniyadg/instamart-frontend.git"
              serverLink="https://github.com/maniyadg/instamart-backend.git"
              demoLink="https://friendly-narwhal-5df89d.netlify.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
