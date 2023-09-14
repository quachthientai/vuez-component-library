const handleValueChange = (e:any)=>{
    //event.target.value -> handle value
    //event.target -> point to the ref target
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