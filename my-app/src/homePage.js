import React, { useRef, useContext, useEffect, useState } from "react";
import MyDataProvider from "./dataprovider";
import Nikos from "./try";
import Simos from "./simos";
function HomePage(){
    // Upon rendering
    const [Users, setUsers] = useState([]);
    const [Products, setProducts] = useState([]);
    const _props = {Users, setUsers, Products, setProducts};
    return <MyDataProvider.Provider value={_props}><Nikos></Nikos><Simos></Simos></MyDataProvider.Provider>;
}

export default HomePage;