import {computed, defineComponent} from "vue"

const InputVue = defineComponent({
    name: "InputVue",
    
    setup(props,{slots,attrs}){
        return ()=>{
            return(
                <>
                    <label class="relative">
                        <input class="vz-input" ></input>
                        <span class="absolute left-0 top-[0.1rem] mx-2 translate-y-4 transition duration-200">Username</span>
                    </label>
                </>
            )
        }
    }
})

type InputType = InstanceType<typeof InputVue>

export {InputVue,InputType}