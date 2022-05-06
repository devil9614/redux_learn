import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toogle, { toggleTheme } from "../feature/toogle";
export default function ToggleButton() {
    const toggle  = useSelector((state) => state.toggle.value)
    const dispatch = useDispatch()
    const handleClick = () => {
        console.log("Working")
        dispatch(toogle())
    }
    console.log(toggle)
  return (
    <div>
      <button onClick = {handleClick}>Toggle</button>
    </div>
  );
}
