import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export function HomeTwo() {
    const navaigate = useNavigate()

  return (
    <>
   
    <div className="contain">
    <button className="btn" onClick={() => navaigate("/drinks")}>
        <b>Create</b>
    </button>
    <button className="btn" onClick={() => navaigate("/order")}>
        <b>Manage Order</b>
    </button>
  </div>
  </>
  )
}
