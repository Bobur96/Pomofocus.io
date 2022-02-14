// import report from "./icons/graph-white.png";
// import setting from "./icons/config-white.png";
// import user from "./icons/user-white.png";

import remove from "./icons/delete-black.png";
import clear from "./icons/remove-black-sm.png";
import save from "./icons/save-black2.png";
import addd from "./icons/plus-black.png";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export const time = [
  {
    name: "Pomodoro",
    color: "#d95550",
    time: 1500,
  },
  {
    name: "Short Break",
    color: "#4c9195",
    time: 300,
  },
  {
    name: "Long Break",
    color: "#457ca3",
    time: 900,
  },
];
// export const Buttons = [
//   { src: report, name: "Report" },
//   { src: setting, name: "Setting", click: "setSetting('show')" },
//   { src: user, name: "Login" },
// ];

export const Timer = [
  { name: ["Add tasks ", "to work on today"] },
  { name: ["Set estimate pomodoros ", "(1 = 25min of work) for each tasks"] },
  { name: ["Select a task ", "to work on"] },
  { name: ["Start timer ", "and focus on the task for 25 minutes"] },
  { name: ["Take a break ", "for 5 minutes when the alarm ring"] },
  { name: ["Iterate ", "3-5 until you finish the tasks"] },
];

export const Features = [
  { name: [" Responsive design ", "that works with desktop and mobile"] },
  {
    name: [
      " Color transition ",
      "to switch moods between work time and rest time",
    ],
  },
  { name: [" Audio notification ", "at the end of a timer period"] },
  { name: [" Customizable timer ", "intervals to suit your preference"] },
];

export const mmenu = [
  {
    src: remove,
    text: "Clear finished tasks",
  },
  {
    src: clear,
    text: "Clear act pomodoros",
  },
  {
    src: save,
    text: "Save as template",
  },
  {
    src: addd,
    text: "Add from templates",
  },
  {
    src: remove,
    text: "Clear all tasks",
  },
];

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 400, pv: 2400, amt: 2400 },
];

export const renderLineChart = (
  <LineChart width={560} height={550} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
