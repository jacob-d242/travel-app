<template>
     <div id="nav">
      <router-link class="logo" to="/">Morata PAAP</router-link>
      <router-link
        v-for="destination in destinations" 
        :key="destination.id"
        :to="{name : 'destination.show',params:{id:destination.id , slug : destination.slug}}"
      >
        {{destination.name}}
      </router-link>   
    </div>
</template>

<style lang="css">
  #nav .link-exact-active {
    color: yellowgreen;
    border-bottom: 2px ;
   }

</style>

<script>
import sourceData from '@/data.json'
  export default{
    data(){
      return{
        destinations : sourceData.destinations
      }
    }
  }
</script>