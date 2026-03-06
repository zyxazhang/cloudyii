<template>
    <div class="home-page">
        <aside class="home-left">
            <div class="aside-container glass-card">
                <profile-card></profile-card>
            </div>
            <div class="aside-container glass-card">
                <tool-box></tool-box>
            </div>
        </aside>
        <div class="home-center">
            <div class="banner glass-card"></div>
        </div>
        <aside class="home-right">
            <div class="message-board glass-card"></div>
        </aside>
    </div>
</template>

<script setup>
import ProfileCard from '@/components/ProfileCard.vue'
import ToolBox from '@/components/ToolBox.vue'
</script>

<style lang="scss" scoped>
.home-page {
    width: 100%;
    display: flex;
    gap: 2rem;

    .home-left {
        width: 320px;
        .aside-container {
            width: 100%;
            border-radius: 1.5rem;
            margin-bottom: 2rem;
        }
    }
    .home-center {
        width: calc(100% - 640px - 4rem);
        .banner {
            width: 100%;
            height: 256px;
            border-radius: 1.5rem;
        }
    }
    .home-right {
        width: 320px;
        .message-board {
            width: 100%;
            height: 290px;
            border-radius: 1.5rem;
            background-color: #fefce880;
        }
    }
}
</style>
