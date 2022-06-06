<template>
  <button
    class="ne-button"
    :class="[
      `ne-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="`ne-icon-${icon}`"></i>
    <!-- 当我们没有传入插槽的时候 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "NeButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    // console.log(this.$slots);
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

 <style lang="scss" scoped>
.ne-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
//type
.ne-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.ne-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.ne-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.ne-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.ne-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}

// 朴素按钮样式
.ne-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.ne-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.ne-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.ne-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.ne-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.ne-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

//round
.ne-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

//圆形按钮
.ne-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

//图像和文字之间空开
.ne-button [class*="ne-icon-"] + span {
  margin-left: 5px;
}

// 禁用
.ne-button.ne-button.is-disabled .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(148, 146, 146, 0.39);
  left: 0;
  top: 0;
  box-shadow: 2px 2px 3px rgba(216, 213, 213, 0.3);
  border-radius: 4px;
  z-index: 100;
}

.ne-button.is-disabled {
  cursor: no-drop;
  &:hover {
    background-color: pink;
  }
}
</style>
