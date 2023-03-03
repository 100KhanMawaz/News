import React,{useState} from 'react';
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
    const s1={
        "name":"Khan",
        "Class":"B.tech"
    }
    const [state, setstate] = useState(s1);
    const update=()=>{
        setInterval(() => {
            setstate({
                "name":"Mawaz",
                "class":"B.tech2"
            })
        }, 2000);
    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;