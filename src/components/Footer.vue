<template>
    <tabbar>
        <tabbar-item selected>
            <span slot="icon" class="icon iconfont icon-shouye" ></span>
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
            <span slot="icon" class="icon iconfont icon-icon-test"></span>
            <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item>
            <span slot="icon" class="icon iconfont icon-icon-test"></span>
            <span slot="label">趣玩</span>
        </tabbar-item>
        <tabbar-item>
            <span slot="icon" class="icon iconfont icon-daohanggouwuche"></span>
            <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item>
            <span slot="icon" class="icon iconfont icon-wode"></span>
            <span slot="label">我的</span>
        </tabbar-item>
    </tabbar>
</template>
<style>
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
          color:#000;
      }
</style>
<style scoped>
      .iconfont {
          font-size:27px;
      }
      
</style>
<script>
      import {
          Tabbar,
          TabbarItem
      } from 'vux'
      export default {
          name: 'AppFooter',
          components: {
              Tabbar,
              TabbarItem,
          },
          data() {
              return {
                  msg: ''
              }
          },
      }
</script>