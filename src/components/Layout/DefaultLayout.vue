<template>
    <div>
        <HeaderComponent />
        <router-view></router-view>
        <FooterComponent />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/inc/HeaderComponent.vue';
import FooterComponent from '@/components/inc/FooterComponent.vue';
</script>

<style scoped>

</style>