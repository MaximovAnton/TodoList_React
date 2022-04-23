import React, {useEffect, useRef, useState} from "react";
import s from './Message.module.css'

const PlusOne = (props) => {

    let [number, setNumber] = useState(0)

    useEffect(() => {
        localStorage.getItem('number', JSON.parse(number))
        return function(){
           localStorage.setItem('number', JSON.stringify(number)) 
        }
    }, [number])

    const fn = () => {
        setNumber((n) => n + 1)
    }

    const clear = () => {
        setNumber(number = 0)
    }


    let [input, setInput] = useState('')
    let inputMessage = useRef() 

    const a = () => {
        console.log(inputMessage.current.value)
    }
    
    return(
        <div className={s.message}>
            {number}
            <button onClick={fn}>Plus one</button>
            <button onClick={clear}>Clear</button>
            <div>
               {input} 
            </div>
            
            <div>
                <input type="text" onChange={(event) => {setInput(event.target.value)}}/>
            </div>
            <div>
                <input type="text" ref={inputMessage} onChange={a}/>
            </div>
        </div>
    )
}

export default PlusOne