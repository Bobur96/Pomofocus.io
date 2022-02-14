import count_img from "../assets/icons/down-arrow-black.png";
import add from "../assets/icons/plus-circle-white.png";
import menu from "../assets/icons/threedots-white.png";
import block from "../assets/icons/lock-black.png";
import { time, mmenu } from "../assets/data";
import React, { useState } from "react";
import Navbar from "./Navbar";

import useSound from "use-sound";
import sound from "../assets/sound.mp3";

function Main() {
  const [counterId, setCounterId] = useState("");
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(900);
  const [color, setColor] = useState("");
  const [input, setInput] = useState(1);
  const [show, setShow] = useState("");
  const [mmen, setMmen] = useState("");

  const [play] = useSound(sound, { volume: 0.25 });

  const handleClick = (e) => {
    let active = e.target;

    time.forEach((el) => {
      if (active.textContent === el.name) {
        setColor(el.color);
        setTimer(el.time);
      }
    });

    const buttons = document.querySelectorAll(".mainly span");
    buttons.forEach((btn) => {
      if (btn.textContent === active.textContent) {
        active.id = "active";
      } else {
        btn.id = "";
      }
    });
  };

  const handleStart = () => {
    setStart(!start);
    play();

    setCounterId(
      timer > 0 &&
        setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000)
    );
  };

  const handleStop = () => {
    setStart(!start);
    clearInterval(counterId);
    play();
  };

  const addMenu = () => {
    mmen === "" ? setMmen("show") : setMmen("");
  };

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  return (
    <div className="main" style={{ background: color }}>
      <Navbar />
      <div className="main_container">
        <div className="content">
          <div className="mainly">
            <div className="buttons">
              <span id="active" onClick={handleClick}>
                Pomodoro
              </span>
              <span onClick={handleClick}>Short Break</span>
              <span onClick={handleClick}>Long Break</span>
            </div>
            <div className="time">
              {getZero(Math.floor((timer / 60) % 60))}:
              {getZero(Math.floor(timer % 60))}
            </div>
            {start ? (
              <button onClick={handleStop} style={{ color: color }}>
                STOP
              </button>
            ) : (
              <button onClick={handleStart} style={{ color: color }}>
                START
              </button>
            )}
          </div>
          <p id="one">#1</p>
          <p id="focus">Time to focus!</p>
        </div>
        <div className="tasks">
          <div className="task">
            <p>Tasks</p>
            <div className="menu">
              <button onClick={addMenu}>
                <img src={menu} alt="menu" />
              </button>
              <div className={`mmenu ${mmen}`}>
                {mmenu.map((el) => (
                  <div className="li">
                    <img src={el.src} alt="" />
                    {el.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="add_task"
            onClick={() => {
              setShow("show");
            }}
          >
            <img src={add} alt="add" />
            <p>Add Task</p>
          </div>
          <div className={`add_list ${show}`}>
            <div className="top">
              <input type="text" placeholder="What are you working on?" />
              <h3>Est Pomodoros</h3>
              <div className="task_count">
                <input type="text" value={input} disabled />
                <button>
                  <img
                    id="a"
                    onClick={() => setInput((prev) => prev + 1)}
                    src={count_img}
                    alt=""
                  />
                </button>
                <button>
                  <img
                    onClick={() => setInput((prev) => prev - 1)}
                    src={count_img}
                    alt=""
                  />
                </button>
              </div>
              <div className="add_notes">
                <a href="#/">+ Add Note</a>
                <a href="#/">
                  + Add Project
                  <img src={block} alt="" />
                </a>
              </div>
            </div>
            <div className="bottom">
              <button
                onClick={() => {
                  setShow("");
                }}
              >
                Cancel
              </button>
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
