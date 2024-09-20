import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAnimations } from "./../hooks/useAnimations";
import { useTranslation } from "react-i18next";

const PanelStyles = styled(motion.div)`
  position       : fixed;
  left           : 0;
  bottom         : 0;
  width          : 100%;
  /* height         : calc(100% - env(safe-area-inset-bottom)); */
  /* height         : 100%; */
  min-height     : 100%;
  z-index        : 30;
  pointer-events : none;

  .left,
  .right {
    height           : 100%;
    width            : 50.5%;
    position         : absolute;
    top              : 0;
    z-index          : 30;
    background-color : #0E100F;
  }

  .left {
    left : 0;
    /* background-color : #FFFCE1; */
  }

  .right {
    right : 0;
    /* background-color: #0E100F; */
  }

  .message {
    position   : absolute;
    top        : 50%;
    left       : 0;
    width      : 100%;
    text-align : center;
    transform  : translate(-50%, -50%);
    color      : var(--black);
    font-size  : 2rem;
    z-index    : 31;
    
    @media (max-width: 500px) {
      font-size : 1rem;
    }
  }
`;

const generateMessage = () => {
  const { t } = useTranslation();

  const messages = [
    t("messages.just_a_second"),
    t("messages.in_progress"),
    t("messages.loading"),
    t("messages.one_moment"),
    t("messages.almost_there"),
  ];

  const randomNum = Math.floor(Math.random() * messages.length);

  return messages[randomNum];
};

const Panels = () => {
  const { transition } = useAnimations();
  const { t } = useTranslation();

  return (
    <PanelStyles>

      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [window.innerHeight, window.innerHeight, 0, 0],
          top: [0, 0, window.innerHeight, window.innerHeight],
          transition: {
            ...transition,
            duration: 3.5,
            times: [0, 0.6, 0.99, 1],
          },
        }}
        exit={{
          height: [0, 0, window.innerHeight, window.innerHeight],
          top: [0, 0, 0, 0],
          transition: { ...transition, duration: 2, times: [0, 0, 1, 0.9, 1] },
        }}
        className="left"
      ></motion.div>

      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [window.innerHeight, window.innerHeight, 0, 0],
          top: [0, 0, 0, 0],
          transition: {
            ...transition,
            duration: 3.5,
            times: [0, 0.6, 0.99, 1],
          },
        }}
        exit={{
          height: [0, 0, window.innerHeight, window.innerHeight],
          top: [window.innerHeight, window.innerHeight, 0, 0],
          transition: { ...transition, duration: 2, times: [0, 0, 1, 0.9, 1] },
        }}
        className="right"
      ></motion.div>

      <motion.h2
        initial={{
          opacity: 0,
          display: "block",
          top: "60%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          top: ["70%", "50%", "50%", "30%", "40%"],
          left: "50%",
          x: "-50%",
          y: "-50%",
          opacity: [0, 1, 1, 0, 0],
          transition: {
            ...transition,
            duration: 2.4,
            times: [0, 0.5, 0.5, 0.99, 1],
          },
        }}
        exit={{ display: "none", opacity: 0, transition: { duration: 0.01 } }}
        className="message"
      >
        {generateMessage()}
      </motion.h2>
      
    </PanelStyles>
  );
};

export default Panels;