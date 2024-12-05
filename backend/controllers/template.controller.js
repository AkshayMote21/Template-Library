import Template from "../models/template.model.js";

export const CreateTemplate = async(req,res) => {
    try{
        const {content,name} = req.body.templateData;
        if(!content || !name){
           return res.json({success:false,error:"All fields are mandatory!!"});
        }
        const isnameExists = await Template.findOne({name});
        if(isnameExists){
           return res.json({success:false,error:"name already exists, please use another name !"});
        }
        
        const newTemplate = new Template({
            content,
            name,

        });
        await newTemplate.save();
        return res.json({success:true,message:"Template created succesfully"});
    }catch(error){
       return res.json({success:false,error :"Error at catch"});
    }
}

export const GetAllTemplates = async(req,res) => {

}

export const UpdateTemplate = async(req,res) => {

}