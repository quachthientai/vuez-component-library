import {h,DirectiveBinding} from "vue"
import formValidate from "@/modules/formvalidate"
import addWarningText from "@/directives/validate/addWarningText"
import { T } from "vitest/dist/types-94cfe4b4"


const visualControl = (condition:boolean, warningText:HTMLParagraphElement) => {
    
   
    if(condition){
        warningText.classList.add("hidden")
    }else{
        warningText.classList.remove("hidden")
    }
}

//With Text Input
const handleTextValueChange = (el:HTMLInputElement,warningP:HTMLParagraphElement,binding:DirectiveBinding)=>{
    const validateModel = new formValidate({...binding,value:el.value})
    validateModel.value = el.value
    let warningText:string
    
    if(validateModel.validateMinLength()){
        warningText = "Must be larger than 3"
    }

    warningP.textContent = warningText  

    if(!validateModel.validateMinLength()){
        warningP.classList.add("hidden")
    }else{
        warningP.classList.remove("hidden")
    }
    
}

//With Email Input
const handleEmailValueChange = (e:InputEvent,warningText:HTMLParagraphElement)=>{
    const validateModel = new formValidate({type:(e.target as HTMLInputElement).type,value:(e.target as HTMLInputElement).value})

    visualControl(validateModel.validateEmail((e.target as HTMLInputElement).value), warningText)
}

const handleDateValueChange = (e:InputEvent,warningText?:HTMLParagraphElement)=>{
    const validateModel = new formValidate({type:(e.target as HTMLInputElement).type,value:(e.target as HTMLInputElement).value})
    
}


export const InputValidate = {
    mounted(el:HTMLInputElement,binding:DirectiveBinding){

        //10-30-2023
        //With text value, the onlything that we will take is max/minLength, format, max/minStatement
        //With email the onlything that we will take is format
        //With date the onlyvalue that we will take is max/minDate 
        //Conisder if we should pass binding into event listener
        
        const validateModel = new formValidate({...binding.value,value:el.value})
        const warningP = addWarningText(el,validateModel)
        el.after(warningP)
        
        switch (el.type) {
            case "text":
                // el.after(warningP)
                el.addEventListener('input', (event)=>handleTextValueChange(el,warningP,binding))
                break
            case "email":
                el.addEventListener('input',(event)=>handleEmailValueChange(event as InputEvent,warningText)) 
                break;
            case "date":
                el.addEventListener('input',(event)=>handleDateValueChange(event as InputEvent,warningText))                
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