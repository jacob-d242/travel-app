<template>
     <div id="nav">
      <router-link to="/" >Homepage</router-link>
      <router-link to="/brazil" >Brazil</router-link>
      <router-link to="/hawaii" >Hawai</router-link>
      <router-link to="/jamaica" >Jamaica</router-link>
      <router-link to="/panama" >Panama</router-link>    
    </div>
</template>

<style lang="css">
  #nav .link-exact-active {
    color: yellowgreen;
    border-bottom: 2px ;
   }

</style>