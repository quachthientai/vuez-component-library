import {h} from "vue"
import formValidate from "@/modules/formvalidate"
import addWarningText from "@/modules/addWarningText"
const handleValueChange = (e:any,info:any)=>{
    
    //Rename the variable - FIX
    //Calling addWarningText to generate a <p> tag
    const warningTextHolder = addWarningText(e.target,info)
    e.target.after(warningTextHolder)
    const validateModel = new formValidate({type:e.target.type,value:e.target.value})
    const warningText = document.getElementById("form-warning-text")

    //Check for the min/maxLength 
    if(!validateModel.validateMinLength(e.target.value)){    
        warningText.classList.add("hidden")
    }else{
        warningText.classList.remove("hidden")
    }

    
}



export const InputValidate = {
    mounted(el:HTMLInputElement,binding:any){
        
        switch (el.type) {
            case "text":
                // el.after(warningP)
                el.addEventListener('input', (event)=>handleValueChange(event,binding))
                
            case "email": 
                break;
            case "date":
                break;
            case "datetime":
                break;
            case "datetime-local":
                break;
            case "number":
                break;
            case "password":
                break;
        }

    },
    updated(el:HTMLInputElement) {

    },
}