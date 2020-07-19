/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { Button, TitleSection, Card } from '../../2_Components';
import { pages } from '../../3_Data';
import { mq, zDepth, color } from '../../4_Utilities';

//import ProfilePicture from '../../assets/body-shot-placeholder.jpg';
import ProfilePicture from '../../assets/ProfilePic/ProfilePic1-resized.png';

const AboutMe = () => {
  const theme = useTheme();

  const aboutMeStyle = css(`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto min-content;
    justify-content: center;
    grid-gap: 1rem;
    margin: auto;

    ${mq('desktop')} {
      grid-gap: 3rem;
      grid-template-columns: auto min-content;
      grid-template-rows: 1fr;
    }
    img {
      border-radius: 0;
      align-self: center;
      width: 256px;
      border-radius: 3px;
    }
  `)

  const profileStyle = css(`
    //color: ${color(theme.palette.surface).getContrastText()};
    h2 {
      font-size: 3rem;
      //! color: color(background, on);
      color: ${color(theme.palette.surface).getContrastText()};
      margin-bottom: 0.25rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1.5rem;
      text-align: left;
    }

    .buttons {
      display: flex;
      margin-bottom: 1.5rem;

      a {
        margin-right: 0.5rem;
        margin-bottom: 1rem;
        transform: perspective(100px) translateZ(0px);
        transition: transform 100ms linear;
        &:first-of-type {
          background: ${theme.palette.primary.dark};
          color: ${color(theme.palette.primary.dark).getContrastText()};
        }
        &:last-of-type {
          background: ${theme.palette.primary.main};
          color: ${color(theme.palette.primary.main).getContrastText()};
        }
        &:hover {
          filter: none;
          //transform: scale(1.1, 1.1);
          //transform: translateZ(400px) perspective(500px);
          transform: perspective(100px) translateZ(5px);
        }
      }
    }
  `)

  return (
    <TitleSection>
      <Card css={aboutMeStyle}>
        <div css={profileStyle}>
          <h2>Justin McGettigan</h2>
          <h3>Aspiring Software Engineer</h3>
          <p>
            I'm an aspiring software engineer who loves learning about the cutting edge technologies that are shaping the future of our world.  
            With strong experience developing sensor fusion and tracking algorithms,
            I believe that computer vision, machine learning, and augmented reality are the future.
          </p>
          <div className="buttons">
            <Button type="pagelink" page={pages.find(page => page.name === 'Projects')}/>
            <Button type="pagelink" page={pages.find(page => page.name === 'Resume')}/>
          </div>
        </div>
        <img src={ProfilePicture} alt="Profile"/> 
      </Card>
    </TitleSection>
  )
}

export default AboutMe;