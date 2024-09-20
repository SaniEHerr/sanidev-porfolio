import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import Navbar from "../components/Navbar";
import BigText from "../components/About/BigText";
import MainSection from "../components/About/MainSection";
import Info from "../components/About/Info";
import Marque from "../components/About/Marque";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const AboutStyles = styled(motion.main)`
  padding-bottom : 6vw;
  overflow-x     : hidden;

  .hello {
    h2 {
      font-size       : 1rem;
      scroll-behavior : smooth;

      @media (min-width: 360px) {
        font-size : 1.2rem;
      }

      @media (min-width: 375px) {
        font-size : 1.2rem;
      }

      @media (min-width: 464px) {
        font-size : 1.3rem;
      }

      @media (min-width: 572px) {
        font-size : 1.4rem;
      }

      @media (min-width: 694px) {
        font-size : 1.6rem;
      }

      @media (min-width: 768px) {
        font-size : 1.7rem;
      }

      @media (min-width: 860px) {
        font-size : 1.8rem;
      }

      @media (min-width: 1024px) {
        font-size : 1.9rem;
      }

      @media (min-width: 1240px) {
        font-size : 2.1rem;
      }

      @media (min-width: 1476px) {
        font-size : 2.2rem;
      } 

      @media (min-width: 1550px) {
        font-size : 2.3rem;
      } 

      @media (min-width: 1650px) {
        font-size : 2.4rem;
      } 

      @media (min-width: 1920px) {
        font-size : 2.5rem;
      }
    }
  }

  .name {
    text-align : center;
    margin     : 5vh 0 5vh 0;

    @media (min-width: 1024px) {
      margin : 10vh 0 10vh 0;
    }

    h2 {
      line-height             : 9vw;
      height                  : 9vw;
      -webkit-text-fill-color : transparent;
      -webkit-text-stroke     : 0.1vw var(--black);
      text-transform          : uppercase;
      font-size               : 2.25rem;

      @media (min-width: 360px) {
        font-size : 2.7rem;
      }

      @media (min-width: 375px) {
        font-size : 2.8125rem;
      }

      @media (min-width: 464px) {
        font-size : 3.48rem;
      }

      @media (min-width: 572px) {
        font-size : 3.6rem;
      }

      @media (min-width: 694px) {
        font-size : 4.35rem;
      }

      @media (min-width: 768px) {
        font-size : 4.8rem;
      }

      @media (min-width: 860px) {
        font-size : 5.38rem;
      }

      @media (min-width: 1024px) {
        font-size : 6.4rem;
      }

      @media (min-width: 1240px) {
        font-size : 7.8rem;
      }

      @media (min-width: 1476px) {
        font-size : 9.23rem;
      } 

      @media (min-width: 1550px) {
        font-size : 9.7rem;
      } 

      @media (min-width: 1650px) {
        font-size : 10.32rem;
      } 

      @media (min-width: 1920px) {
        font-size : 12rem;
      } 
    }

    h3 {
      text-align      : center;
      z-index         : 5;
      font-size       : 1.5rem;
      position        : relative;
      top             : 15rem;
      scroll-behavior : smooth;

      @media (min-width: 360px) {
        font-size : 1.7rem;
      }

      @media (min-width: 375px) {
        font-size : 1.7rem;
      }

      @media (min-width: 464px) {
        font-size : 1.9rem;
      }

      @media (min-width: 572px) {
        font-size : 2.1rem;
      }

      @media (min-width: 694px) {
        font-size : 2.3rem;
      }

      @media (min-width: 768px) {
        font-size : 2.6rem;
      }

      @media (min-width: 860px) {
        font-size : 2.8rem;
      }

      @media (min-width: 1024px) {
        font-size : 3.1rem;
      }

      @media (min-width: 1240px) {
        font-size : 3.4rem;
      }

      @media (min-width: 1476px) {
        font-size : 3.7rem;
      } 

      @media (min-width: 1550px) {
        font-size : 4rem;
      } 

      @media (min-width: 1650px) {
        font-size : 4.3rem;
      } 

      @media (min-width: 1920px) {
        font-size : 5rem;
      } 
    }

    div {
      margin-top : 1.7rem;

      @media (min-width: 500px) {
        margin-top : 1.5rem;
      }

      @media (min-width: 700px) {
        margin-top : 2rem;
      }

      @media (min-width: 900px) {
        margin-top : 2.1rem;
      }
    }

    a {
      text-align    : center;
      margin-inline : 10px;
      font-size     : 1.4rem;

      @media (min-width: 360px) {
        font-size : 1.8rem;
      }

      @media (min-width: 375px) {
        font-size : 2.5rem;
      }

      @media (min-width: 464px) {
        font-size : 2rem;
      }

      @media (min-width: 572px) {
        font-size : 2.2rem;
      }

      @media (min-width: 694px) {
        font-size : 2.5rem;
      }

      @media (min-width: 768px) {
        font-size : 2.8rem;
      }

      @media (min-width: 860px) {
        font-size : 3rem;
      }

      @media (min-width: 1024px) {
        font-size : 3.2rem;
      }

      @media (min-width: 1240px) {
        font-size : 3.4rem;
      }

      @media (min-width: 1476px) {
        font-size : 4rem;
      } 

      @media (min-width: 1550px) {
        font-size : 4.3rem;
      } 

      @media (min-width: 1650px) {
        font-size : 4.6rem;
      } 

      @media (min-width: 1920px) {
        font-size : 5rem;
      } 

      @media (max-width: 500px) {
        -webkit-text-stroke : 0.3vw var(--black);
      }

      svg {
        pointer-events   : none;
        mix-blend-mode   : normal;
        color            : var(--black);
        background-color : var(--bluelight);
        border-radius    : 50%;
        padding          : .15rem;

        @media (min-width: 572px) {
          padding : .2rem;
        } 

        @media (min-width: 768px) {
          padding : .3rem;
        } 

        @media (min-width: 1650px) {
          padding : .4rem;
        } 

        @media (min-width: 1920px) {
          padding : .4rem;
        } 

        &:hover {
          color            : var(--bluelight);
          background-color : var(--black);
          transform        : scale(0.7);
        }
      }
    }
  }

  .split {
    padding : 0 4vw;
    margin  : 5vh 0;

    @media (min-width: 1240px) {
      margin : 8vh 0;
    }

    h2 {
      text-transform : uppercase;
      font-size      : 1.25rem;

      @media (min-width: 360px) {
        font-size : 1.3rem;
      }

      @media (min-width: 375px) {
        font-size : 1.42rem;
      }

      @media (min-width: 464px) {
        font-size : 1.6rem;
      }

      @media (min-width: 572px) {
        font-size : 1.8rem;
      }

      @media (min-width: 694px) {
        font-size : 2.17rem;
      }

      @media (min-width: 768px) {
        font-size : 2.2rem;
      }

      @media (min-width: 860px) {
        font-size : 2.4rem;
      }

      @media (min-width: 1024px) {
        font-size : 2.6rem;
      }

      @media (min-width: 1240px) {
        font-size : 2.8rem;
      }

      @media (min-width: 1476px) {
        font-size : 3rem;
      } 

      @media (min-width: 1550px) {
        font-size : 3.2rem;
      } 

      @media (min-width: 1650px) {
        font-size : 3.4rem;
      } 

      @media (min-width: 1920px) {
        font-size : 3.6rem;
      } 
    }
  }

  .contact {
    padding       : 4vw;
    text-align    : right;
    /* margin-bottom : 5rem; */

    h2 {
      text-transform : uppercase;
      font-size      : 1.13rem;
      white-space: nowrap;

      @media (min-width: 360px) {
        font-size : 1.35rem;
      }

      @media (min-width: 375px) {
        /* font-size : 1.4rem; */
        font-size : 1.6rem;
      }

      @media (min-width: 464px) {
        font-size : 1.74rem;
      }

      @media (min-width: 572px) {
        font-size : 2.145rem;
      }

      @media (min-width: 694px) {
        font-size : 2.6025rem;
      }

      @media (min-width: 768px) {
        font-size : 2.88rem;
      }

      @media (min-width: 860px) {
        font-size : 3.2875rem;
      }

      @media (min-width: 1024px) {
        font-size : 3.84rem;
      }

      @media (min-width: 1240px) {
        font-size : 4.65rem;
      }

      @media (min-width: 1476px) {
        font-size : 5.535rem;
      } 

      @media (min-width: 1550px) {
        font-size : 5.8125rem;
      }

      @media (min-width: 1650px) {
        font-size : 6.1875rem;
      }

      @media (min-width: 1920px) {
        font-size : 7.2rem;
      } 
    }

    a {
      text-transform          : uppercase;
      -webkit-text-fill-color : #0E100F;
      -webkit-text-stroke     : 0.14vw var(--black);
      mix-blend-mode          : difference;
      color                   : #0E100F;
      font-size               : 1.9rem;

      @media (min-width: 360px) {
        font-size : 2.26rem;
      }

      @media (min-width: 375px) {
        /* font-size : 2.35rem; */
        font-size : 2.6rem;
      }

      @media (min-width: 464px) {
        font-size : 2.9rem;
      }

      @media (min-width: 572px) {
        font-size : 3.575rem;
      }

      @media (min-width: 694px) {
        font-size : 4.3375rem;
      }

      @media (min-width: 768px) {
        font-size : 4.8rem;
      }

      @media (min-width: 860px) {
        font-size : 5.375rem;
      }

      @media (min-width: 1024px) {
        font-size : 6.4rem;
      }

      @media (min-width: 1240px) {
        font-size : 7.75rem;
      }

      @media (min-width: 1476px) {
        font-size : 147.6px;
      } 

      @media (min-width: 1550px) {
        font-size : 9.6875rem;
      }

      @media (min-width: 1650px) {
        font-size : 10.3125rem;
      }

      @media (min-width: 1920px) {
        font-size : 12rem;
      } 

      &:hover {
        -webkit-text-fill-color : var(--bluelight);
        -webkit-text-stroke     : 0.14vw var(--black);
      }
    }
    
    @media (min-width: 1024px) {
      margin-bottom : 2rem;
    }

    @media (min-width: 1240px) {
      margin-bottom : 0rem;
    }

    @media (min-width: 1920px) {
      margin-bottom : 0rem;
    } 
  }
`;

const ScrollAnimatedSection = ({ children, speed, direction }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollValue = scrollY * speed;
      controls.start({ x: direction === "horizontal" ? scrollValue : 0, y: direction === "vertical" ? scrollValue : 0 });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, speed, direction]);

  return <motion.div animate={controls}>{children}</motion.div>;
};

const About = () => {

  const { t } = useTranslation();
  const isMobile = window.innerWidth <= 767;
  const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      <>
        <AboutStyles
          initial={{
            backgroundColor: "rgba(15, 14, 14, 1)",
            pointerEvents: "none",
          }}
          animate={{
            backgroundColor: "rgba(15, 14, 14, 0)",
            pointerEvents: "unset",
          }}
          exit={{
            opacity: [1, 1, 0],
            transition: { duration: 2, times: [0, 0.99, 1] },
          }}
        >
          <BigText />

          <ScrollAnimatedSection speed={isMobile ? 0.25 : isTablet ? 0.35 : 1.1} direction="horizontal">
            <div className="hello">
              <h2>
                {t('hello')}
              </h2>
            </div>
          </ScrollAnimatedSection>

          <div className="name">
            <h2>
              Santiago
            </h2>

            <ScrollAnimatedSection speed={isMobile ? -0.45 : isTablet ? -0.3 : -0.3} direction="vertical">
              <h3>
                Web Developer
              </h3>
            </ScrollAnimatedSection>

            <h2>
              Herrera
            </h2>

            <div>
              <a
                href="https://www.linkedin.com/in/santiago-herrera-501293239/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/SaniEHerr"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <MainSection />

          <Marque />

          <div className="split">
            <h2>{t('frontend-addicted')}.</h2>
            <h2>{t('backend-enthusiast')}.</h2>
          </div>

          <Info />

          <div className="contact">
            <h2>{t('got-some-ideas')}</h2>
            <a href="mailto: santiagoeherrera@gmail.com">{t('lets-talk')}!</a>
          </div>
        </AboutStyles>
      </>
    </div>
  );
};

export default About;