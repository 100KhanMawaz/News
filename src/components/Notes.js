import { getByTitle } from '@testing-library/react'
import React,{useContext,useEffect} from 'react'
import notecontext2 from '../context/NoteContext2'
import './notes.css'
function Notes(props) {
   const a=useContext(notecontext2);
   const {note,setNote} = a;
  return (
   <>
   <div className="con">
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Title</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="btn btn-primary mx-2">ReadNotes</div>
<div className="btn btn-primary">AddNotes</div>
<h1>Preview</h1>
{a.note.map((A)=>{
<p>{A.note.title}</p>
})}
</div>
   </>
  )
}

export default Notes