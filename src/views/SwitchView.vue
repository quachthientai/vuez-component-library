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
        <div class="mt-2 ml-2">
            <Switch class="mr-2" switchClass="switch switch-primary"></Switch>
            <Switch class="mr-2" switchClass="switch switch-secondary"></Switch>
            <Switch class="mr-2" switchClass="switch switch-info"></Switch>
            <Switch class="mr-2" switchClass="switch switch-success"></Switch>
            <Switch class="mr-2" switchClass="switch switch-warning"></Switch>
            <Switch class="mr-2" switchClass="switch switch-danger"></Switch>
        </div>

        <div class="mt-2 ml-2">
            <Switch class="mr-2" :isDisabled="true" switchClass="switch switch-primary"></Switch>
            <Switch class="mr-2" :isDisabled="true" switchClass="switch switch-secondary"></Switch>
            <Switch class="mr-2" :isDisabled="true" switchClass="switch switch-info"></Switch>
            <Switch class="mr-2" :isDisabled="true" switchClass="switch switch-success"></Switch>
            <Switch class="mr-2" :isDisabled="true" switchClass="switch switch-warning"></Switch>
            <Switch class="mr-2" :isDisabled="true" switchClass="switch switch-danger"></Switch>
        </div>

        <div class="mt-2 ml-2">
            <Switch class="mr-2" onStateText="ON" offStateText="OFF" switchClass="switch switch-primary"></Switch>
            <Switch class="mr-2" onStateText="ON" offStateText="OFF" switchClass="switch switch-secondary"></Switch>
            <Switch class="mr-2" onStateText="ON" offStateText="OFF" switchClass="switch switch-info"></Switch>
            <Switch class="mr-2" onStateText="ON" offStateText="OFF" switchClass="switch switch-success"></Switch>
            <Switch class="mr-2" onStateText="ON" offStateText="OFF" switchClass="switch switch-warning"></Switch>
            <Switch class="mr-2" onStateText="ON" offStateText="OFF" switchClass="switch switch-danger"></Switch>
        </div>

        <div class="mt-2 ml-2">
            <Switch class="mr-2" onStateIcon="mingcute:lock-line"  offStateIcon="mingcute:unlock-line" switchClass="switch switch-primary"></Switch>
            <Switch class="mr-2" onStateIcon="mingcute:lock-line"  offStateIcon="mingcute:unlock-line" switchClass="switch switch-secondary"></Switch>
            <Switch class="mr-2" onStateIcon="mingcute:lock-line"  offStateIcon="mingcute:unlock-line" switchClass="switch switch-info"></Switch>
            <Switch class="mr-2" onStateIcon="mingcute:lock-line"  offStateIcon="mingcute:unlock-line" switchClass="switch switch-success"></Switch>
            <Switch class="mr-2" onStateIcon="mingcute:lock-line"  offStateIcon="mingcute:unlock-line" switchClass="switch switch-warning"></Switch>
            <Switch class="mr-2" onStateIcon="mingcute:lock-line"  offStateIcon="mingcute:unlock-line" switchClass="switch switch-danger"></Switch>
        </div>

        
    </template>
<script>
</script>

