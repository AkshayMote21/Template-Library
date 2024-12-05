import React, { useState } from 'react'
import "../styles/Edit-Create.css"
import { useNavigate } from 'react-router-dom';

function EditTemplate() {

  const [templateData,setTemplateData] = useState({
    name:"",
    content:""
  });
  const router = useNavigate();

  function handleChange(event){
    setTemplateData({...templateData,[event.target.name]:event.target.value})
  }
  async function handleSave(){

  }
  return (
    
    <div className='fullPage'>
      <div className='back'>
        <i class="fa-solid fa-arrow-left" style={{color: "#0000ff",marginRight:"5px"}}></i>
        Back
      </div>
      <div className='create'>Create</div>
      <div className='page'>
        <div className='card'>
          <p className='heading'>Create a template</p>
          <form>
            <label>Template Name</label><br/>
            <input type='text' name='name' onChange={handleChange} /><br/>
            <label>Template Content</label><br/>
            <input type='text' name='content' onChange={handleChange} /><br/>
            <button onClick={handleSave}>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}


export default EditTemplate;