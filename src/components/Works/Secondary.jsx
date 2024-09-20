import styled from "styled-components";
import { Icon } from '@iconify/react';

import zustandIcon from "../../assets/icons/zustandIcon.png"
import convexIcon from "../../assets/icons/convexIcon.png"
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useAnimations } from "../../hooks/useAnimations";


const SecondarySectionStyles = styled.div`
  display         : flex;
  justify-content : space-between;
  flex-direction  : column;
  gap             : 2.5rem;

  @media (min-width: 1024px) {
    flex-direction : row;
    gap            : 0rem;
  }

  .content {
    display        : flex;
    flex-direction : column;
    align-items    : flex-start;
    justify-content: space-between;
    gap            : 1rem;
    margin         : 2vh 0vh 0vw 0vh;

    @media (min-width: 768px) {
      gap : 1.5rem;
    }

    @media (min-width: 1024px) {
      width: 440px;
    }

    @media (min-width: 1476px) {
      width: 500px;
    } 

    @media (min-width: 1550px) {
    } 

    @media (min-width: 1650px) {
      width: 550px;
    }

    @media (min-width: 1920px) {
      width: 600px;
    }

    h2 {
      font-size : 1.3rem;

      @media (min-width: 360px) {
        font-size : 1.5rem;
      }

      @media (min-width: 464px) {
        font-size: 2rem;
      }

      @media (min-width: 572px) {
        font-size: 2.375rem;
      }

      @media (min-width: 694px) {
        font-size : 2.845rem;
      }

      @media (min-width: 768px) {
        font-size : 3.235rem;
      }

      @media (min-width: 860px) {
        font-size : 3.45rem;
      }

      @media (min-width: 1024px) {
        font-size : 2.0022rem;
      }

      @media (min-width: 1240px) {
        font-size : 2.3163rem;
      }

      @media (min-width: 1476px) {
        font-size : 2.5rem;
      } 

      @media (min-width: 1550px) {
        font-size : 2.625rem;
      } 

      @media (min-width: 1650px) {
        font-size : 2.8438rem;
      }

      @media (min-width: 1920px) {
        font-size : 3.225rem;
      }
    }

    .icons-container {
      display         : flex;
      flex-direction  : row;
      align-items     : center;
      flex-wrap       : wrap;
      column-gap      : .7rem;
      row-gap         : .5rem;

      @media (min-width: 360px) {
        column-gap : .8rem;
        row-gap    : .5rem;
      }

      @media (min-width: 464px) {
        column-gap : 1rem;
        row-gap    : .7rem;
      }

      @media (min-width: 572px) {
        max-width  : 90%;
        column-gap : 1.5rem;
        row-gap    : .8rem;
      }

      @media (min-width: 694px) {
        max-width  : 80%;
        column-gap : 1.5rem;
        row-gap    : .9rem;
      }

      @media (min-width: 768px) {
        column-gap : 1.5rem;
        row-gap    : 1rem;
      }

      @media (min-width: 860px) {
        column-gap : 1.5rem;
        row-gap    : 1rem;
        max-width  : 70%;
      }

      @media (min-width: 1024px) {
        column-gap : 1.5rem;
        row-gap    : 1rem;
        max-width  : 100%;
      }

      @media (min-width: 1126px) {
        max-width  : 100%;
      }

      @media (min-width: 1240px) {
        column-gap : 1.5rem;
        row-gap    : 1rem;
      }

      @media (min-width: 1920px) {
        column-gap : 2rem;
        row-gap    : 1.5rem;
      }
    }

    .icon-wrapper {
      svg{
        font-size : 1.7rem;

        @media (min-width: 360px) {
          font-size : 2rem;
        }

        @media (min-width: 464px) {
          font-size: 2.5rem;
        }

        @media (min-width: 572px) {
          font-size : 2.6rem;
        }

        @media (min-width: 694px) {
          font-size : 2.845rem;
        }

        @media (min-width: 768px) {
          font-size : 3.335rem;
        }

        @media (min-width: 860px) {
          font-size : 3.5rem;
        }

        @media (min-width: 1024px) {
          font-size : 2.3rem;
        }

        @media (min-width: 1240px) {
          font-size : 2.5rem;
        }

        @media (min-width: 1476px) {
          font-size : 2.8rem;
        } 

        @media (min-width: 1550px) {
          font-size : 3rem;
        } 

        @media (min-width: 1650px) {
          font-size : 3.2rem;
        }

        @media (min-width: 1920px) {
          font-size : 3.6rem;
        }
      }
    }

    img {
      width : 40px;

      @media (min-width: 360px) {
        width : 33px;
      }

      @media (min-width: 464px) {
        width : 38px;
      }

      @media (min-width: 572px) {
        width : 40px;
      }

      @media (min-width: 768px) {
        width : 48px;
      }

      @media (min-width: 860px) {
        width : 50px;
      }

      @media (min-width: 1024px) {
        width : 35px;
      }

      @media (min-width: 1240px) {
        width : 36px;
      }

      @media (min-width: 1476px) {
        width : 40px;
      }

      @media (min-width: 1550px) {
        width : 50px;
      }

      @media (min-width: 1650px) {
        width : 55px;
      }
    }
  }

  .nextPrev-container {
    display         : flex;
    justify-content : flex-end;
    align-items     : flex-end;
    flex-direction  : column;
    gap             : 1rem;

    @media (min-width: 321px) {
      flex-direction : row;
      gap            : 1rem;
    }

    @media (min-width: 360px) {
      gap : 1.5rem;
    }

    @media (min-width: 768px) {
      gap : 2rem;
    }

    @media (min-width: 1024px) {
      gap : 1.3rem;
    }

    @media (min-width: 1240px) {
      gap : 2rem;
    }

    @media (min-width: 1476px) {
      gap : 2.2rem;
    } 

    @media (min-width: 1550px) {
      gap : 2.5rem;
    } 

    @media (min-width: 1920px) {
      gap : 3rem;
    }

    .next, .prev {
      color     : var(--black);
      font-size : 1rem;
      
      @media (min-width: 360px) {
        font-size: 1.1875rem;
      }

      @media (min-width: 464px) {
        font-size : 1.5625rem;
      }

      @media (min-width: 572px) {
        font-size : 1.875rem;
      }

      @media (min-width: 694px) {
        font-size : 2.2275rem;
      }

      @media (min-width: 768px) {
        font-size : 2.505rem;
      }

      @media (min-width: 860px) {
        font-size : 2.85rem;
      }

      @media (min-width: 1024px) {
        font-size : 1.7969rem;
      }

      @media (min-width: 1240px) {
        font-size : 2.0181rem;
      }

      @media (min-width: 1476px) {
        font-size : 35.34px;
      } 

      @media (min-width: 1550px) {
        font-size : 36.34px;
      } 

      @media (min-width: 1650px) {
        font-size : 38.34px;
      }

      @media (min-width: 1920px) {
        font-size : 46.6px;
      }

      .prev-icon {
        position       : relative;
        top            : -3.5%;
        left           : 3%;
        transition     : 0.3s all ease-out;
        pointer-events : none;
      }

      .next-icon {
        position       : relative;
        top            : -3.5%;
        right          : 2%;
        transition     : 0.3s all ease-out;
        pointer-events : none;
      }


      &:hover {
        .prev-icon {
          left       : -2%;
          transition : 0.3s all ease-out;
        }

        .next-icon {
          right      : -3%;
          transition : 0.3s all ease-out;
        }
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
    font-family      : Arial, Helvetica, sans-serif;
    font-weight      : 800;
    opacity          : 0;
    width            : max-content;
    background-color : rgb(255, 252, 225);
    color            : #fe8609;
    text-align       : center;
    border-radius    : 8px;
    padding          : 8px 12px;
    position         : absolute;
    z-index          : 1;
    left             : 50%;
    transform        : translate(-50%, -150%);
    transition       : opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
    font-size        : 0.875rem;
    box-shadow       : 0px 4px 8px rgba(0, 0, 0, 0.25);
    white-space      : nowrap;

    @media (min-width: 360px) {
      bottom: -5%;
    }

    @media (min-width: 375px) {
      bottom: -5%;
    }

    @media (min-width: 464px) {
      bottom: 10%;
    }

    @media (min-width: 572px) {
      bottom: 25%;
    }

    @media (min-width: 694px) {
      bottom: 30%;
    }

    @media (min-width: 768px) {
      bottom: 40%;
    }

    @media (min-width: 860px) {
      bottom: 45%;
    }

    @media (min-width: 1024px) {
      bottom    : 0%;
      font-size : 0.875rem;
    }

    @media (min-width: 1240px) {
      bottom    : 5%;
      font-size : 0.9rem;
    }

    @media (min-width: 1476px) {
      bottom    : 15%;
      font-size : 0.95rem;
    }

    @media (min-width: 1550px) {
      bottom: 20%;
    }

    @media (min-width: 1650px) {
      bottom: 30%;
    }

    @media (min-width: 1920px) {
      bottom    : 32%;
      font-size : 1rem;
    }

    &::after {
      content      : "";
      position     : absolute;
      top          : 95%;
      left         : 50%;
      transform    : translateX(-50%);
      border-width : 7px;
      border-style : solid;
      border-color : rgb(255, 252, 225) transparent transparent transparent;
    }

    @media (max-width: 1024px) {
      display : block;
    }
  }

  @media (max-width: 1024px) {
    .tooltip {
      visibility : ${(props) => (props.showTooltip ? "visible" : "hidden")};
      opacity    : ${(props) => (props.showTooltip ? 1 : 0)};
      transform  : translate(-50%, -120%);
    }
  }
`;

const SecondarySection = ({ secondary, next, prev }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const { t } = useTranslation();
  const timerRef = useRef(null);
  const { transition, textReveal, opacityReveal } = useAnimations();

  const handleIconClick = (index) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setTooltipVisible(index);
    timerRef.current = setTimeout(() => {
      setTooltipVisible(null);
    }, 1000);
  };

  const iconMapping = {
    JAVASCRIPT: <Icon icon="logos:javascript" />,
    TYPESCRIPT: <Icon icon="devicon:typescript" />,
    REACT: <Icon icon="devicon:react" />,
    NEXT: <Icon icon="file-icons:nextjs" style={{ color: "white" }} />,
    TAILWIND: <Icon icon="devicon:tailwindcss" />,
    SHADCN: <Icon icon="simple-icons:shadcnui" style={{ color: "white" }} />,
    FRAMERMOTION: <Icon icon="ph:framer-logo-fill" style={{ color: "white" }} />,
    ZUSTAND: <img src={zustandIcon} />,
    CLERK: <Icon icon="simple-icons:clerk" className="clerkIcon" style={{ color: "#7035FF" }} />,
    CONVEX: <img src={convexIcon} />,
    FIREBASE: <Icon icon="logos:firebase" />,
    SUPABASE: <Icon icon="devicon:supabase" />,
    NODE: <Icon icon="devicon:nodejs-wordmark" />,
    EXPRESS: <Icon icon="simple-icons:express" style={{ color: "white" }} />,
    POSTGRESQL: <Icon icon="devicon:postgresql" />,
    MYSQL: <Icon icon="devicon:mysql-wordmark" />,
    DOCKER: <Icon icon="logos:docker-icon" />,
  };

  return (
    <SecondarySectionStyles data-scroll-section>
      <motion.div
        className="content"
        variants={textReveal}
        initial="initial"
        animate="animate"
        transition={{ ...transition, duration: 2, delay: 3 }}
      >
        <h2>STACK</h2>

        <div className="icons-container">
          {secondary.map((tech, index) => {
            const icon = iconMapping[tech];
            const className = `icon-wrapper`;

            return (
              <IconWrapper
                key={index}
                showTooltip={tooltipVisible === index}
                onClick={() => handleIconClick(index)}
                className={className}
              >
                {icon}
                <div className="tooltip">{tech}</div>
              </IconWrapper>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="nextPrev-container"
        variants={opacityReveal}
        initial="initial"
        animate="animate"
        transition={{ ...transition, duration: 2, delay: 3 }}
      >
        <a className="prev" href={`/projects/${prev}`} rel="noreferrer">
          <span className="prev-icon">&lsaquo;</span> {t("prev")}
        </a>

        <a className="next" href={`/projects/${next}`} rel="noreferrer">
          {t("next")} <span className="next-icon">&rsaquo;</span>
        </a>
      </motion.div>
    </SecondarySectionStyles>
  );
};

export default SecondarySection;