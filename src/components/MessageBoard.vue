<template>
    <div class="message-box">
        <h3 class="message-box-title">
            <span class="title-icon cloudyii icon-biaoqian1"></span>
            <span>实用工具箱</span>
        </h3>
        <ul class="message-list">
            <li v-for="message in messageList" :key="message.name" class="message-item" :style="{ '--message-color': message.color }">
                <div class="bg-mask"></div>
                <span class="message-icon cloudyii" :class="message.icon"></span>
                <span class="message-text">{{ message.name }}</span>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const messageList = ref([
    { name: '在线工具', icon: 'icon-gongju', color: '#ff6b6b' },
    { name: '在线工具', icon: 'icon-gongju', color: '#ff6b6b' },
    { name: '在线工具', icon: 'icon-gongju', color: '#ff6b6b' },
    { name: '在线工具', icon: 'icon-gongju', color: '#ff6b6b' },
    { name: '在线工具', icon: 'icon-gongju', color: '#ff6b6b' },
    { name: '在线工具', icon: 'icon-gongju', color: '#ff6b6b' },
])
</script>

<style lang="scss" scoped>
.tool-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    .tool-box-title {
        width: 100%;
        height: 24px;
        font-size: 16px;
        margin-bottom: 16px;
        .title-icon {
            color: var(--color-theme-text);
            font-size: 20px;
        }
        span {
            margin-left: 6px;
        }
    }
    .tool-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        .tool-item {
            width: 128px;
            height: 64px;
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            .bg-mask {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: var(--tool-color);
                transition: all 0.2s;
                z-index: 10;
                opacity: 0.5;
            }
            .tool-icon {
                position: relative;
                font-size: 20px;
                z-index: 20;
            }
            .tool-text {
                position: relative;
                font-size: 12px;
                z-index: 20;
            }
            &:hover {
                cursor: pointer;
                .bg-mask {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
