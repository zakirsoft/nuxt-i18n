<template>
    <div>
<AccesoriesCardsDispley
 v-for="cardInfo in largeCardInfo"
 :key="cardInfo.id"
 :cardsSection="cardInfo"
 />

    </div>
</template>

<script>

import { largeCardSections } from '@/store/accesories.js'
    export default {
       components:{
      
    },
    data(){
        return{
            largeCardInfo: largeCardSections
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>