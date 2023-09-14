const handleValueChange = (e:any)=>{
    //event.target.value -> handle value
    //event.target -> point to the ref target
    if(e.target.value.length < 3){
        console.log('must be larger than 3')
        const warningP = document.createElement("p")
        const warningPText = document.createTextNode("Must be larger than 3")
        warningP.appendChild(warningPText)
        
        e.target.after(warningP)
    }
}

export const InputValidate = {
    mounted(el:HTMLInputElement){
        console.log(el.type)
        console.log(el.value)
        switch (el.type) {
            case "email":
                el.addEventListener('input',handleValueChange) //onInput update value in realtime 
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