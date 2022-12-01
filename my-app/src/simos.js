import React, { useRef, useContext, useEffect } from "react";
import MyDataProvider from "./dataprovider";

function Simos(){
    // Upon rendering
    const {Users, setUsers, Products, setProducts} = useContext(MyDataProvider);

    return <div><ul>{Users.map((el) => { return <li>{el.firstName} sadsad </li>})}</ul>{Products}</div>;
}

export default Simos;