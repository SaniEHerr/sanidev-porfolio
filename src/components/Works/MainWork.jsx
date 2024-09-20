import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAnimations } from "./../../hooks/useAnimations";
import { Icon } from '@iconify/react';
import { useTranslation } from "react-i18next";

const MainWorkStyles = styled.div`
  display         : flex;
  justify-content : space-between;
  align-items     : center;
  flex-direction  : column;
  width           : 100%;
  margin-top      : 5rem;
  gap             : 1.5rem;

  @media (min-width: 360px) {
    margin-top : 5rem;
  }

  @media (min-width: 1024PX) {
    flex-direction : row;
  }

  @media (min-width: 1920px) {
    margin-top : 1rem;
  }

  @media (min-width: 1024px) {
    .img {
      width : 46%;
    }
  }

  .content {
    width : 100%;

    @media (min-width: 1024px) {
      width: 50%;
    }

    .title-wrapper {
      margin-bottom   : 4vw;
      display         : flex;
      flex-direction  : column;
      justify-content : center;

      @media (min-width: 1024px) {
        margin-bottom   : 2vw;
        flex-direction  : row;
        justify-content : space-between;
      }

      .title {
        font-size : 1.5rem;
        position  : relative;

        @media (min-width: 360px) {
          font-size : 1.8rem;
        }

        @media (min-width: 375px) {
          font-size : 1.875rem;
        }

        @media (min-width: 464px) {
          font-size : 2.32rem;
        }

        @media (min-width: 572px) {
          font-size : 2.86rem;
        }

        @media (min-width: 694px) {
          font-size : 3.47rem;
        }

        @media (min-width: 768px) {
          font-size : 3.84rem;
        }

        @media (min-width: 860px) {
          font-size : 4.3rem;
        }

        @media (min-width: 1024px) {
          font-size : 2.3325rem;
        }

        @media (min-width: 1240px) {
          font-size : 2.5519rem;
        }

        @media (min-width: 1476px) {
          font-size : 2.7713rem;
        }

        @media (min-width: 1550px) {
          font-size : 2.9119rem;
        }

        @media (min-width: 1650px) {
          font-size : 3.0994rem;
        }

        @media (min-width: 1920px) {
          font-size : 3.6rem;
        }
      }

      .underline {
        width            : 30%;
        height           : 0.3vw;
        background-color : var(--black);
      }
    }

    .links {
      display         : flex;
      gap             : .5rem;
      justify-content : flex-end;
      margin-top      : 5px;

      @media (min-width: 360px) {
        gap : .7rem;
      }

      @media (min-width: 476px) {
        gap : .9rem;
      }

      @media (min-width: 572px) {
        gap : 1rem;
      }

      @media (min-width: 694px) {
        gap : 1.1rem;
      }
      
      @media (min-width: 768px) {
        gap : 1.2rem;
      }

      @media (min-width: 1024px) {
        gap        : .8rem;
        margin-top : 0px;
      }

      @media (min-width: 1920px) {
        gap : 1.2rem;
      }

      a {
        height          : 100%;
        display         : flex;
        justify-content : center;
        align-items     : center;

        svg {
          pointer-events   : none;
          mix-blend-mode   : normal;
          color            : var(--black);
          background-color : var(--bluelight);
          border-radius    : 50%;
          width            : 9.5vw;
          height           : 9.5vw;

          @media (min-width: 572px) {
            width  : 55.625px;
            height : auto;
          }

          @media (min-width: 694px) {
            width  : 59.625px;
            height : auto;
          }

          @media (min-width: 768px) {
            width  : 65.75px;
            height : auto;
          }

          @media (min-width: 860px) {
            width  : 70.75px;
            height : auto;
          }

          @media (min-width: 1024px) {
            width  : 42.6094px;
            height : auto;
          }

          @media (min-width: 1240px) {
            width  : 47.6094px;
            height : auto;
          }

          @media (min-width: 1476px) {
            width  : 50.7188px;
            height : auto;
          } 

          @media (min-width: 1550px) {
            width  : 54.3438px;
            height : auto;
          } 

          @media (min-width: 1650px) {
            width  : 58.7812px;
            height : auto;
          }

          @media (min-width: 1920px) {
            width  : 64.1875px;
            height : auto;
          }
        }
      }
    }

    .text {
      margin-bottom : 3vw;
      font-weight   : bold;
      font-size     : 15px;
      word-spacing  : 1.5px;

      @media (min-width: 360px) {
        font-size    : 1.125rem;
        word-spacing : 1.8px;
      }

      @media (min-width: 375px) {
        font-size    : 1.1719rem;
        word-spacing : 1.875px;
      }

      @media (min-width: 464px) {
        font-size    : 1.45rem;
        word-spacing : 2.32px;
      }

      @media (min-width: 572px) {
        font-size    : 1.6rem;
        word-spacing : 2.86px;
      }

      @media (min-width: 694px) {
        font-size    : 1.6rem;
        word-spacing : 3.47px;
      }

      @media (min-width: 768px) {
        font-size    : 1.6rem;
        word-spacing : 3.84px;
      }

      @media (min-width: 860px) {
        font-size    : 1.6125rem;
        word-spacing : 4.3px;
      }

      @media (min-width: 1024px) {
        font-size     : 1.45rem;
        word-spacing  : calc(10.26px * 0.2);
        margin-bottom : 0;
      }

      @media (min-width: 1240px) {
        font-size    : 1.45rem;
        word-spacing : calc(12.43px * 0.2);
      }

      @media (min-width: 1476px) {
        font-size    : 1.476rem;
        word-spacing : calc(14.78px * 0.2);
      } 

      @media (min-width: 1550px) {
        font-size    : 1.551rem;
        word-spacing : calc(15.51px * 0.2);
      } 

      @media (min-width: 1650px) {
        font-size    : 1.65rem;
        word-spacing : calc(16.51px * 0.2);
      } 

      @media (min-width: 1920px) {
        font-size    : 1.92rem;
        word-spacing : calc(19.2px * 0.2);
      }

      @media (max-width: 500px) {
        margin-bottom : 5vw;
      }
    }
  }
`;

const IconWrapper = styled.div`
  position : relative;
  display  : inline-block;

  &:hover .tooltip {
    visibility : visible;
    opacity    : 1;
    transform  : translate(-50%, -120%);
  }

  .tooltip {
    visibility       : hidden;
    font-family      : Arial,                    Helvetica,                  sans-serif;
    font-weight      : 800;
    opacity          : 0;
    width            : max-content;
    background-color : rgb(255,252,225);
    color            : #FE8609;
    text-align       : center;
    border-radius    : 8px;
    padding          : 8px 12px;
    position         : absolute;
    z-index          : 1;
    bottom           : 52%;
    left             : 50%;
    transform        : translate(-50%, -150%);
    transition       : opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
    /* font-size        : 0.875rem; */
    font-size        : 1.2rem;
    box-shadow       : 0px 4px 8px rgba(0, 0, 0, 0.25);
    white-space      : nowrap;

    @media (min-width: 1024px) {
      bottom    : 25%;
      font-size : 0.875rem;
    }

    @media (min-width: 1240px) {
      bottom    : 30%;
      font-size : 0.9rem;
    }
    
    @media (min-width: 1476px) {
      bottom    : 32%;
      font-size : 0.95rem;
    } 
    
    @media (min-width: 1550px) {
      bottom : 32%;
    } 
    
    @media (min-width: 1650px) {
      bottom : 32%;
    }
    
    @media (min-width: 1920px) {
      bottom    : 42%;
      font-size : 1rem;
    }
    
    &::after {
      content      : '';
      position     : absolute;
      top          : 95%;
      left         : 50%;
      transform    : translateX(-50%);
      border-width : 7px;
      border-style : solid;
      border-color : rgb(255,252,225) transparent transparent transparent;
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

const MainWork = ({ title, githubLink, githubLinkBackend, liveLink, texts, desktopImgSrc }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { transition, textReveal, opacityReveal } = useAnimations();

  return (
    <MainWorkStyles data-scroll-section>
      <div className="img">
        <motion.img
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, duration: 2, delay: 2 }}
          src={desktopImgSrc}
          className="title"
        />
      </div>

      <div className="content">
        <div className="title-wrapper">
          <div className="title-container">
            <motion.h1
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={{ ...transition, duration: 2, delay: 2 }}
              className="title"
            >
              {title}
            </motion.h1>
            
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "0%" }}
              transition={{ ...transition, duration: 2, delay: 2.4 }}
              className="underline"
            ></motion.div>
          </div>

          <motion.div
            variants={opacityReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition, duration: 2, delay: 2.6 }}
            className="links"
          >
            <IconWrapper>
              <a href={liveLink} target="_blank" rel="noreferrer">
                <Icon icon="fa:external-link-square" />
              </a>
              <div className="tooltip">{t('visit')}</div>
            </IconWrapper>

            {
              githubLink !== "empty" 
                ? (
                  <IconWrapper>
                    <a href={githubLink} target="_blank" rel="noreferrer">
                      <Icon icon="bi:github" />
                    </a>
                    <div className="tooltip">GITHUB</div>
                  </IconWrapper>
                ) : null
            }

            {
              githubLinkBackend
                ? (
                  <IconWrapper>
                    <a href={githubLinkBackend} target="_blank" rel="noreferrer">
                      <Icon icon="bi:github" />
                    </a>
                    <div className="tooltip">GITHUB</div>
                  </IconWrapper>
                ) : null
            }
          </motion.div>
        </div>

        {texts.map((text, index) => {
          return (
            <motion.p
              variants={opacityReveal}
              initial="initial"
              animate="animate"
              transition={{ ...transition, duration: 2, delay: 2.8 }}
              className="text"
              key={index}
            >
              {text[currentLanguage]}
            </motion.p>
          );
        })}
      </div>
    </MainWorkStyles>
  );
};

export default MainWork;