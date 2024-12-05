import React, { useState } from 'react'
import "../styles/Edit-Create.css"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Api from '../axiosConfig';

function CreateTemplate() {
  const [templateData,setTemplateData] = useState({
    name:"",
    content:""
  });
  const router = useNavigate();

  function handleChange(event){
    setTemplateData({...templateData,[event.target.name]:event.target.value});
    console.log("data",{[event.target.name]:event.target.value})
  }
  async function handleSave(e){
    e.preventDefault();
    try{
      if(!templateData.name || !templateData.content ){ 
        return toast.error("All fields are mandatory!!");
      }
      // const validPattern = /^[a-zA-Z]$/;
      const validPattern =/^[A-Za-z\s]*$/;

      if(!validPattern.test(templateData.name)){
        return toast.error("Template name must be letters only");
      }
      if(templateData.name.length > 40){
          return toast.error("Template name can not be longer than 24 letters!");
      }
      if(templateData.name && templateData.content){
        const response = await Api.post('/template/create-template',{templateData});
        // const response = true;
        if(response.data.success){
          setTemplateData({
            name:"",
            content:""
          });
          toast.success("Template created Successfully");
          router('/template-library');
        }
        if(response?.data?.error){
          console.log("response.data.error",response?.data?.error);
          toast.error(response?.data?.error);
      }
      }else{
        toast.error("All fields are required");
        console.log("All fields are required");
      }
    }catch(error){
      toast.error(error?.response?.data?.error)
    }
  }

  return (
    <div className='fullPage'>
      <div className='back' onClick={()=>router('/')}>
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

export default CreateTemplate;
