import React from "react";
import { FaFileDownload } from "react-icons/fa";
import Skillbar from 'react-skillbars'

export default function Skills() {
  const skills = [
    {
      type: 'ReactJS',
      level: 90,
      color: {
        bar: '#4288d0',
        title: { text: '#fff', background: '#124e8c' }
      }
    },
    {
      type: 'NextJS',
      level: 80,
      color: {
        bar: '#4288d0',
        title: { text: '#fff', background: '#27ae60' }
      }
    },
    {
      type: 'Javascript',
      level: 85,
      color: {
        bar: '#2c3e50',
        title: { text: '#fff', background: '#2c3e50' }
      }
    },
    {
      type: 'HTML',
      level: 80,
      color: {
        bar: 'black',
        title: { text: '#111', background: '#fff' }
      }
    },
    {
      type: 'Front-end Technologies',
      level: 90,
      color: {
        bar: '#5a68a5',
        title: { text: '#fff', background: '#46465e' }
      }
    },
    {
      type: 'CSS',
      level: 85,
      color: {
        bar: '#3498db',
        title: { text: '#fff', background: '#2980b9' }
      }
    },
    {
      type: 'Python',
      level: 75,
      color: {
        bar: '#525252',
        title: { text: '#fff', background: '#333333' }
      }
    },
    {
      type: 'Programming',
      level: 70,
      color: {
        bar: '#2c3e50',
        title: { text: '#fff', background: '#2c3e50'}
      }
    },
    {
      type: 'Development',
      level: 85,
      color: {
        bar: '#4288d0',
        title: { text: '#fff', background: '#124e8c' }
      }
    },
    {
      type: 'Django',
      level: 70,
      color: {
        bar: '#2ecc71',
        title: { text: '#fff', background: '#27ae60'}
      }
    }
];
  const colors = {
    bar: '#f05454',
    background: 'black',
    title: {
      text: '#f05454',
      background: 'black'
    }
  }
  return (
    <div id="skills" className="page">
      <h1 className="text-3xl font-bold font-mono text-left py-4">Functional Expertise</h1>
      <div className="flex pt-2">
        <ol  className="list-disc ml-6 text-left">
          <li>HTML, CSS, JS & JS frameworks(ReactJS, NextJS)</li>
          <li>Developing Mobile Friendly & Web UI apps</li>
          <li>Strong Analytical & Problem Solving</li>
          <li>Building reusable code, components & libraries</li>
          <li>CSS frameworks(Styled Components, tailwind etc)</li>
          <li>Translating business requirement into technical requirement</li>
        </ol>
      </div>
      <h1 className="text-3xl font-bold font-mono text-left py-4">Skills</h1>
      <Skillbar skills={skills} height={20} colors={colors}/>
        <div className="flex pt-2">
          <p>Click to View or Download Resume</p>
          <a
            className="App-link text-lg pl-2"
            href="https://drive.google.com/file/d/1ukxbs24lipSdZjhBgOQi60AJLc2yxYZS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaFileDownload />
          </a>
        </div>
    </div>
  );
}
