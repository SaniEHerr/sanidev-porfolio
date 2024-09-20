import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAnimations } from "./../hooks/useAnimations";
import { useData } from "../hooks/useData";

import Navbar from "../components/Navbar";
import MainWork from "../components/Works/MainWork";
import SecondarySection from "../components/Works/Secondary";
import Panels from "../components/Panels";

const ProjectStyles = styled(motion.main)`
  padding       : 6vw 5vw;
  padding-right : 6vw;
  overflow-y    : hidden;
  overflow-x    : hidden;
`;

const Project = () => {
  const { projectID } = useParams();
  const { getData } = useData();
  const { i18n } = useTranslation();
  const { transition, angleTextReveal } = useAnimations();

  const {
    title,
    sequence,
    secondary,
    desktopImgSrc,
    text,
    githubLink,
    githubLinkBackend,
    liveLink,
    next,
    prev,
  } = getData(projectID);

  return (
    <>
      <Navbar />

      <Panels />

      <ProjectStyles
        initial={{ backgroundColor: "rgb(15, 14, 14)", pointerEvents: "none" }}
        animate={{ backgroundColor: "transparent", pointerEvents: "unset" }}
        exit={{
          opacity: [1, 1, 0],
          transition: { duration: 2, times: [0, 0.99, 1] },
        }}
      >
        <MainWork
          title={title}
          texts={text}
          githubLink={githubLink}
          githubLinkBackend={githubLinkBackend}
          liveLink={liveLink}
          desktopImgSrc={desktopImgSrc}
        />

        <SecondarySection secondary={secondary} next={next} prev={prev} />
      </ProjectStyles>

    </>
  );
};

export default Project;