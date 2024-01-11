<script lang="ts">
import { Radio } from '@/components/Radio/Radio';
import { RadioGroup } from '@/components/Radio/RadioGroup';
import { RadioModel } from '@/components/Radio/RadioType';

export default {
  name: 'RadioView',
  components: {
    Radio,
    RadioGroup,
  },
  data() {
    const radios : RadioModel[] = [
      { label: 'Banana', value: '1' },
      { label: 'Strawberry', value: '2' },
      { label: 'Rasberry', value: '3', color: 'danger', checked: true }
    ]
    return {
      radios,
    }
  }
}
</script>

<template>
  <div class="m-[150px]">
    <!-- <Radio value="2" label="Option 2"></Radio> -->
    <RadioGroup label="Fruits" :model="radios"></RadioGroup>
  </div>
  
  
  
  
  

</template>
