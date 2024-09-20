import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAnimations } from "./../hooks/useAnimations";
import { WorksList } from "../data/workList";
import WorkItem from "../components/Works/WorkItem";
import Navbar from "../components/Navbar";
import Panels from "../components/Panels";
import { useTranslation } from "react-i18next";

const WorksStyles = styled(motion.section)`
  width    : 100vw;
  height   : 100vh;
  padding  : 6vw 4vw;
  display  : flex;
  overflow : hidden;

  @media (max-width: 1024px) {
    padding : 6vw 10vw;
  }

  .title-wrapper {
    width           : 30%;
    height          : 100%;
    display         : flex;
    justify-content : center;
    align-items     : center;

    @media (max-width: 1024px) {
      display : none;
    }
    
    .title {
      .word-wrapper {
        overflow : hidden;

        :nth-child(2) {
          position : relative;
          left     : 15%;
        }

        .word {
          font-size      : 1rem;
          text-transform : uppercase;

          @media (min-width: 1024px) {
            font-size : 2.3037rem;
          }

          @media (min-width: 1240px) {
            font-size : 2.7923rem;
          }

          @media (min-width: 1476px) {
            font-size : 3.3255rem;
          } 

          @media (min-width: 1550px) {
            font-size : 3.5168rem;
          } 

          @media (min-width: 1650px) {
            font-size : 3.7193rem;
          } 

          @media (min-width: 1920px) {
            font-size : 4.32rem;
          }
        }
      }
    }
  }

  .content {
    width           : 100%;
    height          : 100%;
    display         : flex;
    justify-content : center;
    align-items     : center;
    padding         : 10vh 0;

    @media (min-width: 572px) {
      padding : 7vh 2vh 7vh;
    }

    @media (min-width: 694px) {
      padding : 7vh 2vh 0;
    }

    @media (min-width: 768px) {
      padding : 7vh 2vh 0;
    }

    @media (min-width: 860px) {
      padding : 6vh 2vh 0;
    }

    @media (min-width: 1024px) {
      padding : 8vh 2vh 0;
      width   : 70%;
    }

    @media (min-width: 1240px) {
      padding : 6vh 2vh 0;
    }

    @media (min-width: 1476px) {
      padding : 5vh 2vh 0;
    } 

    @media (min-width: 1550px) {
      padding : 4vh 2vh 0;
    } 

    @media (min-width: 1650px) {
      padding : 3vh 2vh 0;
    } 

    @media (min-width: 1920px) {
      margin-top : 1rem;
      padding    : 0vh 2.4rem;
    }

    .works-list {
      width         : 100%;
      height        : 100%;
      display       : flex;
      align-content : space-around;
      flex-wrap     : wrap;
    }
  }
`;

const Work = () => {
  const { parent, transition, worksTitleParent, angleTextReveal } = useAnimations();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <Panels />

      <WorksStyles
        initial={{ backgroundColor: "#0f0e0e", pointerEvents: "none" }}
        animate={{ backgroundColor: "transparent", pointerEvents: "unset" }}
        exit={{
          opacity: [1, 1, 0],
          transition: { duration: 2, times: [0, 0.99, 1] },
        }}
      >
        <div className="title-wrapper">
          <motion.div
            variants={worksTitleParent}
            initial="initial"
            animate="animate"
            className="title"
          >
            <motion.h1 className="word-wrapper">
              <motion.div
                variants={angleTextReveal}
                transition={transition}
                className="word"
              >
                {t('some')}
              </motion.div>
            </motion.h1>
            <motion.h1 className="word-wrapper">
              <motion.div
                variants={angleTextReveal}
                transition={transition}
                className="word"
              >
                {t('of-my')}
              </motion.div>
            </motion.h1>
            <motion.h1 className="word-wrapper">
              <motion.div
                variants={angleTextReveal}
                transition={transition}
                className="word"
              >
                {t('projects')}
              </motion.div>
            </motion.h1>
          </motion.div>
        </div>

        <div className="content">
          <motion.ul
            variants={parent}
            initial="initial"
            animate="animate"
            className="works-list"
          >
            {WorksList.map((data) => {
              return <WorkItem data={data} key={data.id} />;
            })}
          </motion.ul>
        </div>
      </WorksStyles>
    </>
  );
};

export default Work;
