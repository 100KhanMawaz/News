import React, {useState} from 'react';
import notecontext2 from './NoteContext2';

function NoteState2(props) {
  n1=[
      {
        "title":"Hey Babey",
        "description": "acaca a c ada da  d qwde fw v fb eg w casx ax er gt huj  sd c xqs q eqw d qdq as f"
      },

      {
        "title":"Hey adnaan",
        "description": "acaca a c ada da  d qwde fw v fb eg w casx ax er gt huj  sd c xqs q eqw d qdq as f"
      },

      {
        "title":"Hey Shaban",
        "description": "acaca a c ada da  d qwde fw v fb eg w casx ax er gt huj  sd c xqs q eqw d qdq as f"
      }
    ]
  
 const [note, setnote] = useState(n1);
  return (
    <notecontext2.Provider value={{note,setnote}}>
        {props.children}
    </notecontext2.Provider>
  )
}

export default NoteState2