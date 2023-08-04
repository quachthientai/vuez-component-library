<template>
    <div class="upload">
        <input type="file" @change="handeChange" >
    </div>
</template>

<script setup lang="ts">
  import { ref, reactive, computed, onMounted, useAttrs, useSlots, Ref, VueElement } from 'vue';
  interface uploadProps{
    type?:string
  }



  const props = defineProps<uploadProps>()

  //State Management (Reactivity)
  const file:Ref<File> = ref(null)
  const fileURL:Ref<string> = ref("")

  const handleClick = (ev:Event):void => {
    
  }

  const handeChange = (ev:HashChangeEvent):void =>{
    const file = ev.target.file[0]
    const fileURL = URL.createObjectURL(file)
  }

  const checkFile = (filename:string)=>{

    const fileType =  filename.substring(filename.lastIndexOf('.')+1, filename.length) || filename;

    let extension : string;

    switch (extension){
        case "png":{
            break;
        }
        case "doc":{
            break;
        }
        case "pdf":{
            break;
        }
        case "jpg":{
            break;
        }
        case "jpeg":{
            break;
        }
    }
  }

</script>

<style lang="scss" scoped>

</style>