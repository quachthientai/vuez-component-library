<script>
   
    import Radio from '@/components/Forms/Radio.vue';
   export default {
      name: 'RadioView',
      components:{
        Radio
      }
   }
</script>

<template>
   <div>This is home view</div>
   <Radio class="radio" radioValue="1"></Radio>
   <Radio class="radio radio-primary" radioValue="1"></Radio>
   <Radio class="radio radio-secondary" radioValue="1"></Radio>
   <Radio class="radio radio-info" radioValue="1"></Radio>
   <Radio class="radio radio-warning" radioValue="1"></Radio>
   <Radio class="radio radio-danger" radioValue="1"></Radio>
   <Radio class="radio radio-success" radioValue="1"></Radio>
   
</template>

