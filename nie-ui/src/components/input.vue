<template>
  <div class="ne-input" :class="{ 'ne-input_suffix': showSuffix }">
    <input
      class="ne-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      :name="name"
      :value="value"
      @input="handleInput"
    />
    <span class="ne-input_suffix">
      <i
        class="on-input_icon ne-icon-cancel-circle"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="on-input_icon ne-icon-checkmark"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "NeInput",
  data() {
    return {
      // 显示是否显示密码框
      passwordVisible: false,
    };
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e) {
      // console.log(e);
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
};
</script>

<style lang="scss" scoped>
.ne-input {
  // width: 100%;
  width: 30%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .ne-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.ne-input_suffix {
  .ne-input_inner {
    padding-right: 30px;
  }
  .ne-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>