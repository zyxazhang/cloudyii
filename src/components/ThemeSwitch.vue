<template>
    <button class="btn" @click="handleToggleTheme">
        {{ currentTheme === 'dark' ? '切换到默认主题' : '切换到暗黑主题' }}
    </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getStoredTheme, toggleTheme } from '../utils/theme'

const emit = defineEmits(['theme-changed'])
const currentTheme = ref('')

onMounted(() => {
    // 初始化当前主题显示
    currentTheme.value = getStoredTheme()
})

const handleToggleTheme = () => {
    // 切换主题并更新显示
    currentTheme.value = toggleTheme()
    // 发送主题变化事件
    emit('theme-changed', currentTheme.value)
}
</script>
