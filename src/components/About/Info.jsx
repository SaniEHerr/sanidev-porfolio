import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const InfoStyles = styled.div`
  padding         : 0 4vw;
  margin-bottom   : 20vh;
  margin-right    : 5vw;
  display         : flex;
  justify-content : space-between;

  @media (max-width: 500px) {
    flex-wrap     : wrap;
    margin-bottom : 10vh;
  }

  .info-main {
    width          : 95%;
    display        : flex;
    flex-direction : column;
    gap            : 2vh;
    
    @media (min-width: 700px) {
      gap: 4vh;
    }

    @media (min-width: 1200px) {
      gap: 5vh;
    }

    @media (min-width: 500px) {
      width : 80%;
    }

    @media (min-width: 768px) {
      width : 90%;
    }

    @media (min-width: 1024px) {
      gap   : 2.2rem;
      width : 80%;
    }

    @media (min-width: 1240px) {
      width : 70%;
      gap   : 2.8rem;
    }

    @media (min-width: 1476px) {
      width : 62%;
    }

    @media (min-width: 1920px) {
      width : 52%;
    }

    .stack {
      h2 {
        margin-bottom: .2rem;
      }

      span {
        font-weight: 800;
      }
      
      p {
        margin-bottom: .5rem;
        
        @media (min-width: 700px) {
          margin-bottom: .75rem;
        }

        @media (min-width: 1200px) {
          margin-bottom: 1rem;
        }
      }

      .span-bg {
        -webkit-background-image : linear-gradient(125deg, #40CBE8, #FE8609);
        background-clip          : inherit;
        -webkit-background-clip  : text;
        -webkit-text-fill-color  : transparent;
        font-weight              : bold;
        background-image         : linear-gradient(125deg, #40CBE8, #FE8609);
      }
    }

    h2 {
      mix-blend-mode : difference;
      z-index        : 20;
      font-size      : 1.1rem;

      @media (min-width: 360px) {
        font-size : 1.2rem;
      }

      @media (min-width: 375px) {
        font-size : 1.35rem;
      }

      @media (min-width: 464px) {
        font-size : 1.35rem;
      }

      @media (min-width: 572px) {
        font-size : 1.4rem;
      }

      @media (min-width: 694px) {
        font-size : 1.5rem;
      }

      @media (min-width: 768px) {
        font-size : 1.6rem;
      }

      @media (min-width: 860px) {
        font-size : 1.7rem;
      }

      @media (min-width: 1024px) {
        font-size : 1.8rem;
      }

      @media (min-width: 1240px) {
        font-size : 1.9rem;
      }

      @media (min-width: 1476px) {
        font-size : 2rem;
      } 

      @media (min-width: 1550px) {
        font-size : 2.1rem;
      } 

      @media (min-width: 1650px) {
        font-size : 2.2rem;
      } 

      @media (min-width: 1920px) {
        font-size : 2.4rem;
      }

      &:hover {
        -webkit-text-stroke     : 0.05vw var(--black);
        -webkit-text-fill-color : var(--bluelight);
        cursor                  : none;
      }
    }

    p {
      font-size    : 1rem;
      word-spacing : .2rem;

      @media (min-width: 360px) {
        font-size    : 1.13rem;
        word-spacing : .2rem;
      }

      @media (min-width: 375px) {
        font-size : 1.3rem;
      }

      @media (min-width: 464px) {
        font-size : 1.3rem;
      }

      @media (min-width: 572px) {
        font-size : 1.3rem;
      }

      @media (min-width: 694px) {
        font-size : 1.3rem;
      }

      @media (min-width: 768px) {
        font-size : 1.44rem;
      }

      @media (min-width: 860px) {
        font-size : 1.5rem;
      }

      @media (min-width: 1024px) {
        font-size : 1.6rem;
      }

      @media (min-width: 1240px) {
        font-size : 1.7rem;
      }

      @media (min-width: 1476px) {
        font-size : 1.8rem;
      } 

      @media (min-width: 1550px) {
        font-size : 1.9rem;
      } 

      @media (min-width: 1650px) {
        font-size : 1.95rem;
      } 

      @media (min-width: 1920px) {
        font-size : 2rem;
      }

      :last-child {
        margin-bottom : 0;
      }
    }

    .other-skills-container {
      display        : flex;
      flex-direction : column;
      gap            : .5rem;
    }
  }
`;

const Info = () => {
  const { t } = useTranslation();

  return (
    <InfoStyles className = "info">
      <div className= "info-main">

        <div>
          <h2>{t('languages')}</h2>
          <p>JavaScript, HTML, CSS, SQL.</p>
        </div>

        <div className="stack">
          <h2>{t('frameworks-libraries')}</h2>
          <p>
            <span className="span-bg">{"<Front-End />"}</span> React, Next, Angular, TypeScript, TanstackQuery, Redux, Zustand, Framer Motion, Sass, Boostrap, Styled Components, Tailwind, ShadCN.
          </p>

          <p>
            <span className="span-bg">{"<Back-End />"}</span> Node, Express, Nest, MongoDB, PostgreSQL.
          </p>

          <p>
            <span className="span-bg">{t('others')}</span> Git, GitHub, Command Line, NPM, Docker, Firebase, Supabase, Convex, Clerk.
          </p>
        </div>
          
        <div>
          <h2>UI/UX</h2>
          <p>
            Responsive Design, Figma, Adobe Photoshop.
          </p>
        </div>

        <div>
          <h2>{t('learning')}</h2>
          <p>Testing (Jest y Cypress), Angular, Nest.</p>
        </div>

        <div>
          <h2>{t('others-skills')}</h2>
          <div className="other-skills-container">
            <p>- {t('others-skills-description-1')}.</p>
            <p>- {t('others-skills-description-2')}.</p>
          </div>
        </div>
      </div>
    </InfoStyles>
  );
};

export default Info;
