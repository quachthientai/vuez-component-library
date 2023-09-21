import formValidate from "@/modules/formvalidate"
// const handleValueChange = (e:any)=>{
//     //event.target.value -> handle value
//     //event.target -> point to the ref target
//     const warningP = document.createElement("p")
//     const warningPText = document.createTextNode("Must be larger than 3")
//     warningP.appendChild(warningPText)
//     if(e.target.value.length < 3){
//         console.log('must be larger than 3')
//         e.target.after(warningP)
//     }else{
//         e.target
//     }
// }

export const InputValidate = {

    const validateModule = new formValidate(true)

    mounted(el:HTMLInputElement){
        console.log(el.type)
        console.log(el.value)
        switch (el.type) {
            case "email":
                el.addEventListener('input') //onInput update value in realtime 
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