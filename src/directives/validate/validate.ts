import {h} from "vue"
import formValidate from "@/modules/formvalidate"
const handleValueChange = (e:any)=>{

    const validateModel = new formValidate({type:e.target.type,value:e.target.value})
    const warningText = document.getElementById("form-warning-text")

    if(!validateModel.validateMinLength(e.target.value)){    
        warningText.classList.add("hidden")
    }else{
        warningText.classList.remove("hidden")
    }
}

export const InputValidate = {
    mounted(el:HTMLInputElement,binding:any){
        const warningP = document.createElement("p")
        //Will have binding statement
        const warningPText = document.createTextNode("Must be larger than 3")

        //Fix it so it could become dynamic
        warningP.appendChild(warningPText)
        warningP.setAttribute("id", "form-warning-text")

        //Binding format could include
        
        
        console.log(binding.value.statement)
        switch (el.type) {
            case "text":
                el.after(warningP)
                el.addEventListener('input', handleValueChange)
                
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