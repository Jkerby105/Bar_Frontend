import React from "react";
import "./Drinks.css";
import { Form, redirect } from "react-router-dom";

export function Drinks() {
  return (
    <>
      <Form method="POST" action="/drinks" className="Form" >
        <div className="container">
          <h1 className="res">Create a Drink</h1>
          <div>
            <label className="Label" htmlFor="title">
              title
            </label>
            <input
              className="Input email"
              type="text"
              name="title"
              id="title"
            ></input>
          </div>
          <div>
            <label className="Label" htmlFor="description">
              Description
            </label>
            <textarea
              className="textWidth"
              name="description"
              id=""
              cols=""
              rows="10"
            ></textarea>
          </div>
          <div>
            <label className="Label" htmlFor="img">
              Image: url
            </label>

            <input
              className="Input"
              type="text"
              name="img"
              id="title"
            ></input>

           
          </div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();
  console.log(data.get('img'));

  const info = {
    title: data.get('title'),
    description: data.get('description'),
    img : data.get('img')
  }

  const response = await fetch('http://localhost:3001/drinks',{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(info)
  } )

    if(response.ok){
      return redirect('/');
    }

}


