<script>
    import Checkbox from '@/components/Forms/Checkbox.vue';
    import Switch from '@/components/Forms/Switch.vue';
    export default{
        name: 'CheckboxView',
        components:{
            Checkbox,
            Switch
        }
    }
</script>
    <template>
      <div class="ml-2">
         <Checkbox checkboxClass="checkbox checkbox-primary"></Checkbox>
         <Checkbox checkboxClass="checkbox checkbox-secondary"></Checkbox>
         <Checkbox checkboxClass="checkbox checkbox-warning"></Checkbox>
         <Checkbox checkboxClass="checkbox checkbox-info"></Checkbox>
         <Checkbox checkboxClass="checkbox checkbox-success"></Checkbox>
         <Checkbox checkboxClass="checkbox checkbox-danger"></Checkbox>
         <!-- <Switch class="mr-2" switchClass="switch switch-primary"></Switch> -->
      </div>
        
    </template>
<script>
</script>

