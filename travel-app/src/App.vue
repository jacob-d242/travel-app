<template>
  <div>
     <div id="nav">
      <router-link to="/" >Homepage</router-link>
      <router-link to="/brazil" >Brazil</router-link>
      <router-link to="/hawaii" >Hawai</router-link>
      <router-link to="/jamaica" >Jamaica</router-link>
      <router-link to="/panama" >Panama</router-link>    
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  
  </template>

<script setup>

</script>



<style scoped>

</style>
