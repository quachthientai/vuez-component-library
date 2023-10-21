import formValidate from "../../modules/formvalidate"
import { DirectiveBinding } from "vue"

const addWarningText = (el:HTMLInputElement,binding:DirectiveBinding)=>{

    //create warning <p> tag
    const warningP = document.createElement("p")

    //Extract binding values from directive
    const bindingValues:{
        statement: string,
        minLength: number,
        maxLength: number,
        condition?: any
    } = {
        statement:binding.value.statement,
        minLength: binding.value.minLength,
        maxLength: binding.value.maxLength,
        condition: binding.value.condition
    }

    //set up the form module based on the input details
    const formModule = new formValidate({type:el.type, value:el.value})
    formModule.setMinLength(bindingValues.minLength)
    formModule.setMaxLength(bindingValues.maxLength)
    formModule.setStatement(bindingValues.statement)
    
    //Warning text
    let warningPText:Text

    switch (el.type){
        case "text":
            //Add the text into warning <p> tag
            warningPText = document.createTextNode("Must be larger than 3")

            //Fix it so it could become dynamic
            warningP.appendChild(warningPText)

            //break
            break
        case "email":
            //Add the text (for email validation) into warning <p> tag   
            warningPText = document.createTextNode("Wrong format")
            warningP.appendChild(warningPText)
            
            //break
            break
        case "date":
            warningPText = document.createTextNode("Invalid Date")
            warningP.appendChild(warningPText)
            break
    }
    
    return warningP
}

export default addWarningText