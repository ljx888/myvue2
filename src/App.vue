<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
ul,li,ol,dl,dd,dt{list-style: none;}
a{
  text-decoration: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
body,html{width: 100%;height: 100%;}
#app{
  background-color: #f3f3f3;
  width: 100%;height: 100%;
}
</style>
