import formValidate from "../../modules/formvalidate"
import { DirectiveBinding } from "vue"

const addWarningText = (el:HTMLInputElement,validateModel:formValidate)=>{

    //create warning <p> tag
    const warningP = document.createElement("p")

    
    
    //Warning text
    let warningPText:Text

    // switch (el.type){

    //     case "text":
    //         //Add the text into warning <p> tag
    //         warningPText = document.createTextNode("Must be larger than 3")

    //         //Fix it so it could become dynamic
    //         warningP.appendChild(warningPText)

    //         //break
    //         break
    //     case "email":
    //         //Add the text (for email validation) into warning <p> tag   
    //         warningPText = document.createTextNode("Wrong format")
    //         warningP.appendChild(warningPText)
            
    //         //break
    //         break
    //     case "date":
    //         warningPText = document.createTextNode("Invalid Date")
    //         warningP.appendChild(warningPText)
    //         break
    // }
    warningP.classList.add("hidden")
    return warningP
}

export default addWarningText