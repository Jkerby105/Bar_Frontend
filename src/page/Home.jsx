import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navaigate = useNavigate()

  return (
    <>
   
    <div className="contain">
    <button className="btn" onClick={() => navaigate("/drinkSelection")}>
        <b>Order</b>
    </button>
    <button className="btn" onClick={() => navaigate("/homeTwo")}>
        <b>Admin</b>
    </button>
  </div>
  </>
  )
}
