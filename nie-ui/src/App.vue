<template>
  <div id="app">
    <div class="row">
      <ne-button @click="visiable = true">1asD</ne-button>
      <!-- <ne-button @click="a" :plain="false" type="primary">1asD</ne-button>
      <ne-button :plain="false" type="success">1asD</ne-button>
      <ne-button :plain="false" type="info">1asD</ne-button>
      <ne-button :disabled="true" :plain="false" type="warning">1asD</ne-button>
      <ne-button :disabled="true" :plain="false" type="danger">1asD</ne-button> -->
    </div>

    <!-- <div class="row">
      <ne-button>1asD</ne-button>
      <ne-button :plain="true" type="primary">1asD</ne-button>
      <ne-button :plain="true" type="success">1asD</ne-button>
      <ne-button :plain="true" type="info">1asD</ne-button>
      <ne-button :plain="true" type="warning">1asD</ne-button>
      <ne-button :plain="true" type="danger">1asD</ne-button>
    </div>
    <div class="row">
      <ne-button :round="true">1asD</ne-button>
      <ne-button :round="true" :plain="true" type="primary">1asD</ne-button>
      <ne-button :round="true" :plain="true" type="success">1asD</ne-button>
      <ne-button :round="true" :plain="true" type="info">1asD</ne-button>
      <ne-button :round="true" :plain="true" type="warning">1asD</ne-button>
      <ne-button :round="true" :plain="true" type="danger">1asD</ne-button>
    </div>
    <div class="row">
      <ne-button icon="home" :circle="true">1asD</ne-button>
      <ne-button
        icon="home2"
        :circle="true"
        :round="true"
        :plain="true"
        type="primary"
      ></ne-button>
      <ne-button
        icon="location2"
        :circle="true"
        :round="true"
        :plain="true"
        type="success"
        >1asD</ne-button
      >
      <ne-button
        icon="plus"
        :circle="true"
        :round="true"
        :plain="true"
        type="info"
        >1asD</ne-button
      >
      <ne-button
        icon="checkmark"
        :circle="true"
        :round="true"
        :plain="true"
        type="warning"
        >1asD</ne-button
      >
      <ne-button :circle="true" :round="true" :plain="true" type="danger"
        >1asD</ne-button
      >
    </div> -->

    <!-- <ne-dialog title="提示谢谢谢谢"></ne-dialog> -->
    <ne-dialog
      title="提示谢谢谢谢"
      width="60%"
      top="5vh"
      :visiable.sync="visiable"
    >
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <template v-slot:footer>
        <ne-button @click="visiable = false">取消</ne-button>
        <ne-button @click="visiable = false" type="primary">确定</ne-button>
      </template>
    </ne-dialog>

    <ne-input
      placeholder="asfs"
      type="text"
      :disabled="false"
      v-model="username"
      :clearable="true"
    ></ne-input>
    <ne-input
      placeholder="asfs"
      type="password"
      :disabled="false"
      v-model="password"
      :showPassword="true"
    ></ne-input>
    <br />
    <ne-switch
      v-model="action"
      active-color="#13ce66"
      inactive-color="#ff4949"
      name="username"
    ></ne-switch>
    <br />
    <ne-radio v-model="gender" label="0">男</ne-radio>
    <ne-radio v-model="gender" label="1">女</ne-radio>
    <!-- <ne-radio v-model="gender" label="0"></ne-radio>
    <ne-radio v-model="gender" label="1"></ne-radio> -->

    <ne-radio-group v-model="gender">
      <ne-radio label="0">男</ne-radio>
      <ne-radio label="1">女</ne-radio>
    </ne-radio-group>

    <br />
    <ne-checkbox v-model="check" label="0">a</ne-checkbox>
    <ne-checkbox v-model="check" label="1">b</ne-checkbox>
    <ne-checkbox v-model="check" label="2">c</ne-checkbox>

    <ne-checkbox-group v-model="group">
      <ne-checkbox label="0">a</ne-checkbox>
      <ne-checkbox label="1">b</ne-checkbox>
      <ne-checkbox label="2">c</ne-checkbox>
    </ne-checkbox-group>

    <ne-form :model="model">
      <ne-form-item label="用户名">
        <ne-input
          placeholder="请输入用户名"
          v-model="model.username"
        ></ne-input>
      </ne-form-item>
      <ne-form-item label="选择">
        <ne-switch v-model="model.active"></ne-switch>
      </ne-form-item>
    </ne-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visiable: false,
      username: "sas",
      password: "",
      action: true,
      gender: "1",
      check: false,
      group: [],
      model: {
        username: "",
        active: true,
      },
    };
  },
  methods: {
    a() {
      console.log("123");
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin: 10px;
  .ne-button {
    margin: 10px;
  }
}
</style>
