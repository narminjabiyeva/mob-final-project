import React, {useState} from 'react';
import {AppLoading} from "expo";
import { Provider }  from  "react-redux"

import {loadFonts} from "./styles/fonts";

import  store from "./store"
import  { RootNav } from "./navigation/RootNav"

export default function App() {

  const [loaded,setLoaded] = useState(false);
  if(!loaded){
    return <AppLoading
        startAsync={loadFonts}
        onFinish={()=> setLoaded(true)}
        onError={()=>console.log("rejected")}
    />
  }

  return  <Provider store={store}>
            <RootNav/>
         </Provider>


}
