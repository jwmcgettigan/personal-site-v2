import React from 'react';
import './Project.scss';
import Icon from '../../Components/Icon';

const Project = () => (
  <main id="project">
    <div className="title-section">
      <h1>Project Template</h1>
      <p>Project info goes here!</p>
    </div>
    <div className="client section">
      <img src={require("../../assets/Projects/phoenixhacks.svg")} alt=""/>
      <div className="info">
        <h3>Client Name</h3>
        <div className="metadata">
          <span><Icon icon="FaIndustry"/>&nbsp;Industry: Tech</span>
          <span><Icon icon="FaUsers"/>&nbsp;Size: 100+</span>
          <span><Icon icon="FaLink"/>&nbsp;Website: clientsite.com</span>
        </div>
        <p>Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
        <h4>Project Requirements</h4>
        <ul>
          <li>Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Requirement donec pede justo, fringilla vel, aliquet nec.</li>
          <li>Requirement phasellus ullamcorper ipsum rutrum nunc.</li>
        </ul>
      </div>
    </div>
    <div className="project-sections section">
      <div className="project-section">
        <h2>Project Overview</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
      </div>
      <div className="project-section">
        <h2>The Challenge</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
      </div>
      <div className="project-section">
        <h2>{"The Approach & Solution"}</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
      </div>
      <div className="project-section">
        <h2>The Results</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
      </div>
    </div>
  </main>
)

export default Project;