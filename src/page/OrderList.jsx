import React from 'react'
import {useLoaderData} from 'react-router'
import {useNavigate, useSubmit, redirect } from "react-router-dom";

import "./OrderList.css";

export function OrderList() {
  const submit = useSubmit();

   const data = useLoaderData();


   function pop(id){
      submit({ val: id }, { method: "post"});
   }

   var userDetails = "";
   var userDetails = data.map((item) => {
     return (
       <tr key={item.idOrders}>
         <td>{item.idOrders}</td>
         <td>{item.Title}</td>
         <td>{item.OrderTime}</td>

         <td>
           <button
             onClick={(event) => pop(item.idOrders)}
             className="btn btn-success"
           >
             Complete
           </button>
         </td>
       </tr>
     );
   });

  return (
    <>
    <div className="cont">
        <div className="col-md 12">
          <div className="card">
            <div className="card-header">
              <h4>
                Orders
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Drink Name </th>
                    <th>Time</th>

                  </tr>
                </thead>
                <tbody>{userDetails}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}


export async function loader({request,params}){

  const response = await  fetch("http://localhost:3001/order", {
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

  const response = await  fetch("http://localhost:3001/ordercompletion", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info)
  });

  if(response.ok){
    return redirect('/order');
  }



}