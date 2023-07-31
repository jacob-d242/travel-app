<template>
    <div class="home">
        <h1>All destinations</h1>
        <div class="destinations">
            <router-link
                v-for="destination in destinations"
                :key="destination.id"
                :to="{name : 'destination.show',params:{id : destination.id , slig: destination.slug}}"
            >
            <h1>{{ destination.name }}</h1>
            <img  :src="`/images/${destination.image}`" alt="`destination.name`" class="img"/>
            </router-link>
        </div>
    </div>
</template>

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