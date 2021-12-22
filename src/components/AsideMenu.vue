<template>
    <el-col>
      <el-menu
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
        <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>
</template>

<script>
import {
  Location,
} from '@element-plus/icons-vue';
export default {
    components: {
        Location,
    },
    setup(){
        const handleOpen = (key,keyPath) =>{
            console.log(key,keyPath)
        }
        const handleClose = (key ,keyPath)=>{
            console.log(key,keyPath)
        }
        return{
            handleOpen,
            handleClose,
        }
    },
} 
</script>

<style>

</style>