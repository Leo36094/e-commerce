<style lang="stylus">
.dashboard
  display flex
  width 100%
  height 100%
  flex-direction column

  &__header
    height 60px
    width calc(100% - 20px)
  &-container
    display flex
    width 100%
    height 100%
    overflow auto
  &__nav
    width 15%
    min-width 200px
    height 100%
  &__table
    overflow auto
    padding 10px
    width 85%
    height calc(100% - 20px)

  &__popup
    width 100%
</style>
<template>
  <div class="dashboard">
    <Header class="dashboard__header" />
    <div class="dashboard-container">
      <NavBar class="dashboard__nav" />
      <div class="dashboard__table">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    NavBar,
    Header,
  },
};
</script>
