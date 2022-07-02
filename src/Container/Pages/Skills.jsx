import React from "react";
import { ImProfile } from "react-icons/im";
import Skillbar from 'react-skillbars'

export default function Skills() {
  const skills = [
    {
      type: 'React',
      level: 90,
      color: {
        bar: '#4288d0',
        title: { text: '#fff', background: '#124e8c' }
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
      level: 85,
      color: {
        bar: '#5a68a5',
        title: { text: '#fff', background: '#46465e' }
      }
    },
    {
      type: 'CSS',
      level: 80,
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
      level: 80,
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
    <div id="skills" className="page bg-gray-700">
      <h1 className="text-3xl font-bold font-mono text-left py-4">Skills</h1>
      <Skillbar skills={skills} height={50} colors={colors}/>
        <div className="flex pt-2">
          <p>Click to View or Download Resume</p>
          <a
            className="App-link text-lg pl-4"
            href="https://drive.google.com/file/d/1ukxbs24lipSdZjhBgOQi60AJLc2yxYZS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
          <ImProfile />
          </a>
        </div>
    </div>
  );
}
