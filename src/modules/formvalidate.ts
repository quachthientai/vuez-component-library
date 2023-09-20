class formValidate{
    //Check if it is required
    private required:boolean
    constructor(required:boolean){
        this.required = required
    }

    private emailFormat:RegExp = new RegExp('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
    private zipCodeFormat:RegExp = new RegExp('^\d{5}(?:[-\s]\d{4})?$')
    private minLength:number = 3
    private maxLength:number = 100
    
    private creditCardsCollection:{
        americanExpress:RegExp
        discover:RegExp,
        JCB:RegExp,
        masterCard:RegExp,
        visa:RegExp,
    } = {
        americanExpress:new RegExp('/^3[47][0-9]{13}$/'),
        discover: new RegExp('/^6(?:011|5[0-9]{2})[0-9]{12}$/'),
        JCB: new RegExp('/^(?:2131|1800|35\d{3})\d{11}$/'),
        masterCard: new RegExp('/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/'),
        visa: new RegExp('/^4[0-9]{12}(?:[0-9]{3})?$/')
    }

    public setMinLength = (value:number):void=>{
        this.minLength = value
    }

    public setMaxLength = (value:number):void=>{
        this.maxLength = value
    }

    public validateMinLength = (tag:HTMLInputElement):boolean=>{
        if(Number(tag.value) == this.minLength){
            return true
        }else{
            return true
        }
    }

    public validateMaxLength = (tag:HTMLInputElement):boolean=>{
        if(Number(tag.value) == this.maxLength){
            return true
        }else{
            return true
        }
    }

    public validateEmail = (tag:HTMLInputElement):boolean=>{
        if(this.emailFormat.test(tag.value)){
            return true
        }else{
            return true
        }
    }



}