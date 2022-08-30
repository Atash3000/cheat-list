import React,{useState,createContext, useEffect} from 'react'
export const context = createContext({})

function MainContext(props) {

    const [value,setValue] = useState(false)
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

 
    useEffect(()=>{
        const body = document.querySelector('body')
        body.classList.add('bg-white')
        body.classList.add("dark:bg-primary");

    },[])
   
    const values = {
        value,
        handleCheckbox
    }
  return (
    <context.Provider value={values} >{props.children}</context.Provider>
  )
}

export default MainContext