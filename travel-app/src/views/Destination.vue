<template>
    <div>
       <h1>{{ destination.name }}</h1>
       <img :src="`/images/${destination.image}`" />
    </div>
</template>
<script>
import sourceData from '@/data.json'
export default {
   computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return sourceData.destinations.find(destination => destination.id === this.destinationId)
        }
   }
}
</script>



