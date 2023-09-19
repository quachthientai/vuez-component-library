class formValidate{
    private emailFormat:RegExp = new RegExp('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
    private zipCodeFormat:RegExp = new RegExp('^\d{5}(?:[-\s]\d{4})?$')
    private minLength:number = 3
    private maxLength:number = 100
    private creditCardsCollection:{
        americanExpress:RegExp
        dankort:RegExp,
        dinersClub:RegExp,
        dinersClubUS:RegExp,
        discover:RegExp,
        elo:RegExp,
        JCB:RegExp,
        laser:RegExp,
        maestro:RegExp,
        masterCard:RegExp,
        solo:RegExp,
        visa:RegExp,
        visaElectron:RegExp
    } = {
        
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