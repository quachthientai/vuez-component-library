const validation = ()=>{
    
}

export const InputValidate = {
    mounted(el:HTMLInputElement){
        console.log(el.type)
        console.log(el.value)
        switch (el.type) {
            case "email":
                if(el.value == ''){
                    console.log('null value')
                }
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