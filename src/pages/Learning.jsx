import styled from "styled-components";

import Navbar from '../components/Navbar'
import Panels from '../components/Panels'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';

import rqGitIssues from "../assets/images/learning/rqGitIssues/rqGitIssues.png";
import nestAngAuth from "../assets/images/learning/nestAngAuth/nestAngAuth.png";
import GifsAng from "../assets/images/learning/gifsAng/gifsAng.png";
import worldAng from "../assets/images/learning/worldAng/worldAng.png";
import mapsAng from "../assets/images/learning/mapsAng/mapsAng.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LearningStyles = styled(motion.main)`
  width          : 100%;
  min-height     : 100vh;
  padding-block  : 15vh;
  padding-inline : 2vh;
  padding-bottom : 5vh;
  overflow       : hidden;
  max-width      : 1920px;
  margin         : 0 auto;
  overflow       : hidden;

  @media (min-width: 1240px) {
    padding-inline : 1.5rem;
  }

  @media (min-width: 1476px) {
    padding-inline : 2rem;
  }

  @media (min-width: 1650px) {
    padding-inline : 3rem;
  }

  @media (min-width: 1920px) {
    padding-inline : 6rem;
  }

  .main-container {
    color   : var(--black);
    display : grid;
    gap     : 1.5rem;

    @media (min-width: 1024px) {
      display               : grid;
      grid-template-columns : repeat(6, 1fr);
    }

    @media (min-width: 1550px) {
      gap : 2rem;
    }

    @media (min-width: 1920px) {
      display               : grid;
      grid-template-columns : repeat(6, 1fr);
    }
  }

  .card-container {
    position                   : relative;
    display                    : flex;
    flex-direction             : column;
    justify-content            : center;
    gap                        : 2rem;
    background-color           : #0E100F;
    border                     : 1px solid var(--black);
    border-radius              : 1.5rem;
    border-bottom-right-radius : 1rem;

    .fondo {
      position                   : absolute;
      top                        : 0;
      right                      : -0rem;
      z-index                    : -10;
      width                      : 100%;
      height                     : 101%;
      border-radius              : 2.5rem;
      border-bottom-right-radius : 1.5rem;
      background-color           : var(--black);
    }

    .fondo2 {
      position                   : absolute;
      top                        : 0;
      right                      : -0.75rem;
      z-index                    : -10;
      width                      : 100%;
      height                     : 101%;
      border-radius              : 2.5rem;
      border-bottom-right-radius : 1.5rem;
      background-color           : var(--black);
    }

    .card-header {
      display         : flex;
      flex-direction  : row;
      padding-bottom  : 0;
      gap             : 1rem;
      justify-content : space-between;
      align-items     : center;
      padding         : 1.5rem;
      padding-bottom  : 0;

      @media (min-width: 1024px) {
        padding        : 2rem;
        padding-bottom : 0;
      }

      .title {
        width     : fit-content;
        font-size : 1.3rem;

        @media (min-width: 360px) {
          font-size : 1.5rem;
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
          font-size : 2.4rem;
        }

        @media (min-width: 1240px) {
          font-size : 2.6rem;
        }

        @media (min-width: 1240px) {
          font-size : 2.8rem;
        }
      }

      .links {
        display         : flex;
        flex-direction  : row;
        justify-content : center;
        align-items     : center;
        gap             : .7rem;
        font-size       : 2rem;

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

        @media (min-width: 360px) {
          font-size : 2.1rem;
        }

        @media (min-width: 464px) {
          font-size : 2.3rem;
        }

        @media (min-width: 572px) {
          font-size : 2.4rem;
          gap       : 1rem;
        }

        @media (min-width: 694px) {
          font-size : 2.5rem;
        }

        @media (min-width: 768px) {
          font-size : 2.6rem;
        }

        @media (min-width: 860px) {
          font-size : 2.8rem;
        }

        @media (min-width: 1240px) {
          font-size : 2.9rem;
        }

        @media (min-width: 1650px) {
          font-size : 3rem;
        }
      }
    }

    .card-content {
      display        : flex;
      flex-direction : column;
      gap            : 2rem;

      .description {
        padding         : 1.5rem;
        padding-top    : 0;
        padding-bottom : 0;
        font-size      : 1rem;

        @media (min-width: 360px) {
          font-size : 1.15rem;
        }

        @media (min-width: 464px) {
          font-size : 1.25rem;
        }

        @media (min-width: 572px) {
          font-size : 1.3rem;
        }

        @media (min-width: 694px) {
          font-size : 1.35rem;
        }

        @media (min-width: 768px) {
          font-size : 1.4rem;
        }

        @media (min-width: 860px) {
          font-size : 1.45rem;
        }

        @media (min-width: 1024px) {
          padding        : 2rem;
          padding-bottom : 0;
          padding-top    : 0;
        }

        @media (min-width: 1240px) {
          font-size : 1.5rem;
        }

        @media (min-width: 1650px) {
          font-size : 1.55rem;
        }
      }

      .stack-container {
        display        : flex;
        flex-direction : column;
        gap            : 3rem;
        padding        : 1.5rem;
        /* padding         : 2rem; */
        padding-top    : 0;

        @media (min-width: 1024px) {
          padding        : 2rem;
          padding-top    : 0;
        }

        .stack {
          display        : flex;
          flex-direction : row;
          gap            : 1rem;
          flex-wrap      : wrap;
          font-size      : 2rem;

          @media (min-width: 360px) {
            font-size : 2.1rem;
            gap       : 1rem;
          }

          @media (min-width: 464px) {
            font-size : 2.3rem;
          }

          @media (min-width: 572px) {
            font-size : 2.4rem;
          }

          @media (min-width: 694px) {
            font-size : 2.5rem;
          }

          @media (min-width: 768px) {
            font-size : 2.6rem;
          }

          @media (min-width: 860px) {
            font-size : 2.8rem;
          }

          @media (min-width: 1240px) {
            font-size : 2.9rem;
          }

          @media (min-width: 1650px) {
            font-size : 3rem;
          }
        }
      }
    }
  }

  .con1 {
    @media (min-width: 1024px) {
      grid-column: span 4;
    }

    @media (min-width: 1920px) {
      grid-column: span 4;
    }
  }

  .con2 {
    @media (min-width: 1024px) {
      grid-column: span 2;
    }

    @media (min-width: 1920px) {
      grid-column: span 2;
    }
  }

  .con3 {
    @media (min-width: 1024px) {
      grid-column: span 3;
    }

    @media (min-width: 1920px) {
      grid-column: span 3;
    }
  }

  .con4 {
    @media (min-width: 1024px) {
      grid-column: span 3;
    }

    @media (min-width: 1920px) {
      grid-column: span 3;
    }
  }

  .con5 {
    @media (min-width: 1024px) {
      grid-column: span 6;
    }
  }
`

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
    background-color : rgb(255,252,225);
    color            : #FE8609;
    text-align       : center;
    border-radius    : 8px;
    padding          : 8px 12px;
    position         : absolute;
    z-index          : 1;
    left             : 50%;
    transform        : translate(-50%, -150%);
    transition       : opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
    font-size        : 1rem;
    box-shadow       : 0px 4px 8px rgba(0, 0, 0, 0.25);
    white-space      : nowrap;

    @media (min-width: 360px) {
      bottom: 10%;
    }

    @media (min-width: 375px) {
      bottom: 20%;
    }

    @media (min-width: 464px) {
      bottom: 20%;
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
  }
`;

const Learning = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <LearningStyles>
      <Navbar />

      <Panels />

      <div className="main-container">
        {/* maps-angular-app */}
        <div className="card-container con5">
          <div className="fondo"></div>
          <div className="fondo2"></div>

          <div className="card-header">
            <h1 className="title">Maps App</h1>
            
            <div className="links">
              <IconWrapper>
                <a href="https://maps-angular-app-47b16.web.app/" target="_blank" rel="noreferrer">
                  <Icon icon="fa:external-link-square" />
                </a>
                <div className="tooltip">{t('visit')}</div>
              </IconWrapper>

              <IconWrapper>
                <a href="https://github.com/SaniEHerr/mapsApp" target="_blank" rel="noreferrer">
                  <Icon icon="bi:github" />
                </a>
                <div className="tooltip">GITHUB</div>
              </IconWrapper>

            </div>
          </div>
          
          <div className="card-content">
            <img className="img" src={mapsAng} alt="project image" />

            <p className="description">
              {t('mapsApp-description')}
            </p>

            <div className="stack-container">
              <div className="stack">
                <IconWrapper>
                  <Icon icon="vscode-icons:file-type-angular" />
                  <div className="tooltip">ANGULAR</div>
                </IconWrapper>

                <IconWrapper>
                  <Icon icon="devicon:rxjs" />
                  <div className="tooltip">RXJS</div>
                </IconWrapper>
                
                <IconWrapper>
                  <Icon icon="devicon:nestjs" />
                  <div className="tooltip">NESTJS</div>
                </IconWrapper>
              </div>
            </div>
          </div>
        </div>

        {/* gifs-angular-app */}
        <div className="card-container con3">
          <div className="fondo"></div>
          <div className="fondo2"></div>

          <div className="card-header">
            <h1 className="title">Gifs App</h1>

            <div className="links">
              <IconWrapper>
                <a href="https://gifs-angular-app.web.app/" target="_blank" rel="noreferrer">
                  <Icon icon="fa:external-link-square" />
                </a>
                <div className="tooltip">{t('visit')}</div>
              </IconWrapper>

              <IconWrapper>
                <a href="https://github.com/SaniEHerr/gifs-app" target="_blank" rel="noreferrer">
                  <Icon icon="bi:github" />
                </a>
                <div className="tooltip">GITHUB</div>
              </IconWrapper>
            </div>
          </div>
          
          <div className="card-content">
            <img className="img" src={GifsAng} alt="project image" />

            <p className="description">
              {t('gifsApp-description')}
            </p>

            <div className="stack-container">
              <div className="stack">
                <IconWrapper>
                  <Icon icon="vscode-icons:file-type-angular" />
                  <div className="tooltip">ANGULAR</div>
                </IconWrapper>

                <IconWrapper>
                  <Icon icon="devicon:rxjs" />
                  <div className="tooltip">RXJS</div>
                </IconWrapper>
                
                <IconWrapper>
                  <Icon icon="devicon:nestjs" />
                  <div className="tooltip">NESTJS</div>
                </IconWrapper>
              </div>
            </div>
          </div>
        </div>

        {/* country-angular-app */}
        <div className="card-container con4">
          <div className="fondo"></div>
          <div className="fondo2"></div>

          <div className="card-header">
            <h1 className="title">Country App</h1>

            <div className="links">
              <IconWrapper>
                <a href="https://country-angular-app-99cfe.web.app/" target="_blank" rel="noreferrer">
                  <Icon icon="fa:external-link-square" />
                </a>
                <div className="tooltip">{t('visit')}</div>
              </IconWrapper>

              <IconWrapper>
                <a href="https://github.com/SaniEHerr/country-app" target="_blank" rel="noreferrer">
                  <Icon icon="bi:github" />
                </a>
                <div className="tooltip">GITHUB</div>
              </IconWrapper>
            </div>
          </div>
          
          <div className="card-content">
            <img className="img" src={worldAng} alt="project image" />

            <p className="description">
              {t('countryApp-description')}
            </p>

            <div className="stack-container">
              <div className="stack">
                <IconWrapper>
                  <Icon icon="vscode-icons:file-type-angular" />
                  <div className="tooltip">ANGULAR</div>
                </IconWrapper>

                <IconWrapper>
                  <Icon icon="devicon:rxjs" />
                  <div className="tooltip">RXJS</div>
                </IconWrapper>
                
                <IconWrapper>
                  <Icon icon="devicon:nestjs" />
                  <div className="tooltip">NESTJS</div>
                </IconWrapper>
              </div>
            </div>
          </div>
        </div>
        
        {/* auth-angular-nest-app */}
        <div className="card-container con2">
          <div className="fondo"></div>
          <div className="fondo2"></div>

          <div className="card-header">
            <h1 className="title">Auth App</h1>

            <div className="links">
              <IconWrapper>
                <a href="https://www.youtube.com/watch?v=DBRoFerVl_Q&ab_channel=Vector" target="_blank" rel="noreferrer">
                  <Icon icon="fa:external-link-square" />
                </a>
                <div className="tooltip">{t('visit')}</div>
              </IconWrapper>

              <IconWrapper>
                <a href="https://www.youtube.com/watch?v=DBRoFerVl_Q&ab_channel=Vector" target="_blank" rel="noreferrer">
                  <Icon icon="bi:github" />
                </a>
                <div className="tooltip">GITHUB</div>
              </IconWrapper>
            </div>
          </div>

          <div className="card-content">
            <img className="img" src={nestAngAuth} alt="project image" />

            <p className="description">
              {t('authApp-description')}
            </p>

            <div className="stack-container">
              <div className="stack">
                <IconWrapper>
                  <Icon icon="vscode-icons:file-type-angular" />
                  <div className="tooltip">ANGULAR</div>
                </IconWrapper>

                <IconWrapper>
                  <Icon icon="devicon:rxjs" />
                  <div className="tooltip">RXJS</div>
                </IconWrapper>

                <IconWrapper>
                  <Icon icon="devicon:nestjs" />
                  <div className="tooltip">NESTJS</div>
                </IconWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LearningStyles>
  )
}

export default Learning