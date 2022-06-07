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

    <ne-switch
      v-model="action"
      active-color="#13ce66"
      inactive-color="#ff4949"
      name="username"
    ></ne-switch>
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
