import {computed, defineComponent} from "vue"

const InputVue = defineComponent({
    name: "Input",
    props:{},
    setup(props,{slots,attrs}){
        return ()=>{
            return(
                <>
                    <div>
                        Hello
                    </div>
                </>
            )
        }
    }
})

type InputType = InstanceType<typeof InputVue>

export {InputVue,InputType}