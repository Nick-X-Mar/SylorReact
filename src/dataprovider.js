import React from "react";

const MyDataProvider = new React.createContext({Users: [], setUsers: () => {}, Products: [], setProducts: () => {}}); // empty js array //Provider

export default MyDataProvider;