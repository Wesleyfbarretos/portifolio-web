/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FooterComponent } from '../../components/footer/footerComponent';
import { NavigationBarComponent } from '../../components/navigationBar/navigationBarComponent';
import pokedexImg from '../../images/Dex-print.png';
import github from '../../images/GitHub-Mark.png';
import backendImg from '../../images/back-end.png';
import darkIntroductionImg from '../../images/dark-introduction-img.png';
import dexApp from '../../images/dex-app.png';
import deployImg from '../../images/icons8-deploy.gif';
import introductionImg from '../../images/introduction-img.png';
import cypressIcon from '../../images/skill-icons/cypress.svg';
import cssIcon from '../../images/skill-icons/icons8-css3.svg';
import dockerIcon from '../../images/skill-icons/icons8-docker.svg';
import gitIcon from '../../images/skill-icons/icons8-git.svg';
import gitHubIcon from '../../images/skill-icons/icons8-github.svg';
import htmlIcon from '../../images/skill-icons/icons8-html-5.svg';
import javascriptIcon from '../../images/skill-icons/icons8-javascript.svg';
import mySqlIcon from '../../images/skill-icons/icons8-mysql-logo.svg';
import nodeJsIcon from '../../images/skill-icons/icons8-nodejs.svg';
import postgreIcon from '../../images/skill-icons/icons8-postgresql.svg';
import prismaIcon from '../../images/skill-icons/icons8-prisma-orm.svg';
import reactIcon from '../../images/skill-icons/icons8-react-native.svg';
import typescriptIcon from '../../images/skill-icons/icons8-typescript.svg';
import jestIcon from '../../images/skill-icons/jest-js-icon.svg';
import nestJsIcon from '../../images/skill-icons/nestjs-icon.svg';
import typeOrmIcon from '../../images/skill-icons/typeorm-seeklogo.com.svg';
import './home.css';

interface RadioLabel {
  radio1: string;
  radio3: string;
  radio2: string;
}

export function HomePage() {
  const [radioBackground, setRadioBackground] = useState<RadioLabel>({
    radio1: '#33c1ff',
    radio2: '',
    radio3: '',
  });

  const [display, setDisplay] = useState('none');
  const [projectConfigs, setProjectConfigs] = useState({
    pokedex: {
      img: '.6',
      data: '1',
    },
    dexApp: {
      img: '0',
      data: '0',
    },
    backendApp: {
      img: '0',
      data: '0',
    },
  });

  const [projectDisplay, setProjectDisplay] = useState({
    DisplayProject1: '',
    DisplayProject2: '',
    DisplayProject3: '',
  });
  const [introductionImgOpacity, setIntroductionImgOpacity] = useState({
    dark: 0,
    normal: 1,
  });

  const [labelLock, setLabelLock] = useState<boolean>(false);

  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
  });
  const { ref: skillRef, inView: skillInView } = useInView({
    triggerOnce: true,
  });
  const { ref: skillRef2, inView: skillInView2 } = useInView({
    triggerOnce: true,
  });
  const { ref: skillRef3, inView: skillInView3 } = useInView({
    triggerOnce: true,
  });
  const { ref: skillRef4, inView: skillInView4 } = useInView({
    triggerOnce: true,
  });

  function resetProjectDisplay() {
    setProjectDisplay({
      DisplayProject1: '',
      DisplayProject2: '',
      DisplayProject3: '',
    });
  }

  function updateOpacityOfIntroImage(condition: boolean): void {
    if (condition) {
      return setIntroductionImgOpacity({
        dark: 1,
        normal: 0,
      });
    }

    return setIntroductionImgOpacity({
      dark: 0,
      normal: 1,
    });
  }

  function changeRadioBackground(index: number) {
    if (index === 2) {
      return setRadioBackground(() => ({
        radio1: '',
        radio2: '#33c1ff',
        radio3: '',
      }));
    }

    if (index === 3) {
      return setRadioBackground(() => ({
        radio1: '',
        radio2: '',
        radio3: '#33c1ff',
      }));
    }

    return setRadioBackground(() => ({
      radio1: '#33c1ff',
      radio2: '',
      radio3: '',
    }));
  }

  function learnMoreScrolling() {
    const element = document.querySelector('main .title');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  function changeDisplay() {
    setDisplay('block');
  }

  return (
    <>
      <header className="header-home">
        <NavigationBarComponent
          updateOpacityOfIntroImage={updateOpacityOfIntroImage}
        />

        <section className="introduction container">
          <div className="introduction-content">
            <div className="introduction-content-to-desktop">
              <h1 className="introduction-title">
                Desenvolvedor Full Stack com uma paixão por Back-end,
                construindo aplicações robustas e escaláveis
              </h1>
              <p className="introduction-description-to-desktop">
                Se está á procura de um Desenvolvedor Full Stack apaixonado por
                back-end, empenhado em apresentar resultados excepcionais e
                focado em proporcionar a melhor experiência ao usuário, estou
                pronto para assumir novos desafios e colaborar em projetos
                inovadores
              </p>
              <div
                className="learn-more-text-container-desktop"
                role="button"
                tabIndex={0}
                onClick={() => {
                  resetProjectDisplay();
                  changeDisplay();
                  setTimeout(() => {
                    learnMoreScrolling();
                  }, 10);
                }}
              >
                <p className="learn-more-text-desktop">Conheça meu trabalho</p>
                <span className="material-symbols-rounded learn-more-expand-desktop">
                  expand_more
                </span>
              </div>
            </div>
            <div className="introduction-img-container">
              <img
                src={darkIntroductionImg}
                alt=""
                className="introduction-img dark-introduction-img"
                style={{ opacity: introductionImgOpacity.dark }}
              />
              <img
                src={introductionImg}
                alt=""
                className="introduction-img"
                style={{ opacity: introductionImgOpacity.normal }}
              />
            </div>

            <p className="introduction-description">
              Se está á procura de um Desenvolvedor Full Stack apaixonado por
              back-end, empenhado em apresentar resultados excepcionais e focado
              em proporcionar a melhor experiência ao usuário, estou pronto para
              assumir novos desafios e colaborar em projetos inovadores
            </p>
          </div>
        </section>

        <div className="container learn-more-header">
          <div
            className="learn-more-text-container"
            role="button"
            tabIndex={0}
            onClick={() => {
              resetProjectDisplay();
              changeDisplay();
              setTimeout(() => {
                learnMoreScrolling();
              }, 10);
            }}
          >
            <p className="learn-more-text">Conheça meu trabalho</p>
            <span className="material-symbols-rounded learn-more-expand">
              expand_more
            </span>
          </div>
        </div>
      </header>

      <main style={{ display }}>
        <section className="container projects">
          <div className="projects-container">
            <h1 className="title">Projetos</h1>
            <div
              ref={projectRef}
              className={`project  ${projectInView ? 'fadeInLeft' : ''}`}
            >
              <img
                src={pokedexImg}
                alt=""
                className="img-dex"
                style={{
                  opacity: projectConfigs.pokedex.img,
                  display: projectDisplay.DisplayProject1,
                }}
              />
              <div
                className="project-data"
                style={{
                  opacity: projectConfigs.pokedex.data,
                  display: projectDisplay.DisplayProject1,
                }}
              >
                <img
                  src={pokedexImg}
                  alt=""
                  className="project-image-desktop"
                />
                <p className="name">Deploy Pokedex</p>
                <figcaption className="images-container">
                  <a
                    href="https://github.com/Wesleyfbarretos/Pokedex"
                    target="_blank"
                    className="images-link"
                    rel="noreferrer"
                  >
                    <img
                      className="perfil-image"
                      src={github}
                      alt="github-link"
                    />
                  </a>
                  <a
                    href="https://wfpokedex.vercel.app"
                    className="images-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="perfil-image"
                      src={deployImg}
                      alt="deploy-link"
                    />
                  </a>
                </figcaption>

                <ul className="technologies">
                  <li className="tech-items">
                    <img src={typescriptIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={nodeJsIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={reactIcon} alt="" className="tech-img" />
                  </li>
                </ul>
              </div>

              <img
                src={dexApp}
                alt="imagem of an pokedex"
                className="img-dex"
                style={{
                  opacity: projectConfigs.dexApp.img,
                  display: projectDisplay.DisplayProject2,
                }}
              />

              <div
                className="project-data"
                style={{
                  opacity: projectConfigs.dexApp.data,
                  display: projectDisplay.DisplayProject2,
                }}
              >
                <img src={dexApp} alt="" className="project-image-desktop" />
                <p className="name">Pokedex App</p>
                <a
                  href="https://github.com/Wesleyfbarretos/Pokedex-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="perfil-image" src={github} alt="" />
                </a>
                <ul className="technologies">
                  <li className="tech-items">
                    <img src={typescriptIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={nodeJsIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={dockerIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={typeOrmIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={jestIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={postgreIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={reactIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={cypressIcon} alt="" className="tech-img" />
                  </li>
                </ul>
              </div>

              <img
                src={backendImg}
                alt="imagem of an pokedex"
                className="img-dex"
                style={{
                  opacity: projectConfigs.backendApp.img,
                  display: projectDisplay.DisplayProject3,
                }}
              />

              <div
                className="project-data"
                style={{
                  opacity: projectConfigs.backendApp.data,
                  display: projectDisplay.DisplayProject3,
                }}
              >
                <img
                  src={backendImg}
                  alt="imagem of an api"
                  className="project-image-desktop"
                />
                <p className="name">API Pokedex</p>
                <a
                  href="https://github.com/Wesleyfbarretos/backend-DEX"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="" className="perfil-image" />
                </a>

                <ul className="technologies">
                  <li className="tech-items">
                    <img src={typescriptIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={nodeJsIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={dockerIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={jestIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={typeOrmIcon} alt="" className="tech-img" />
                  </li>
                  <li className="tech-items">
                    <img src={postgreIcon} alt="" className="tech-img" />
                  </li>
                </ul>
              </div>
            </div>

            <input
              className="radio"
              type="radio"
              name="projects-options"
              id="option-1"
              checked
            />
            <input
              className="radio"
              type="radio"
              name="projects-options"
              id="option-2"
            />
            <input
              className="radio"
              type="radio"
              name="projects-options"
              id="option-3"
            />
            <div className="input-container">
              <label
                htmlFor="option-1"
                className="radio-label"
                style={{ background: radioBackground.radio1 }}
                onClick={() => {
                  if (!labelLock) {
                    setLabelLock(true);
                    changeRadioBackground(1);
                    setProjectDisplay((state) => ({
                      DisplayProject1: '',
                      DisplayProject2: state.DisplayProject2,
                      DisplayProject3: state.DisplayProject3,
                    }));
                    setProjectConfigs(() => ({
                      pokedex: {
                        data: '1',
                        img: '.6',
                      },
                      dexApp: {
                        data: '0',
                        img: '0',
                      },
                      backendApp: {
                        data: '0',
                        img: '0',
                      },
                    }));
                    setTimeout(() => {
                      setProjectDisplay((state) => ({
                        DisplayProject1: state.DisplayProject1,
                        DisplayProject2: 'none',
                        DisplayProject3: 'none',
                      }));
                      setLabelLock(false);
                    }, 500);
                  }
                }}
              />
              <label
                htmlFor="option-2"
                className="radio-label"
                style={{ background: radioBackground.radio2 }}
                onClick={() => {
                  if (!labelLock) {
                    setLabelLock(true);
                    changeRadioBackground(2);
                    setProjectDisplay((state) => ({
                      DisplayProject1: state.DisplayProject1,
                      DisplayProject2: '',
                      DisplayProject3: state.DisplayProject3,
                    }));
                    setProjectConfigs(() => ({
                      pokedex: {
                        data: '0',
                        img: '0',
                      },
                      dexApp: {
                        data: '1',
                        img: '.6',
                      },
                      backendApp: {
                        data: '0',
                        img: '0',
                      },
                    }));
                    setTimeout(() => {
                      setProjectDisplay((state) => ({
                        DisplayProject1: 'none',
                        DisplayProject2: state.DisplayProject2,
                        DisplayProject3: 'none',
                      }));
                      setLabelLock(false);
                    }, 500);
                  }
                }}
              />
              <label
                htmlFor="option-3"
                className="radio-label"
                style={{ background: radioBackground.radio3 }}
                onClick={() => {
                  if (!labelLock) {
                    setLabelLock(true);
                    changeRadioBackground(3);
                    setProjectDisplay((state) => ({
                      DisplayProject1: state.DisplayProject1,
                      DisplayProject2: state.DisplayProject2,
                      DisplayProject3: '',
                    }));
                    setProjectConfigs(() => ({
                      pokedex: {
                        data: '0',
                        img: '0',
                      },
                      dexApp: {
                        data: '0',
                        img: '0',
                      },
                      backendApp: {
                        data: '1',
                        img: '.6',
                      },
                    }));
                    setTimeout(() => {
                      setProjectDisplay((state) => ({
                        DisplayProject1: 'none',
                        DisplayProject2: 'none',
                        DisplayProject3: state.DisplayProject3,
                      }));
                      setLabelLock(false);
                    }, 500);
                  }
                }}
              />
            </div>
          </div>
        </section>

        <section className="container skills">
          <div className="skills-inside-container">
            <h2 className="skills-title">Habilidades</h2>
            <div className="skills-container">
              <ul
                ref={skillRef}
                className={`skills-list ${skillInView ? 'fadeInRight' : ''}`}
              >
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">html</p>
                    <img src={htmlIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">css</p>
                    <img src={cssIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">javascript</p>
                    <img src={javascriptIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">typescript</p>
                    <img src={typescriptIcon} alt="" className="skill-img" />
                  </div>
                </li>
              </ul>
            </div>

            <div className="skills-container">
              <ul
                ref={skillRef2}
                className={`skills-list ${skillInView2 ? 'fadeInLeft' : ''}`}
              >
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">nodejs</p>
                    <img src={nodeJsIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">typeorm</p>
                    <img src={typeOrmIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">jest</p>
                    <img src={jestIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">docker</p>
                    <img src={dockerIcon} alt="" className="skill-img" />
                  </div>
                </li>
              </ul>
            </div>

            <div className="skills-container">
              <ul
                ref={skillRef3}
                className={`skills-list ${skillInView3 ? 'fadeInRight' : ''}`}
              >
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">react</p>
                    <img src={reactIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">cypress</p>
                    <img src={cypressIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">nestjs</p>
                    <img src={nestJsIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">postgresql</p>
                    <img src={postgreIcon} alt="" className="skill-img" />
                  </div>
                </li>
              </ul>
            </div>

            <div className="skills-container">
              <ul
                ref={skillRef4}
                className={`skills-list ${skillInView4 ? 'fadeInLeft' : ''}`}
              >
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">mysql</p>
                    <img src={mySqlIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">prisma</p>
                    <img src={prismaIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">git</p>
                    <img src={gitIcon} alt="" className="skill-img" />
                  </div>
                </li>
                <li className="skill-card">
                  <div className="card">
                    <p className="skill-name">github</p>
                    <img src={gitHubIcon} alt="" className="skill-img" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="container" style={{ display }}>
        <FooterComponent />
      </footer>
    </>
  );
}
