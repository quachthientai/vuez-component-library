import {h,DirectiveBinding} from "vue"
import formValidate from "@/modules/formvalidate"
import addWarningText from "@/directives/validate/addWarningText"
//10-20-23 *Refactor* add validate function =
//10-20-23 *Fix* Type checking for event
// (e.target as HTML Input Element)

//With Text Input
const handleTextValueChange = (e:any,warningText:HTMLParagraphElement)=>{
    console.log(typeof e)
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
}

const handleDateValueChange = (e:any,warningText?:HTMLParagraphElement)=>{
    const validateModel = new formValidate({type:e.target})
    console.log(e.target.value)

}


export const InputValidate = {
    mounted(el:HTMLInputElement,binding:DirectiveBinding){

        //Conisder if we should pass binding into event listener
        
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
                el.addEventListener('input',(event)=>handleDateValueChange(event,warningText))                
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