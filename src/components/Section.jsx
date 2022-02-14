import React from "react";
import { Timer, Features } from "../assets/data";

function Section() {
  return (
    <div className="section">
      <h1 className="title container">
        An online Pomodoro Timer to boost your productivity
      </h1>
      <div className="category container">
        <h2 className="category_header">What is Pomofocus?</h2>
        <p className="category_text">
          Pomofocus is a customizable pomodoro timer that works on desktop &
          mobile browser. The aim of this app is to help you focus on any task
          you are working on, such as study, writing, or coding. This app is
          inspired by <a href="#\">Pomodoro Technique</a> which is a time
          management method developed by Francesco Cirillo.
        </p>
      </div>
      <div className="category container">
        <h2 className="category_header">What is Pomodoro Technique?</h2>
        <p className="category_text">
          The Pomodoro Technique is created by Francesco Cirillo for a more
          productive way to work and study. The technique uses a timer to break
          down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. Each interval is known as a pomodoro, from
          the Italian word for 'tomato', after the tomato-shaped kitchen timer
          that Cirillo used as a university student. -
          <a href="#/"> Wikipedia</a>
        </p>
      </div>
      <div className="category container">
        <h2 className="category_header">How to use the Pomodoro Timer?</h2>
        <ol className="list_ol">
          {Timer.map((el) => (
            <li>
              <strong>{el.name[0]}</strong>
              {el.name[1]}
            </li>
          ))}
        </ol>
      </div>
      <div className="category container">
        <h2 className="category_header">Features</h2>
        <ul className="list">
          {Features.map((el) => (
            <li>
              <strong>{el.name[0]}</strong>
              {el.name[1]}
            </li>
          ))}
        </ul>
      </div>
      <div className="category container">
        <h2 className="category_header">Download App</h2>
        <ul className="list">
          <li>
            <a href="https://pomofocus.io/downloadable/pomofocus-darwin-x64-1.1.0.zip">
              &nbsp;For macOS
            </a>
            &nbsp;(zip file)
          </li>
          <li>
            <a href="https://pomofocus.io/downloadable/pomofocus-1.1.0%20Setup.exe">
              &nbsp;For Windows
            </a>
            &nbsp;(exe file)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section;
