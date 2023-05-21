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
        <!-- <Switch></Switch> -->
        <label class="switch switch-warning">
            <input @change="onChange" class="switch__input" type="checkbox">
            <span class="switch__slider round"></span>
        </label>
    </template>
<script>
</script>