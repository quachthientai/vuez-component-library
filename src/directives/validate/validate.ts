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
const handleTextValueChange = (el:HTMLInputElement,warningP:HTMLParagraphElement,binding:DirectiveBinding)=>{
    const validateModel = new formValidate({...binding.value,value:el.value})
    validateModel.value = el.value
    let warningText:string


    if(!validateModel.validateMinLength()){
        warningText = "Must be larger than 3"
    }

    if(!validateModel.validateMaxLength()){
        warningText = "Must be smaller than 100"
    }

    console.log(validateModel.value.length)

    warningP.textContent = warningText  

    if(!validateModel.validateMinLength() || !validateModel.validateMaxLength()){
        warningP.classList.remove("hidden")
    }else{
        warningP.classList.add("hidden")
    }
    

}

//With Email Input
const handleEmailValueChange = (el:HTMLInputElement,warningP:HTMLParagraphElement,binding:DirectiveBinding)=>{
    const validateModel = new formValidate({...binding.value,value:el.value})
    let warningText:string
    if(!validateModel.validateEmail()){
        warningText = "Email is not valid"
    }

    warningP.textContent = warningText
    if(!validateModel.validateEmail()){
        warningP.classList.remove("hidden")
    }else{
        warningP.classList.add("hidden")
    
    }
}

const handleDateValueChange = (el:HTMLInputElement,warningP:HTMLParagraphElement,binding:DirectiveBinding)=>{
    const validateModel = new formValidate({...binding.value,value:el.value})
    let warningText:string
    if(!validateModel.validateMinDate()){
        warningText = "Date must be larger"
    }

    if(!validateModel.validateMaxDate()){
        warningText = "Date must be smaller"
    }

    console.log(validateModel.validateMaxDate())


    warningP.textContent = warningText
    if(!validateModel.validateMinDate() || !validateModel.validateMaxDate()){
        warningP.classList.remove("hidden")
    }else{
        warningP.classList.add("hidden")
    
    }

    
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
                el.addEventListener('input',(event)=>handleEmailValueChange(el,warningP,binding)) 
                break;
            case "date":
                el.addEventListener('input',(event)=>handleDateValueChange(el,warningP,binding))                
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