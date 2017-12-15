<template>
  <el-menu default-active="/" :router=true class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <template v-for="config in configs">
      <template v-if="config.children">
        <el-submenu index="config.index" :key="config.id">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{config.name}}</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item  v-for="child in config.children" :key="child.id" :index="child.index">{{child.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="config.index"  :key="config.id">
          <i class="el-icon-menu"></i>
          <span slot="title">{{config.name}}</span>
        </el-menu-item>
        <!-- <div :key="config.id" style="background:red">{{config.name}}</div> -->
      </template>
    </template>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data() {
    return {
      isCollapse: false,
      configs: [
        {
          id: "1",
          name: "实时监控",
          index: "/",
          children: [
            {
              id: "test22",
              name: "test1",
              index: "/test"
            },
            {
              id: "1222",
              name: "test2",
              index: "/test2"
            }
          ]
        },
        {
          id: 2,
          name: "平台安全",
          index: "/security"
        },
        {
          id: 3,
          name: "我的地图",
          index: "/map"
        },
        {
          id: 4,
          name: "测试测试",
          index: "/"
        }
      ]
    }
  },

}
</script>