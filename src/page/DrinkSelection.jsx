import React from "react";
import { useLoaderData } from "react-router-dom";
import {useNavigate, useSubmit, redirect } from "react-router-dom";

import "./DrinkSelection.css";

export function DrinkSelection() {
  const navigate = useNavigate();
  const submit = useSubmit();

  function pop(id) {
    console.log("high and low");
    submit({ val: id }, { method: "post"});
  }


  const holdData = useLoaderData();
  

  return (
    <>
       {holdData.map((drink) => (
        <div key={drink.idDrinkItems} id="card">
          <img className="img_Id" src={drink.Image} alt={drink.Title} />
          <div className="try">
            <div className="inner_div">
              <h1 className="title">{drink.Title}</h1>
              <p className="text">{drink.Description}</p>
               <button className="bttnn" onClick={event => pop(drink.idDrinkItems)}
               >Select</button>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}

export async function loader({ request, params }) {

  const response = await  fetch("http://localhost:3001/drinks", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await  response.json();
  console.log(data[0]);

  if (response.ok) {
    return data[0];
  }
}


export async function action({request,params}){
  const val = await request.formData();
  const ID = val.get("val");
  
  const info = {
    ID
  }

  const response = await  fetch("http://localhost:3001/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info)
  });

  if(response.ok){
    return redirect('/');
  }

}