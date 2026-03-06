<template>
    <div class="tool-box">
        <h3 class="tool-box-title">
            <span class="title-icon cloudyii icon-biaoqian1"></span>
            <span>实用工具箱</span>
        </h3>
        <ul class="tool-list">
            <li v-for="tool in toolList" :key="tool.name" class="tool-item" :style="{ '--tool-color': tool.color }">
                <div class="bg-mask"></div>
                <span class="tool-icon cloudyii" :class="tool.icon"></span>
                <span class="tool-text">{{ tool.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const toolList = ref([
    { name: '颜色选择', key: '', icon: 'icon-yanse', color: '#f3e5f5' },
    { name: '白噪音', key: '', icon: 'icon-yinle', color: '#e8f6f3' },
    { name: '手账本', key: '', icon: 'icon-icon', color: '#e3f2fd' },
    { name: '导航', key: '', icon: 'icon-zhinanzhen', color: '#ffcada' },
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
