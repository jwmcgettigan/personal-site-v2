//#region Imports

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import ReactPlayer from 'react-player';
import { RepoCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';
//import { Document, Page, pdfjs } from 'react-pdf';
//import 'react-pdf/dist/Page/AnnotationLayer.css';

// Import components
import Main from 'modules/common/Main';
import Header from 'modules/common/Header';
import Article from 'modules/common/Article';
import Section from 'modules/common/Section';
import Icon from 'modules/common/Icon';
import Link from 'modules/common/Link';
import Video from 'modules/common/Video';
import Image from 'modules/common/Image';
import CalloutCard from 'modules/common/CalloutCard';

// Import helpers
import { elevate, mq, color, googleFileURL, youtubeEmbedURL } from 'helpers';
import { useState } from 'react';

//#endregion

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Renegade = (props) => {

  //#region CSS

  const style = theme => css`
    .videos {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: left;
    }

    .video {
      margin-top: 1.5rem;
    }

    .vertical {
      ${videoDim2(200, 'px', 9/16)};
    }

    .horizontal {
      /* ${videoDim2(355.55)}; */
      height: 356px;
      max-width: 633px;
      min-width: 200px;
      flex: 1;
    }
  `;

  const videoDim = (width, type='px', ratio=16/9) => ({
    width: `${width}${type}`,
    height: `${width/ratio}${type}`
  });

  const videoDim2 = (width, type='px', ratio=16/9, important=false) => (css`
    width: 100%;
    height: ${width/ratio}${type}${important ? ' !important' : ''};
    ${mq('phablet')} {
      width: ${width}${type}${important ? ' !important' : ''};
    }
  `);

  const imageStyle = css`
    display: flex;
    margin: 0 0 1rem 0;
    ${elevate(4)};

    ${mq('phone-small')} {
      max-width: 480px;
    }

    ${mq('tablet-small')} {
      float: left;
      width: 35%;
      margin: 0.5rem 1rem 0 0;
    }

    img {
      object-position: center;
    }
  `;

  //#endregion

  //#region JSX

  //<RepoCard username="jwmcgettigan" repo="renegade"/>

  return (
    <Main css={style} {...props}>
      <Header css={css`.container{max-width:50rem;padding:4rem;}`}>
        <h2>Renegade</h2>
      </Header>
      <Article>
        {/* <Image css={css`
          display: flex;
          margin: -2rem -4rem 0 -4rem;
          width: auto;
          height: 17.5rem;
          img { object-position: center; }
        `} src="/assets/projects/Renegade.jpg"/> */}

        <Section css={css`display: block;`}>
          <Image css={imageStyle} src="/assets/projects/Renegade.jpg"/>
          <div>
            <h2>About the Project</h2>
            <p>Renegade was a self driving car that me and my classmate <a href="https://www.linkedin.com/in/david-ciccarello/">David Cicerrello</a> spent a semester working on for our Autonomous Robotic Systems course, instructed by <a href="https://www.linkedin.com/in/dean-bushey/">Dean Bushey</a>.  The course was composed of 4-5 groups of students each with their own car competitively completing a series of increasingly difficult challenges throughout the semester.  The course was based on the <a href="https://racecar.mit.edu/">MIT racecar project</a>.</p>
          </div>
        </Section>

        <Section>
          <div>
            <h3>What kind of car was Renegade?</h3>
            <p>Renegade was a <a href="https://www.amainhobbies.com/traxxas-rally-rtr-1-10-4wd-rally-racer-tra74076-1/p403885">Traxxas 74076 Rally 1/10 Brushless Rally Racer</a> that we took apart and put back together so that it gained a brain and some senses.  In particular, the brain was the NVIDIA Jetson TX2 and the sensors were the <a href="https://www.robotshop.com/en/hokuyo-ust-10lx-scanning-laser-rangefinder.html">Hokuyo Laser Range Finder</a> (lidar) and <a href="https://www.stereolabs.com/zed/">StereoLabsZED</a> (stereoscopic camera).</p>
          </div>
          <Image css={css`width: 100%; margin-top: 1rem;`} src="/assets/projects/renegade/component_diagram.svg"/>
          <div>
            <p>Renegade's brain was an Ubuntu Linux distribution which used ROS for node/service based communication between the different hardware components and the behavior logic.  The behavior logic was programmed in Python using libraries such as rospy, numpy, and opencv-python.</p>
          </div>

        </Section>
        
        <Section>
          <h2>What were the challenges?</h2>
          <p>The following challenges were a means to familiarize ourselves with sensor technologies, sensor fusion, and node/service based communication (w/ROS).</p>
        </Section>

        <Section>
          <div>
            <h3>Line Following</h3>
            <p>Use the ZED stereoscopic camera to stay centered a line (blue tape).</p>
            <CalloutCard>
              <p>This was our first challenge and the one that forced me to learn python very quickly as I hadn't used it before this taking this course.</p>
            </CalloutCard>
            <ol>
              <li><b>Line Following:</b> Use the line detector to determine the steering angle and speed, keeping the car centered on the line.
                <ol type="a">
                  <li><b>Line Detection:</b> Detect the relative orientation and distance of the robot to line.</li>
                  <li><b>Steering Controller:</b> Adjusts the steering angle to align the robot with the line.</li>
                </ol>
              </li>
            </ol>
          </div>
          <div className="videos">
            <Video className="vertical" src={youtubeEmbedURL('kyWz21H-jaM')}/>
            <Video className="vertical" src={youtubeEmbedURL('bWIslaxpfDk')}/>
          </div>
        </Section>

        <Section>
          <div>
            <h3>Obstacle Detection & Lane Centering</h3>
            <p>Use a Lidar to stay centered between walls and to stop before obstacles.</p>
            <CalloutCard>
              <p>It was particularly satisfying when we had this functionality working for every scenario we could think of.</p>
            </CalloutCard>
            <ol>
              <li><b>Obstacle Detection:</b> Detect if there is an obstacle in front of the robot.
                <ol type="a">
                  <li><b>Safety Controller:</b> Stops the car when there is an obstacle right in front of the car.</li>
                </ol>
              </li>
              <li><b>Lane Centering:</b> Use the wall detector to determine the steering angle and speed, keeping the car equidistant between walls.
                <ol type="a">
                  <li><b>Wall Detection:</b> Detect the relative orientation and distance of the robot to the surrounding walls.</li>
                  <li><b>Steering Controller:</b> Adjusts the steering angle to align the robot with the corridor.</li>
                </ol>
              </li>
            </ol>
          </div>
          <div className="videos">
            <Video className="vertical" src={youtubeEmbedURL('_oDNLpHoLfE')}/>
            <Video className="horizontal" src={youtubeEmbedURL('9-QTUsi3jeA')}/>
          </div>
        </Section>

        <Section>
          <div>
            <h3>Visual Servoing Serpentine & Pole Bending</h3>
            <p>Use the ZED camera and Lidar to navigate around certain landmarks (<span css={css`color: #d3a51c;`}>yellow cones</span> and an <span css={css`color: #be4e19;`}>orange cube</span>) while maintaining a serpentine pattern.</p>
            <CalloutCard>
              <p>We used the ZED camera for object recognition and the Lidar for distance measurements.</p>
            </CalloutCard>
            <ol>
              <li><b>Polebending:</b> Drive parallel, perform U-turns, and execute serpentine.
                <ol type="a">
                  <li><b>Serpentine:</b> Swivel through a series of cones.</li>
                  <li><b>Collision Avoidance:</b> Move to the left or right of a cone instead of into it.</li>
                  <li><b>Parking:</b> Park car in front of a cone</li>
                </ol>
              </li>
            </ol>
          </div>
          <Video className="horizontal" src={youtubeEmbedURL('ZQqze9KQkP8')}/>
        </Section>

        <Section>
          <div>
            <h3>A Multi-Car Race</h3>
            <p>Use the ZED camera and Lidar to navigate through different lane types while contending with another autonomous vehicle.</p>
            <CalloutCard>
              <p>The idea behind this 'final challenge' was to test what we learned from all of our earlier challenges while adding the element of another vehicle in the mix.  We had to go through the course as fast as possible while avoiding the other vehicle.</p>
            </CalloutCard>
            <ol>
              <li><b>Obstacle Detection:</b> Detect if there is a vehicle near the robot.
                <ol type="a">
                  <li><b>Safety Controller:</b> Stops or maneuvers the car when too close to another object.</li>
                </ol>
              </li>
              <li><b>Lane Centering (w/Walls):</b> Use the wall detector to determine the steering angle and speed, keeping the car equidistant between walls.
                <ol type="a">
                  <li><b>Wall Detection:</b> Detect the relative orientation and distance of the robot to the surrounding walls.</li>
                  <li><b>Steering Controller:</b> Adjusts the steering angle to align the robot with the corridor.</li>
                </ol>
              </li>
              <li><b>Lane Centering (w/Lines):</b> Use the line detector to determine the steering angle and speed, keeping the car centered between the lines.
                <ol type="a">
                  <li><b>Line Detection:</b> Detect the relative orientation and distance of the robot to the surrounding lines.</li>
                  <li><b>Steering Controller:</b> Adjusts the steering angle to align the robot between the lines.</li>
                </ol>
              </li>
            </ol>
          </div>
          <Video className="horizontal" src={youtubeEmbedURL('nmcDLAjBWmQ')}/>
        </Section>
        
        <Section css={css`display: flex;justify-content:space-between;`}>
          <p>TODO: Add the powerpoints we made.</p>
          <p>Last Updated: 2020-09-27</p>
        </Section>
      </Article>
    </Main>
  );

  //#endregion
};

export default {
  name: 'Renegade',
  icon: 'FaUserAlt',
  routeProps: {
    path: '/portfolio/renegade',
    exact: true,
    component: Renegade
  }
};