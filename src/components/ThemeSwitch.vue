<!-- <template>
    <div class="switch-theme">
        <button class="btn" @click="handleToggleTheme">
            {{ currentTheme === 'blue' ? 'girl' : 'boy' }}
        </button>
    </div>

</template> -->
<template>
    <div class="switch-box">
        <h3 class="switch-box-title">
            <span class="title-icon cloudyii icon-biaoqian1"></span>
            <span>切换主题</span>
        </h3>
        <ul class="switch-list">
            <li v-for="item in switchList" :key="item.name" class="switch-item" :style="{ '--switch-color': item.color }" @click="handleToggleTheme">
                <div class="bg-mask"></div>
                <span class="switch-icon cloudyii" :class="item.icon"></span>
                <span class="switch-text">{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getStoredTheme, toggleTheme } from '../utils/theme'

const currentTheme = ref('')

onMounted(() => {
    // 初始化当前主题显示
    currentTheme.value = getStoredTheme()
})

const switchList = ref([
    { name: 'GIRL', key: '', icon: 'icon-yanse', color: '#f3e5f5' },
    { name: 'BOY', key: '', icon: 'icon-yinle', color: '#e8f6f3' },
])

const handleToggleTheme = () => {
    // 切换主题并更新显示
    currentTheme.value = toggleTheme()
}
</script>
<style lang="scss" scoped>
.switch-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    .switch-box-title {
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
    .switch-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        .switch-item {
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
                background-color: var(--switch-color);
                transition: all 0.2s;
                z-index: 10;
                opacity: 0.5;
            }
            .switch-icon {
                position: relative;
                font-size: 20px;
                z-index: 20;
            }
            .switch-text {
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
