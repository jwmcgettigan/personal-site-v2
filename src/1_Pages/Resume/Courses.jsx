/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Library, Section } from '../../2_Components';
import { color } from '../../4_Utilities';

const courses = [
  "COP2271C - COMP SCI A",
  "ENC1101DE Eng Composition I",
  "ENC1102DE Eng Composition II",
  "HUM2210DE Ancient World",
  "MAC2311 CALCULUS AB",
  "PSY2012 PSYCHOLOGY",
  "CHM2045LGENS Chemistry 1",
  "COP2272CI&T Computer Programming",
  "MAC2312GEMTH Analytic Geometry and Calculus",
  "PHY2048GENS Physics",
  "PHY2048LGENS Physics 1 Laboratory",
  "EGS3625ENGR Engineering & Technology Project Management",
  "MAD2104GEMTH Discrete Mathematics",
  "PHY2049GENS Physics 2",
  "PHY2049LGENS Physics 2 Laboratory",
  "COP3834CI&T Web Application Development",
  "EEL3702CENGR Digital Logic Design",
  "STA2023GEMTH Statistics",
  "CEN4010ENGR Software Engineering",
  "COP3353CI&T Introduction to Unix",
  "COP4415I&T Data Structures",
  "COP4531I&T Algorithm Design & Analysis",
  "DIG2520I&T Digital Media Production",
  "EEL4664CENGR Autonomous Robotic Systems",
  "CIS4362I&T Applied Cryptography",
  "EEL4768CENGR Computer Architecture and Organization",
  "MAS3114GEMTH Computational Linear Algebra",
  "CAP4630I&T Artificial Intelligence",
  "CNT3004CI&T Introduction to Computer Networks",
  "COP4610I&T Operating Systems Concepts",
  "COP4934CI&T Senior Design",
  "CIS4203I&T Digital Forensics",
  "CIS4204I&T Ethical Hacking",
  "CIS4367I&T Computer Security",
  "CNT4409I&T Network Security",
  "COP4935CI&T Senior Design",
  "CAP4410I&T Computer Vision",
  "CEN4721ENGR Human Computer Interaction",
  "COP4020I&T Programming Languages",
  "IDS2144ENGR Legal, Ethical, and Management Issues in Technology",
  "MAP2302ENGR Differential Equations"
]

const Courses = ({ className }) => {
  const headerStyle = theme => css(`
    color: ${color(theme.palette.background).getContrastText()};
    font-size: 2rem;
    padding-left: 1.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    line-height: 1.2;
    position: relative;
   
    &:before {
      content: "";
      display: inline-block;
      width: 5px;
      height: 100%;
      background: ${theme.palette.primary.main};
      position: absolute;
      left: 0;
      top: 0;
    }
  `)

  return (
    <Section className={className}>
      <h2 css={headerStyle}>Courses Taken</h2>
      <Library library={courses}/>
    </Section>  
  )
}

export default Courses;