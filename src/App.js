import React, { useState } from "react";

const classes = ["3", "4", "5", "6", "7", "8"];
const subjects = ["English", "Hindi", "Maths", "Science", "SST", "Computer", "GK/MSC", "Drawing"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const periodsPerDay = 8;

const teacherMap = {
  English: {
    "3": "Ankit Sir", "4": "Ankit Sir", "5": "Khushboo Ma'am", "6": "Khushboo Ma'am", "7": "Khushboo Ma'am", "8": "Khushboo Ma'am"
  },
  Hindi: {
    "3": "Monica Ma'am", "4": "Monica Ma'am", "5": "Monica Ma'am", "6": "Pinky Ma'am", "7": "Pinky Ma'am", "8": "Pinky Ma'am"
  },
  Maths: {
    "3": "Meenu Ma'am", "4": "Manish Sir", "5": "Manish Sir", "6": "Manish Sir", "7": "Manish Sir", "8": "Manish Sir"
  },
  Science: {
    "3": "Anu Ma'am", "4": "Manish Sir", "5": "Anu Ma'am", "6": "Anu Ma'am", "7": "Anu Ma'am", "8": "Anu Ma'am"
  },
  SST: {
    "3": "Ankit Sir", "4": "Ankit Sir", "5": "Khushboo Ma'am", "6": "Khushboo Ma'am", "7": "Khushboo Ma'am", "8": "Khushboo Ma'am"
  },
  Computer: {
    "3": "Thru Ma'am", "4": "Thru Ma'am", "5": "Thru Ma'am", "6": "Thru Ma'am", "7": "Thru Ma'am", "8": "Thru Ma'am"
  },
  "GK/MSC": {
    "3": "Meenu Ma'am", "4": "Meenu Ma'am", "5": "Monica Ma'am", "6": "Monica Ma'am", "7": "Monica Ma'am", "8": "Monica Ma'am"
  },
  Drawing: {
    "3": "Surbhi Ma'am", "4": "Surbhi Ma'am", "5": "Meenu Ma'am", "6": "Ankit Sir", "7": "Ankit Sir", "8": "Ankit Sir"
  }
};

function generateTimetable() {
  const table = {};
  for (let cls of classes) {
    table[cls] = [];
    let dailySubjects = [...subjects];
    for (let d = 0; d < days.length; d++) {
      const dayPlan = [];
      let subjectsShuffled = [...dailySubjects].sort(() => 0.5 - Math.random());
      for (let p = 0; p < periodsPerDay; p++) {
        const subject = subjectsShuffled[p % subjectsShuffled.length];
        const teacher = teacherMap[subject][cls];
        dayPlan.push(\`\${subject} (\${teacher})\`);
      }
      table[cls].push(dayPlan);
    }
  }
  return table;
}

function App() {
  const [timetable, setTimetable] = useState(null);

  return (
    <div className="p-4 space-y-4">
      <button onClick={() => setTimetable(generateTimetable())} className="bg-blue-600 text-white px-4 py-2 rounded">
        Generate Timetable
      </button>
      {timetable && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((cls) => (
            <div key={cls} className="bg-white p-4 shadow-md rounded">
              <h2 className="text-xl font-bold mb-2">Class {cls}</h2>
              <table className="w-full text-sm border">
                <thead>
                  <tr>
                    <th>Day</th>
                    {Array.from({ length: periodsPerDay }).map((_, i) => (
                      <th key={i}>P{i + 1}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {days.map((day, i) => (
                    <tr key={day}>
                      <td className="font-semibold">{day}</td>
                      {timetable[cls][i].map((cell, j) => (
                        <td key={j} className="border px-1 py-0.5">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
