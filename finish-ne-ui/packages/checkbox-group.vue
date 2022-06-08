
<template>
  <div class="ne-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "NeCheckboxGroup",
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
  props: {
    value: {
      type: Array,
    },
  },
};
</script>
