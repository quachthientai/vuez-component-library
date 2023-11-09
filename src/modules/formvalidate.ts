class formValidate{
    //Construction values
    minLength:number = 3
    maxLength:number = 100
    format:RegExp
    type:string
    statement:string
    value: any
    minDate:string
    maxDate:string

    private required:boolean
    //10-20-23 *Refactor* make file "type.d.ts"
    constructor(requirements:{
        minLength?:number,
        maxLength?:number,
        format?:RegExp,
        type?:string,
        statement?:string,
        value?: string | number| RegExp
        minDate?: string,
        maxDate?:string
    }){

        this.minLength = requirements.minLength ? requirements.minLength : 3
        this.maxLength = requirements.maxLength ? requirements.maxLength : 100
        this.format = requirements.format 
        this.type = requirements.type
        this.statement = requirements.statement
        this.value = requirements.value
        this.minDate = requirements.minDate
        this.maxDate = requirements.maxDate
    }
    
    private emailFormat:RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    private zipCodeFormat:RegExp = new RegExp('^\d{5}(?:[-\s]\d{4})?$')
    
    
    
    private creditCardsCollection:{
        americanExpress:RegExp
        discover:RegExp,
        JCB:RegExp,
        masterCard:RegExp,
        visa:RegExp,
    } = {
        americanExpress:/^3[47][0-9]{13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
        masterCard:/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/
    }

    //Set length for the input
    public setMinLength = (value:number):void=>{
        this.minLength = value
    }

    public setMaxLength = (value:number):void=>{
        this.maxLength = value
    }

    //Setup the output statement
    public setStatement = (statement:string):void=>{
        this.statement = statement
    }
    
    
    //Check for min length of input !!10-18-23 Besure to combine 2 of them
    public validateMinLength = ():boolean=>{
        if(this.value.length < this.minLength){
            return false
        }else{
            return true
        }
    }

    //Check for max length of input
    public validateMaxLength = ():boolean=>{
        if(this.value.length > this.maxLength){
            return false
        }else{
            return true
        }
    }


    //Check for the format of email
    public validateEmail = ():boolean=>{
        if(this.emailFormat.test(this.value)){
            return true
        }else{
            return false
        }
    }
    
    //Check if value is larger than minDate
    public validateMinDate = ():boolean=>{
        if(Date.parse(this.value) > Date.parse(this.minDate)){
            return true
        }else{
            return false
        }
    }

    //Check if value is smaller than maxDate
    public validateMaxDate = ():boolean=>{
        if(Date.parse(this.value) < Date.parse(this.maxDate)){
            return true
        }else{
            return false
        }
    }

    //Check for the format of credit/debit card:
    public validateCard = (value:string, type:string):boolean=>{
        switch(type.toLowerCase()){
            case'american express':
                if(this.creditCardsCollection.americanExpress.test(value)){
                    return true
                }
                break
            case 'discover':
                if(this.creditCardsCollection.discover.test(value)){
                    return true
                }
                break
            case 'jcb':
                if(this.creditCardsCollection.JCB.test(value)){
                    return true
                }
                break
            case 'mastercard':
                if(this.creditCardsCollection.masterCard.test(value)){
                    return true
                }
                break
            case 'visa':
                if(this.creditCardsCollection.visa.test(value)){
                    return true
                }
                break
            default:
                //10-20-23 *Add toast*
                window.alert('Invalid Card')
        }
    }

}

export default formValidate