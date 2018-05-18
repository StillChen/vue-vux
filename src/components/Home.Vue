<template>
  <div>
    <app-header></app-header>
    <app-footer></app-footer>
    <tab :line-width="2" >
      <tab-item :selected="tag === item" v-for="item in taglist" :key = "item.id" @click="tag = item">{{item}}</tab-item>
    </tab>
  </div>
</template>
<script>
  import {Tab,TabItem} from 'vux'
  import AppHeader from './Header'
  import AppFooter from './Footer'
  export default {
    data () {
      return {
        tag: '资讯',
        taglist: ['资讯', '博客', '问答', '活动']
    }
  },
  components: {
      Tab,
      TabItem,
      AppHeader,
      AppFooter,
  },
}
</script>