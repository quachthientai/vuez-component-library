<script>
// import ButtonGroup from '@/components/Button/ButtonGroup.vue'

// import Button from '@/components/Button/Button.vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
export default {
  name: 'ButtonGroupView',
  components: {
    // ButtonGroup,
    // Button,
    Dropdown
  }
}
function hello() {
  console.log(1)
}
</script>

<template>
  <!-- <ButtonGroup
    option="default"
    class="btnGroup btnGroup-primary"
    :item-list="[{ text: 'text1', event: hello }, { text: 'text2' }, { text: 'text3' }]"
  ></ButtonGroup>
  <ButtonGroup
    option="default"
    class="btnGroup btnGroup-info"
    :item-list="[{ text: 'text1' }, { text: 'text2' }, { text: 'text3' }]"
  ></ButtonGroup>
  <ButtonGroup
    option="default"
    class="btnGroup btnGroup-warning"
    :item-list="[{ text: 'text1' }, { text: 'text2' }, { text: 'text3' }]"
  ></ButtonGroup>
  <br />

  <ButtonGroup
    option="default"
    class="btnGroup-pill btnGroup-primary"
    :item-list="[{ text: 'text1' }, { text: 'text2' }, { text: 'text3' }]"
  ></ButtonGroup>
  <ButtonGroup
    option="default"
    class="btnGroup-pill btnGroup-info"
    :item-list="[{ text: 'text1' }, { text: 'text2' }, { text: 'text3' }]"
  ></ButtonGroup>
  <ButtonGroup
    option="default"
    class="btnGroup-pill btnGroup-warning"
    :item-list="[{ text: 'text1' }, { text: 'text2' }, { text: 'text3' }]"
  ></ButtonGroup>
  <br />

  <ButtonGroup class="ms-3 mt-3" option="custom">
    <Button
      btnClass="btn btn-primary"
      text="Primary"
      iconPosition="right"
      icon="ph:envelope-bold"
    ></Button>
    <Button
      btnClass="btn btn-primary"
      text="Primary"
      iconPosition="right"
      icon="ph:envelope-bold"
    ></Button>
    <Button
      btnClass="btn btn-outline-warning"
      text="Warning"
      iconPosition="left"
      icon="ph:envelope-bold"
    ></Button>

    <Dropdown dropDownClass="dropdown dropdown-primary" text="dropdown">
      <template v-slot:dropdown-menu-slot>
        <ul class="dropdown__menu">
          <li class="dropdown__item">assa</li>
          <li class="dropdown__item">aaa</li>
          <li class="dropdown__item">aaazzz</li>
        </ul>
      </template>
    </Dropdown>
  </ButtonGroup> -->
</template>

<style lang="scss"></style>
