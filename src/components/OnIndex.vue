<template>
    <el-container>

    <el-aside width="200px">
    <el-col>
      <el-menu
        class="el-menu-demo"
        background-color="#545c64"
        text-color= "#fff"
        active-text-color="#ffd04b" 
        default-active="this.$route.path"
        router
      >
        <el-submenu index="1">
            <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
            </template>
            <el-menu-item 
                v-for="(item,i) in navlist" 
                :key="i" :index="item.name"
            >
                <template #title>
                    <span> {{ item.navItem }}</span>
                </template>
            </el-menu-item>
          </el-submenu>
      </el-menu>
    </el-col>

    </el-aside>

    <el-container>
      <el-header>Header</el-header>
      <el-main>
          <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>

import {Location} from '@element-plus/icons-vue';
export default {
    components:{
        Location,
    },
    setup(){
        return{
            navlist:[
                { name: "/", navItem: "首页" },
                { name: "/test1", navItem: "文章" },
                { name: "/about", navItem: "关于" },
            ],
        }
    }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
.el-container {
  width: 100vw;
  min-height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
</style>
