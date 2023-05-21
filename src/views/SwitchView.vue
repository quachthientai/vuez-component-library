<script>
    import Switch from '@/components/Forms/Switch.vue';
    export default{
        name: 'SwitchView',
        components:{
            Switch
        }
    }
</script>
    <template>
        
        <Switch onStateText="ON" offStateText="OFF" switchClass="switch switch-danger"></Switch>

        <Switch onStateIcon="mingcute:lock-line"  offStateIcon="mingcute:unlock-line" switchClass="switch switch-danger"></Switch>
    </template>
<script>
</script>

