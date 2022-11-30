import React, { useRef, useContext, useEffect } from "react";
import MyDataProvider from "./dataprovider";

function Nikos(){
    // Upon rendering
    const {Users, setUsers, Products, setProducts} = useContext(MyDataProvider);
    useEffect(() => {
        fetch("/users", {
            method: 'GET',
            headers: { 'x_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im5pa29zIiwiZXhwIjoxNjY5ODg2MjM0fQ.v_4liAIP7g8cdkZozq8HiWnau48kX6AIZ4IzUVAxSIY',
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': 'http://localhost:3000/initialization'
        }
        }).then(function (response) {
            console.log(response);
            return response.json();
          })
          .then((data)=> {
          console.log(data);
          setUsers(data.data);
          setProducts(data.data[0].lastName);
          });
    }, []);
    return <div><ol>{Users.map((el) => { return <li>{el.firstName}</li>})}</ol></div>;
}

export default Nikos;