import {h} from "vue"
import formValidate from "@/modules/formvalidate"
import addWarningText from "@/directives/validate/addWarningText"

//With Text Input
const handleTextValueChange = (e:any,warningText:HTMLParagraphElement)=>{
    
    
    // const warningTextHolder = addWarningText(e.target,info)
    // e.target.after(warningTextHolder)
    const validateModel = new formValidate({type:e.target.type,value:e.target.value})
    // const warningText = document.getElementById("form-warning-text")

    //Check for the min/maxLength 
    if(!validateModel.validateMinLength(e.target.value)){    
        warningText.classList.add("hidden")
    }else{
        warningText.classList.remove("hidden")
    }
}

//With Email Input
const handleEmailValueChange = (e:any,info:any)=>{
    const warningTextHolder = addWarningText(e.target,info)
    
}


export const InputValidate = {
    mounted(el:HTMLInputElement,binding:any){

        //Add the warning text before the test, only reveal when input event start, include add("Hidden")
        const validateModel = new formValidate({type:el.type,value:el.value})
        const warningText = addWarningText(el,binding)
        el.after(warningText)
        warningText.classList.add("hidden")

        switch (el.type) {
            case "text":
                // el.after(warningP)
                el.addEventListener('input', (event)=>handleTextValueChange(event,warningText))
                break
            case "email":
                el.addEventListener('input',(event)=>handleEmailValueChange(event,binding)) 
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