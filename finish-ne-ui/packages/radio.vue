<template>
  <label class="ne-radio" :class="{ 'is-checked': label == model }">
    <span class="ne-radio_input">
      <span class="ne-radio_inner"></span>
      <input
        type="radio"
        class="ne-radio_original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="ne-radio_label"
      ><slot></slot>
      <template v-if="!$slots.default">{{ label }}</template></span
    >
  </label>
</template>

<script>
export default {
  name: "NeRadio",
  props: {
    label: {
      type: [String, Boolean, Number],
      default: "",
    },
    value: null,
    name: { type: String, default: "" },
  },
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 触发父组件的input事件
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    // 用于判断radio是否被radioGroup包裹
    isGroup() {
      return !!this.RadioGroup;
    },
  },
  watch: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.ne-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .ne-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ne-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .ne-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .ne-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.ne-radio.is-checked {
  .ne-radio_input {
    .ne-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .ne-radio_label {
    color: #409eff;
  }
}
</style>