import React,{useState,createContext, useEffect} from 'react';
import {DiCss3,DiJavascript1,DiPython,DiDart,DiJava,DiJqueryLogo} from 'react-icons/di'
import {SiJson} from 'react-icons/si'

export const context = createContext({})

function MainContext(props) {

    const [value,setValue] = useState(true);

    const handleSwitch = ()=>{
      setValue((prevState)=>!prevState)
    };
    const icons = {
      css: DiCss3,
      javascript: DiJavascript1,
      python: DiPython,
      dart: DiDart,
      java:DiJava,
      json:SiJson,
      jquer:DiJqueryLogo
  };

    useEffect(()=>{
        const html = document.querySelector('html');
        if(value){
             html.classList.add('dark')
        }else{
            html.classList.remove('dark')
        }
    },[value])

 
   
    const values = {
        value,
        icons,
        handleSwitch
    }
  return (
    <context.Provider value={values} >{props.children}</context.Provider>
  )
}

export default MainContext