import styled from "styled-components";
import { motion } from "framer-motion";

const MarqueeStyles = styled.div`
  padding    : 0 4vw;
  position   : relative;
  overflow-x : hidden;

  .left,
  .right {
    position       : relative;
    display        : flex;
    flex-direction : row;
    flex-wrap      : nowrap;

    span {
      position       : relative;
      display        : inline-block;
      font-family    : Monument;
      font-weight    : 700;
      text-transform : uppercase;
      padding-right  : 2vw;
      color          : var(--black);
      font-size      : 1.5rem;

      @media (min-width: 360px) {
        font-size : 1.8rem;
      }

      @media (min-width: 375px) {
        font-size : 2rem;
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
        font-size : 5.12rem;
      }

      @media (min-width: 1240px) {
        font-size : 6.2rem;
      }

      @media (min-width: 1476px) {
        font-size : 7.38rem;
      } 

      @media (min-width: 1550px) {
        font-size : 8rem;
      } 

      @media (min-width: 1650px) {
        font-size : 8.25rem;
      } 

      @media (min-width: 1920px) {
        font-size : 9.6rem;
      } 
    }
  }

  .left {
    span {
      border-top    : 0.5vw solid var(--black);
      border-bottom : 0.5vw solid var(--black);
    }
  }
  
  .right {
    span {
      border-bottom : 0.5vw solid var(--black);
    }
  }
`;

const Marque = () => {
  const travelDistance = 123;

  return (
    <>
      <MarqueeStyles>
        
        <div className="left">
          <motion.span
            initial={{ left: 0 }}
            animate={{ left: `-${travelDistance}%` }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
          >
            {'<Skills/>'}
          </motion.span>
          
          <motion.span
            initial={{ left: 0 }}
            animate={{ left: `-${travelDistance}%` }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
          >
            {'<Skills/>'}
          </motion.span>
          
          <motion.span
            initial={{ left: 0 }}
            animate={{ left: `-${travelDistance}%` }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
          >
            {'<Skills/>'}
          </motion.span>
          
          <motion.span
            initial={{ left: 0 }}
            animate={{ left: `-${travelDistance}%` }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
          >
            {'<Skills/>'}
          </motion.span>
        </div>

        <div className="right">
          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
          >
            {'<Skills/>'}
          </motion.span>

          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
          >
            {'<Skills/>'}
          </motion.span>

          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
          >
            {'<Skills/>'}
          </motion.span>

          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
          >
            {'<Skills/>'}
          </motion.span>
        </div>

      </MarqueeStyles>
    </>
  );
};

export default Marque;
