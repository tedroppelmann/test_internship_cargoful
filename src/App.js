import './App.css';
import React, { useState } from "react";
import Draggable from 'react-draggable';

function App() {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      state: true,
    },
    {
      id: 2,
      state: true,
    },
    {
      id: 3,
      state: true,
    },
    {
      id: 4,
      state: true,
    },
    {
      id: 5,
      state: true,
    },
  ]);

  const changeColor = (boxSelected) => {
    const newBoxState = [...boxes]; //Helper to create another independent copy
    for (let box of newBoxState) {
      if (box.id !== boxSelected.id) {
        if (box.state === true) {
          box.state = false;
        } else {
          box.state = true;
        }
      }
    }
    setBoxes(newBoxState);
  }

  return (
    <div className="App">
      {boxes.map(box => (
        <Draggable
          key={box.id}
          disabled={box.state === true ? false : true}
        >
          <div 
          className="box"
          style={{backgroundColor: box.state === true ? "green" : "red"}}
          onDoubleClick={() => {changeColor(box)}} 
          >
            <p>
              Hi, I am a box
            </p>
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default App;
