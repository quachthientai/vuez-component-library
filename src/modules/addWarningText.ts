import formValidate from "./formvalidate"

const addWarningText = (el:HTMLInputElement,binding:any)=>{
    const warningP = document.createElement("p")
    //Will have binding statement
    const warningPText = document.createTextNode("Must be larger than 3")

    //Fix it so it could become dynamic
    warningP.appendChild(warningPText)
    warningP.setAttribute("id", "form-warning-text")

    //Binding format could include
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

    return warningP
}

export default addWarningText