import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAnimations } from "../../hooks/useAnimations";
import { useTranslation } from "react-i18next";

const BigTextStyles = styled.div`
  padding       : 0 4vw;
  height        : 100vh;
  display       : flex;
  flex-wrap     : wrap;
  align-content : center;
  margin-bottom : 10vh;

  @media (min-width: 1920px) {
    margin-top : 2rem;
  } 

  .container {
    overflow : hidden;
    width    : 100%;

    :nth-child(2) {
      text-align : right;
    }

    :nth-child(3) {
      padding-left : 15vw;

      &.es {
        padding-left : 3vw;
      }
    }

    h2 {
      text-transform : uppercase;
      line-height    : 10vw;
      height         : 10vw;
      overflow       : hidden;
      font-size      : 2.1rem ;

      @media (min-width: 360px) {
        font-size : 2.475rem;
      }

      @media (min-width: 375px) {
        font-size : 2.6rem;
      }

      @media (min-width: 464px) {
        font-size : 3.2rem;
      }

      @media (min-width: 572px) {
        font-size : 3.9rem;
      }

      @media (min-width: 694px) {
        font-size : 4.8rem;
      }

      @media (min-width: 768px) {
        font-size : 5.28rem;
      }

      @media (min-width: 860px) {
        font-size : 5.9rem;
      }

      @media (min-width: 1024px) {
        font-size : 7.04rem;
      }

      @media (min-width: 1240px) {
        font-size : 8.5rem;
      }

      @media (min-width: 1476px) {
        font-size : 10.15rem;
      } 

      @media (min-width: 1550px) {
        font-size : 10.7rem;
      } 

      @media (min-width: 1650px) {
        font-size : 11.3rem;
      } 

      @media (min-width: 1920px) {
        font-size : 13.2rem;
      } 
    }
  }
`;

const BigText = () => {
  const { transition, textReveal } = useAnimations();
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language === 'es';

  return (
    <BigTextStyles className="big-text">

      <div className="container">
        <motion.h2
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0 }}
        >
          FullStack
        </motion.h2>
      </div>

      <div className="container">
        <motion.h2
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.2 }}
        >
          {" "}
          Developer
        </motion.h2>
      </div>

      <div className={`container ${isSpanish ? 'es' : ''}`}>
        <motion.h2
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.4 }}
        >
          {t('based')}{" "}
        </motion.h2>
      </div>

      <div className="container">
        <motion.h2
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.6 }}
        >
          Argentina.
        </motion.h2>
      </div>
      
    </BigTextStyles>
  );
};

export default BigText;
