import React,{useState,createContext, useEffect} from 'react';
import {DiCss3,DiJavascript1,DiPython,DiDart} from 'react-icons/di'

export const context = createContext({})

function MainContext(props) {

    const [value,setValue] = useState(true);

    const handleCheckbox = ()=>{
      setValue((prevState)=>!prevState)
    };




    useEffect(()=>{
        const html = document.querySelector('html');
        if(value){
             html.classList.add('dark')
        }else{
            html.classList.remove('dark')
        }
    },[value])

     const icons = {
      css: DiCss3,
      javascript: DiJavascript1,
      python: DiPython,
      dart: DiDart
  };
   
    const values = {
        value,
        icons,
        handleCheckbox
    }
  return (
    <context.Provider value={values} >{props.children}</context.Provider>
  )
}

export default MainContext