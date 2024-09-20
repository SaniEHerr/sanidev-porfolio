import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { GrMail } from "react-icons/gr";

import styled from "styled-components";

const NavStyles = styled.div`
  position         : fixed;
  top              : 0;
  left             : 0;
  width            : 100%;
  display          : flex;
  justify-content  : space-between;
  align-items      : center;
  flex-direction   : row;
  padding          : 3vh 2vh;
  z-index          : 10;
  background-color : transparent;
  background-color : ${props => (props.scrolled ? "#0E100F" : "transparent")};
  box-shadow       : ${props => (props.scrolled ? "0px 2px 4px #FE8609" : "none")};
  transition       : background-color 0.3s ease, box-shadow 0.3s ease;

  .button-container {
    display         : flex;
    align-items     : center;
    justify-content : center;
    position        : relative;
    width           : 30px;
    height          : 24px;
    cursor          : pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .line {
    position         : absolute;
    width            : 30px;
    height           : 3px;
    background-color : #FFFCE1;  /* Color amarillo, puedes cambiarlo según tus necesidades */
    transition       : transform 0.3s ease, opacity 0.3s ease;
  }

  .line:nth-child(1) {
    transform : translateY(-7px) rotate(0deg);
  }

  .line:nth-child(2) {
    transform : rotate(0deg);
  }

  .line:nth-child(3) {
    transform : translateY(7px) rotate(0deg);
  }

  .button-container.open .line:nth-child(1) {
    transform : translateY(0px) rotate(45deg);
  }

  .button-container.open .line:nth-child(2) {
    opacity : 0;
  }

  .button-container.open .line:nth-child(3) {
    transform : translateY(0px) rotate(-45deg);
  }

  .logo {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  .logo,
  .item {
    z-index        : 20;
    color          : var(--black);
    mix-blend-mode : difference;
    transition     : 0.3s all ease;
    font-size      : .9rem;

    :hover {
      -webkit-text-stroke : 0.05vw var(--black);
    }

    @media (min-width: 350px) {
      font-size : 1.1rem;
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
      font-size : 1.9rem;
    } 

    /* @media (min-width: 1550px) {
      font-size : 2.1rem;
    }  */

    /* @media (min-width: 1650px) {
      font-size : 2.1rem;
    }  */

    /* @media (min-width: 1920px) {
      font-size : 2.1rem;
    }  */
  }

  .nav-items {
    display          : none;
    flex-direction   : row;
    gap              : 1rem;
    align-items      : center;
    justify-content  : center;

    @media (min-width: 464px) {
      gap : 2rem;
    }
    
    @media (min-width: 464px) {
      gap : 2rem;
    }

    @media (min-width: 768px) {
      display: flex;
    }

    @media (min-width: 1240px) {
      gap : 2.5rem;
    }
  }

  .switch {
    position      : relative;
    width         : 125px;
    height        : 45px;
    border-radius : 1.5625rem;

    input {
      appearance       : none;
      width            : 100%;
      height           : 100%;
      border-radius    : 1.5625rem;
      background-color : red;
      transition       : 0.2s;

      ::before,
      ::after {
        z-index     : 2;
        position    : absolute;
        top         : 50%;
        transform   : translateY(-50%);
        font-weight : bolder;
      }

      ::before {
        content     : "EN";
        left        : 24.25px;
        top         : 21.25px;
        font-weight : bolder;
        font-family : Grotesk;
        font-weight : 600;
        font-size   : 1.2rem;
        
      }

      ::after {
        content     : "ES";
        right       : 24.25px;
        top         : 21.25px;
        font-weight : bolder;
        font-family : Grotesk;
        font-weight : 600;
        font-size   : 1.2rem;
      }

      :checked {
        background-color: #FE8609;
      }

      :checked::after,
      :checked::before {
        color      : #0E100F;
        transition : color;
      }

      :checked+label {
        left       : 10px;
        right      : 50%;
        background : #FFFCE1;
        transition : left 0.2s, right 0.1s 0.1s;
      }

      :not(:checked) {
        background : #FFFCE1;
        transition : background 0.2s;
      }

      :not(:checked)::before {
        color      : #0E100F;
        transition : color 0.2s;
      }

      :not(:checked)::after {
        color      : #0E100F;
        transition : color 0.2s;
      }

      :not(:checked)+label {
        left       : 50%;
        right      : 10px;
        background : #FE8609;
        transition : left 0.1s 0.1s, right 0.2s, background 0.35s;
      }
    }

    label {
      z-index       : 1;
      position      : absolute;
      top           : 4px;
      bottom        : 4px;
      border-radius : 20px;
      left          : 0;
      right         : 0;
    }
  }

  .phone-switcher {
    @media (min-width: 768px) {
      display : none;
    }
  }

  /* Estilo del contenedor con animaciones */
  .container {
    min-width        : 90vw;
    max-width        : 70vw;                       
    display          : flex;
    justify-content  : space-between;
    align-items      : center;
    flex-direction   : column;
    position         : fixed;
    top              : 50%;
    left             : 50%;
    transform        : translate(-50%, -50%);
    padding          : 8rem 0;
    /* background-color : rgba(255, 255, 255, 0.75); */
    /* background-color : rgba(14,16,15, 0.75);    */
    background-color : rgba(255,252,225, 0.75);
    border-radius    : 1rem;
    z-index          : 50;
    backdrop-filter  : blur(8px);
  }

  /* Estilo de la navegación dentro del contenedor */
  .container .item-container {
    display         : flex;
    justify-content : center;
    align-items     : center;
    flex-direction  : column;
    gap             : 1rem;
    margin-bottom   : 1.5rem;
    mix-blend-mode  : difference;
  }

  .container .item-container a {
    color           : #FFFCE1;
    text-decoration : none;
    font-size       : 1.5rem;
    transition      : color 0.3s ease;
  }

  .container .social-container {
    display         : flex;
    align-items     : center;
    justify-content : center;
    flex-direction  : row;
    gap             : 2rem;
  }

  .container .social-container a {
    font-size : 2rem;
    color     : #FFFCE1;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // Guardar el idioma en localStorage
  };
  
  const toggleSwitch = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    changeLanguage();
    localStorage.setItem('isChecked', newCheckedState); // Guardar el estado del switch en localStorage
  };

  useEffect(() => {
    const savedCheckedState = localStorage.getItem('isChecked') === 'true';
    setIsChecked(savedCheckedState);

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage); // Cambiar al idioma guardado en localStorage
    }
  }, [i18n]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavStyles scrolled={scrolled}>

      <div
        className={`button-container ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <span className="switch phone-switcher">
        <input 
          type="checkbox" 
          id="switcher" 
          checked={isChecked}
          onChange={toggleSwitch}
        />
        <label htmlFor="switcher"></label>
      </span>

      <NavLink className="logo nav-button" to="/">
        SH
      </NavLink>

      <div className="nav-items">
        <NavLink className="item nav-button" to="/projects">
          {t('projects')}
        </NavLink>
        
        <NavLink className="item nav-button" to="/learning">
          {t('learning')}
        </NavLink>

        <span className="switch" >
          <input 
            type="checkbox" 
            id="switcher" 
            checked={isChecked}
            onChange={toggleSwitch}
          />
          <label htmlFor="switcher"></label>
        </span>
      </div>

      {
        isOpen ?

        <AnimatePresence mode="wait" >
          <motion.div key="unique-key" className="container"
            initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
            animate={{scale:1, opacity:1}}
            exit={{ scale: 0, opacity: 0, transition: { duration: 3 } }}
          >

            <nav className="item-container">
              <NavLink to="/">{t('home')}</NavLink>
              <NavLink to="/projects">{t('projects')}</NavLink>
              <NavLink to="/learning">{t('learning')}</NavLink>
            </nav>

            <nav className='social-container'>
              <motion.a whileHover={{y:-2}} whileTap={{scale:1.2}} href="https://www.linkedin.com/in/santiago-herrera-501293239/" target="_blank" rel="noreferrer">
                <BsLinkedin /> 
              </motion.a>

              <motion.a whileHover={{y:-2}} whileTap={{scale:1.2}} href="mailto: santiagoeherrera@gmail.com">
                <GrMail />
              </motion.a>

              <motion.a whileHover={{y:-2}} whileTap={{scale:1.2}} href="https://github.com/SaniEHerr" target="_blank" rel="noreferrer">
                <FaGithub />
              </motion.a>
            </nav>

          </motion.div> 
        </AnimatePresence>

        : null
      }

    </NavStyles>
  );
};

export default Navbar;