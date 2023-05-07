<script>
   import Button from '@/components/Button/Button.vue'
   
   export default {
      name: 'ButtonView',
      components: {
        Button
      }
   }
</script>

<template>
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-primary" class="mr-2" text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-secondary" class="mr-2" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-danger" class="mr-2" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-warning" class="mr-2" text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-info" class="mr-2" text="Info" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-success" class="mr-2" text="Success" iconPosition="left" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-primary" :isLoading="true" class="mr-2" text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-secondary" :isLoading="true"  class="mr-2" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-danger" :isLoading="true"  class="mr-2" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-warning" :isLoading="true"  class="mr-2" text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-info" :isLoading="true"  class="mr-2" text="Info" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-success" :isLoading="true"  class="mr-2" text="Success" iconPosition="left" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn rounded btn-primary" class="mr-2" text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-secondary" class="mr-2" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-danger" class="mr-2" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-warning" class="mr-2" text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-info" class="mr-2" text="Info" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-success" class="mr-2" text="Success" iconPosition="left" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-primary" :isDisabled="true" class="mr-2" text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-secondary" :isDisabled="true" class="mr-2" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-danger" :isDisabled="true" class="mr-2" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-warning" :isDisabled="true" class="mr-2" text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-info" :isDisabled="true" class="mr-2" text="Info" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-success" :isDisabled="true" class="mr-2" text="Success" iconPosition="left" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-outline-primary" class="mr-2" text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-secondary" class="mr-2" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-danger" class="mr-2" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-warning" class="mr-2" text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-info" class="mr-2" text="Info" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-success" class="mr-2" text="Success" iconPosition="left" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-outline-primary" :isLoading="true" class="mr-2" text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-secondary" :isLoading="true"  class="mr-2" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-danger" :isLoading="true"  class="mr-2" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-warning" :isLoading="true"  class="mr-2" text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-info" :isLoading="true"  class="mr-2" text="Info" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-success" :isLoading="true"  class="mr-2" text="Success" iconPosition="left" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn rounded btn-outline-primary" class="mr-2" text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-secondary" class="mr-2" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-danger" class="mr-2" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-warning" class="mr-2" text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-info" class="mr-2" text="Info" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-success" class="mr-2" text="Success" iconPosition="left" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-outline-primary" :isDisabled="true" class="mr-2" text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-secondary" :isDisabled="true" class="mr-2" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-danger" :isDisabled="true" class="mr-2" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-warning" :isDisabled="true" class="mr-2" text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-info" :isDisabled="true" class="mr-2" text="Info" iconPosition="left" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-success" :isDisabled="true" class="mr-2" text="Success" iconPosition="left" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn rounded btn-primary" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-secondary" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-danger" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-warning" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-info" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-success" class="mr-2" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn rounded btn-outline-primary" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-secondary" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-danger" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-warning" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-info" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-success" class="mr-2" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-icon-circle btn-primary" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-secondary" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-danger" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-warning" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-info" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-success" class="mr-2" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-icon-circle btn-outline-primary" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-outline-secondary" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-outline-danger" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-outline-warning" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-outline-info" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-outline-success" class="mr-2" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-sm btn-info" class="mr-2" text="Small" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-info" class="mr-2" text="regular" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-lg btn-info" text="large" class="mr-2" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-sm rounded btn-info" class="mr-2" text="Small" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-info" class="mr-2" text="regular" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-lg btn-info" text="large" class="mr-2" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-sm btn-outline-info" class="mr-2" text="Small" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-outline-info" class="mr-2" text="regular" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-lg btn-outline-info" text="large" class="mr-2" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-sm rounded btn-outline-info" class="mr-2" text="Small" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-outline-info" class="mr-2" text="regular" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn rounded btn-lg btn-outline-info" text="large" class="mr-2" icon="ph:envelope-bold"></Button>
   </div>
   
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-icon-circle btn-sm btn-outline-info" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-outline-info" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-lg btn-outline-info" class="mr-2" icon="ph:envelope-bold"></Button>
   </div>
 
   <div class="flex justify-start mt-2">
     <Button btnClass="btn btn-icon-circle btn-sm btn-info" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-info" class="mr-2" icon="ph:envelope-bold"></Button>
     <Button btnClass="btn btn-icon-circle btn-lg btn-info" class="mr-2" icon="ph:envelope-bold"></Button>
   </div>
 </template>

<style lang="scss"></style>