import {h} from "vue"
import formValidate from "@/modules/formvalidate"
const handleValueChange = (e:any)=>{

    const validateModel = new formValidate({type:e.target.type,value:e.target.value})
    console.log(validateModel.validateMinLength(e.target.value))
    // //event.target.value -> handle value
    // //event.target -> point to the ref target
    // const warningP = document.createElement("p")
    // const warningPText = document.createTextNode("Must be larger than 3")
    // warningP.appendChild(warningPText)
    // if(e.target.value.length < 3){
    //     console.log('must be larger than 3')
    //     e.target.after(warningP)
    // }else{
    //     e.target
    // }
}

export const InputValidate = {

    

    mounted(el:HTMLInputElement){
        console.log(el.type)
        console.log(el.value)
        switch (el.type) {
            case "text":
                el.addEventListener('input', handleValueChange)    
                break;
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

    }
}