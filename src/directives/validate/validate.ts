import {h,DirectiveBinding} from "vue"
import formValidate from "@/modules/formvalidate"
import addWarningText from "@/directives/validate/addWarningText"


const visualControl = (condition:boolean, warningText:HTMLParagraphElement) => {
    if(condition){
        warningText.classList.add("hidden")
    }else{
        warningText.classList.remove("hidden")
    }
}

//With Text Input
const handleTextValueChange = (e:InputEvent,warningText:HTMLParagraphElement)=>{
    const validateModel = new formValidate({type:(e.target as HTMLInputElement).type,value:(e.target as HTMLInputElement).value})

    visualControl(!validateModel.validateMinLength((e.target as HTMLInputElement).value), warningText)
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

        //Conisder if we should pass binding into event listener
        
        const warningText = addWarningText(el,binding)
        console.log(binding)
        el.after(warningText)
        warningText.classList.add("hidden")
        
        switch (el.type) {
            case "text":
                // el.after(warningP)
                el.addEventListener('input', (event)=>handleTextValueChange(event as InputEvent,warningText))
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