import React, { useRef } from "react";
import styled from "styled-components";
import { delay, motion, useInView } from "framer-motion";
import { useAnimations } from "../../hooks/useAnimations";
import { useTranslation } from "react-i18next";

const MainSectionStyles = styled.div`
  padding         : 2rem 1.5rem;
  margin          : 10vh 0;
  display         : flex;
  justify-content : center;
  align-items     : center;
  position        : relative;
  height          : 100%;

  @media (min-width: 360px) {
    padding : 2rem 2rem;
  }

  @media (min-width: 1240px) {
    margin : 20vh 0;
  }

  @media (max-width: 500px){
    flex-wrap       : wrap;
    justify-content : flex-start;
  }

  .span-bg {
    -webkit-background-image : linear-gradient(125deg, #40CBE8, #FE8609);
    background-clip          : inherit;
    -webkit-background-clip  : text;
    -webkit-text-fill-color  : transparent;
    font-weight              : bold;
    background-image         : linear-gradient(125deg, #40CBE8, #FE8609);
  }
      
  .main-text {
    display        : flex;
    flex-direction : column;
    gap            : 1rem;
    width          : 80%;
    text-align     : center;

    @media (max-width: 900px) {
      width : 90%;
      right : 14%;
    }

    @media (max-width: 700px){
      width : 75%;
    }

    @media (max-width: 500px){
      width  : 100%;
      right  : 0;
      bottom : 20vh;
    }

    h1 {
      font-size : 1.3rem;

      @media (min-width: 360px) {
        font-size : 1.55rem;
        text-wrap : balance;
      }

      @media (min-width: 375px) {
        font-size : 1.55rem;
      }

      @media (min-width: 464px) {
        font-size : 1.7rem;
      }

      @media (min-width: 572px) {
        font-size : 1.9rem;
      }

      @media (min-width: 694px) {
        font-size : 2.1rem;
      }

      @media (min-width: 768px) {
        font-size : 2.3rem;
      }

      @media (min-width: 860px) {
        font-size : 2.6rem;
      }

      @media (min-width: 1024px) {
        font-size : 2.8rem;
      }

      @media (min-width: 1240px) {
        font-size : 3.1rem;
      }

      @media (min-width: 1476px) {
        font-size : 3.4rem;
      }

      @media (min-width: 1550px) {
        font-size : 3.4rem;
      } 

      @media (min-width: 1650px) {
        font-size : 3.4rem;
      } 

      @media (min-width: 1920px) {
        font-size : 3.4rem;
      } 
    }

    p {
      color          : var(--black);
      z-index        : 1111;
      margin         : 3vw 0;
      mix-blend-mode : normal;
      font-weight    : 400;
      font-family    : monument;
      font-size      : .65rem;

      @media (min-width: 360px) {
        font-size : .95rem;
      }

      @media (min-width: 375px) {
        font-size : .95rem;
      }

      @media (min-width: 464px) {
        font-size : .95rem;
      }

      @media (min-width: 572px) {
        font-size : .95rem;
      }

      @media (min-width: 694px) {
        font-size : 1.05rem;
      }

      @media (min-width: 768px) {
        font-size : 1.15rem;
      }

      @media (min-width: 860px) {
        font-size : 1.3rem;
      }

      @media (min-width: 1024px) {
        font-size : 1.4rem;
      }

      @media (min-width: 1240px) {
        font-size : 1.55rem;
      }

      @media (min-width: 1476px) {
        font-size : 1.7rem;
      } 

      @media (min-width: 1550px) {
        font-size : 1.7rem;
      } 

      @media (min-width: 1650px) {
        font-size : 1.7rem;
      } 

      @media (min-width: 1920px) {
        font-size : 1.7rem;
      } 

      a {
        font-family    : Grotesk;
        text-transform : none;
        mix-blend-mode : normal;
      }
    }
  }
`;

const MainSection = () => {
  const h1Ref = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  
  const isH1InView = useInView(h1Ref, { once: true });
  const isP1InView = useInView(p1Ref, { once: true });
  const isP2InView = useInView(p2Ref, { once: true });
  const isP3InView = useInView(p3Ref, { once: true });

  const { t } = useTranslation();

  return (
    <MainSectionStyles className="main">

      <div className="main-text">

        <div>
          <motion.h1
            ref={h1Ref}
            initial={{ transform: "translateX(-200px)", opacity: 0 }}
            animate={{
              transform: isH1InView ? "none" : "translateX(-200px)",
              opacity: isH1InView ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.17, 0.55, 0.55, 1],
              delay: 0.2,
            }}
          >
            {t('welcome')}
          </motion.h1>
        </div>

        <div>
          <motion.p
            ref={p1Ref}
            initial={{ transform: "translateX(-200px)", opacity: 0 }}
            animate={{
              transform: isP1InView ? "none" : "translateX(-200px)",
              opacity: isP1InView ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.17, 0.55, 0.55, 1],
              delay: 0.2,
            }}
          >
            {t('my-name-is')} <span className="span-bg">{"<Santiago-Herrera />"}</span>, {t('but-my-friends-call-me')} <span className="span-bg">{"<Sani />"}</span>, {t('and-I’m')} <span className="span-bg">{t('24-years-old')}</span>. {t('i-studied')} <span className="span-bg">{t('programming')}</span>. {t('it’s-been')}.
          </motion.p>

          <motion.p
            ref={p2Ref}
            initial={{ transform: "translateX(-200px)", opacity: 0 }}
            animate={{
              transform: isP2InView ? "none" : "translateX(-200px)",
              opacity: isP2InView ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.17, 0.55, 0.55, 1],
              delay: 0.2,
            }}
          >
            {t('among-my')} <span className="span-bg">{t('achievements')}</span>, {t('i-highlight')} <span className="span-bg">{"<Chilling-Time />"}</span>, {t('where-i')} <span className="span-bg">{t('user-management')}</span>, {t('and')} <span className="span-bg">{t('platform')}</span>.
          </motion.p>

          <motion.p
            ref={p3Ref}
            initial={{ transform: "translateX(-200px)", opacity: 0 }}
            animate={{
              transform: isP3InView ? "none" : "translateX(-200px)",
              opacity: isP3InView ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.17, 0.55, 0.55, 1],
              delay: 0.2,
            }}
          >
            {t('currently-i')} <span className="span-bg">{"<Angular />"}</span> {t('and-y')} <span className="span-bg">{"<Nest />"}</span>. {t('at-the-same')} <span className="span-bg">{"<TypeScript />"}</span> {t('and-thoroughly')} <span className="span-bg">{t('react-ecosystem')}</span>.
          </motion.p>
        </div>

      </div>

    </MainSectionStyles>
  );
};

export default MainSection;
