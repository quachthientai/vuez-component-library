import {h} from "vue"
import formValidate from "@/modules/formvalidate"
import addWarningText from "@/directives/validate/addWarningText"

//With Text Input
const handleTextValueChange = (validateModule:formValidate,warningText:HTMLParagraphElement)=>{
    

    // const validateModel = new formValidate({type:e.target.type,value:e.target.value})
    //Working on whether shoudl we define module first or not
    if(!validateModule.validateMinLength(validateModule.value)){    
        warningText.classList.add("hidden")
    }else{
        warningText.classList.remove("hidden")
    }

    console.log(validateModule.value)
}

//With Email Input
const handleEmailValueChange = (e:any,warningText:HTMLParagraphElement)=>{
    const validateModel = new formValidate({type:e.target.type,value:e.target.value})

    if(validateModel.validateEmail(e.target.value)){
        warningText.classList.add("hidden")
    }else{
        warningText.classList.remove("hidden")
    }
}


export const InputValidate = {
    mounted(el:HTMLInputElement,binding:any){

        const validateModel = new formValidate({type:el.type, value:el.value})
        const inputValue = el.value
        const warningText = addWarningText(el,binding)
        el.after(warningText)
        warningText.classList.add("hidden")
        
        switch (el.type) {
            case "text":
                // el.after(warningP)
                el.addEventListener('input', (event)=>handleTextValueChange(validateModel,warningText))
                break
            case "email":
                el.addEventListener('input',(event)=>handleEmailValueChange(event,warningText)) 
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