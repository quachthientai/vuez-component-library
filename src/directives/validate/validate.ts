import {h} from "vue"
import formValidate from "@/modules/formvalidate"
import addWarningText from "@/directives/validate/addWarningText"

//With Text Input
const handleTextValueChange = (e:any,warningText:HTMLParagraphElement)=>{
    

    const validateModel = new formValidate({type:e.target.type,value:e.target.value})
    
    if(!validateModel.validateMinLength(e.target.value)){    
        warningText.classList.add("hidden")
    }else{
        warningText.classList.remove("hidden")
    }
}

//With Email Input
const handleEmailValueChange = (e:any,warningText:HTMLParagraphElement)=>{
    const validateModel = new formValidate({type:e.target.type,value:e.target.value})

    if(validateModel.validateEmail(e.target.value)){
        warningText.classList.add("hidden")
    }else{
        warningText.classList.remove("hidden")
    }
    console.log(validateModel.validateEmail(e.target.value))

    
}


export const InputValidate = {
    mounted(el:HTMLInputElement,binding:any){

        //Add the warning text before the test, only reveal when input event start, include add("Hidden")
        // const validateModel = new formValidate({type:el.type,value:el.value})
        const warningText = addWarningText(el,binding)
        el.after(warningText)
        warningText.classList.add("hidden")

        switch (el.type) {
            case "text":
                // el.after(warningP)
                el.addEventListener('input', (event)=>handleTextValueChange(event,warningText))
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