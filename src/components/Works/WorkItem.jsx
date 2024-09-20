import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useMousePosition } from "./../../hooks/useMousePosition";
import { WorksListItem } from "../../data/workList";
import { useAnimations } from "../../hooks/useAnimations";

const WorksItemStyles = styled.li`
  width    : 100%;
  position : relative;

  a {
    height: 100%;

    .wrapper {
      height         : 100%;
      display        : flex;
      align-items    : flex-end;
      pointer-events : none;

      .title {
        margin : 0 1vw;

        h2 {
          overflow : hidden;

          .text {
            font-size : 21px;

            &:hover {
              -webkit-text-stroke : 0.05vw var(--black);
            }

            @media (min-width: 360px) {
              font-size : 25.2px;
            }

            @media (min-width: 375px) {
              font-size : 26.2496px;
            }

            @media (min-width: 464px) {
              font-size : 32.48px;
            }

            @media (min-width: 572px) {
              font-size : 40.04px;
            }

            @media (min-width: 694px) {
              font-size : 3.0362rem;
            }

            @media (min-width: 768px) {
              font-size : 3.36rem;
            }

            @media (min-width: 860px) {
              font-size : 3.75rem;
            }

            @media (min-width: 1024px) {
              font-size : 2.24rem;
            }

            @media (min-width: 1240px) {
              font-size : 2.7322rem;
            }

            @media (min-width: 1476px) {
              font-size : 3.2353rem;
            } 

            @media (min-width: 1550px) {
              font-size : 3.3928rem;
            } 

            @media (min-width: 1650px) {
              font-size : 3.6159rem;
            }

            @media (min-width: 1920px) {
              font-size : 4.2rem;
            }  

            @media (max-width: 1024px) {
              position  : relative;
              top       : 0.7vh;
            }
          }
        }
      }

      .thumbnail {
        overflow  : hidden;
        position  : absolute;
        height    : 100%;
        width     : 7vw;
        bottom    : .7vw;
        /* font-size : calc(var(--VW) * 3.5); */

        /* @media (max-width: 500px) {
          display : none;
        } */

        @media (max-width: 1024px) {
          /* width: 10vw; */
          display : none;
        }

        .mask {
          width            : 100%;
          height           : 100%;
          position         : absolute;
          top              : 0;
          z-index          : 9;
          /* background-color : var(--burlywood); */

          /* @media (max-width: 500px) {
            display: none;
          } */

          @media (max-width: 1024px) {
            /* width: 10vw; */
            display : none;
          }
        }

        .cover {
          width            : 100%;
          height           : 100%;
          position         : absolute;
          top              : 0;
          z-index          : 10;
          background-color : var(--black);
        }

        img {
          position : absolute;
          height   : 80%;
          width    : auto;
          right    : 0;
          display  : block;
        }
      }

      .floating-image {
        pointer-events : none;
        height         : 15vw;
        width          : auto;
        position       : absolute;
        z-index        : 10;
        overflow       : hidden;
        opacity        : 0;
        display        : none;

        /* @media (max-width: 31.25rem) {
          display : none;
        } */

        @media (max-width: 64rem) {
          display : none;
        }

        img {
          height  : 70%;
          width   : auto;
          display : block;
        }
      }

      .line {
        height           : 0.1vw;
        width            : 100%;
        background-color : var(--black);
        position         : relative;
        display          : flex;
        align-items      : center;
        bottom           : 1vw;

        &.flex-0 {
          flex : 0;

          &::after {
            display : none;
          }
        }

        &.flex-1 {
          flex : 1;
        }

        &.flex-2 {
          flex : 2;
        }

        &.flex-3 {
          flex : 3;
        }

        &::after {
          content          : "";
          position         : absolute;
          height           : 0.5vw;
          width            : 0.5vw;
          border-radius    : 100%;
          background-color : var(--black);
        }

        &.left {

          &::after {
            right : 0;
          }
        }

        .mask {
          width            : 100%;
          height           : 0.6vw;
          z-index          : 9;
          position         : absolute;
          background-color : var(--burlywood);
        }

        .cover {
          width            : 100%;
          height           : 0.6vw;
          z-index          : 10;
          position         : absolute;
          background-color : var(--black);
        }
      }
    }
  }
`;

const Prop = {
  data: WorksListItem,
};

const WorkItem = (props) => {
  const {
    title,
    src,
    leftFlex,
    rightFlex,
    thumbnailOffset,
    offsetX,
    offsetY,
    id,
  } = props.data;

  const { x, y } = useMousePosition();
  const [listPosition, setListPosition] = useState({ top: 0, left: 0 });
  const [hovered, setHovered] = useState(false);
  const listRef = useRef(null);
  const { transition, maskAnimation, textReveal } = useAnimations();

  useEffect(() => {
    if (listRef.current) {
      setListPosition({
        top: listRef.current.getBoundingClientRect().top,
        left: listRef.current.getBoundingClientRect().left,
      });
    }
  }, [hovered]);

  return (
    <WorksItemStyles
      ref={listRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      <NavLink to={`/projects/${id}`}>
        <div className="wrapper">

          <div className={`line left flex-${leftFlex}`}>

            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>

            <motion.div
              initial={{ backgroundColor: "rgb(15, 14, 14)" }}
              animate={{ backgroundColor: "unset" }}
              className="cover"
            ></motion.div>

          </div>

          <motion.div className="title">
            <h2>
              <motion.div
                variants={textReveal}
                transition={transition}
                className="text"
              >
                {title}
              </motion.div>
            </h2>
          </motion.div>

          <motion.div className="thumbnail" style={{ left: thumbnailOffset }}>
            <img src={src} alt="" />

            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
            
            <motion.div
              initial={{ backgroundColor: "rgb(15, 14, 14)" }}
              animate={{ backgroundColor: "unset" }}
              className="cover"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: hovered ? 1 : 0,
              x: `calc(${x - listPosition.left}px - ${offsetX}vw)`,
              y: `calc(${y - listPosition.top}px - ${offsetY}vw)`,
            }}
            transition={{ ease: "linear", duration: 0.2 }}
            className="floating-image"
          >
            <motion.img
              animate={{
                x: hovered ? 0 : "-120%",
                opacity: hovered ? 1 : 0.7,
              }}
              transition={{
                ease: [0.6, -0.05, 0.01, 0.9],
                duration: 0.6,
                delay: 0.03,
              }}
              src={src}
              alt=""
            />
          </motion.div>

          <motion.div
            variants={maskAnimation}
            transition={{ ...transition, duration: 1 }}
            className={`line right flex-${rightFlex}`}
          >
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className="mask right"
            ></motion.div>
            <motion.div
              initial={{ backgroundColor: "rgb(15, 14, 14)" }}
              animate={{ backgroundColor: "unset" }}
              className="cover"
            ></motion.div>
          </motion.div>

        </div>
      </NavLink>

    </WorksItemStyles>
  );
};

export default WorkItem;
