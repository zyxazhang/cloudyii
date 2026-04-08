<template>
    <button class="btn" @click="handleToggleTheme">
        {{ currentTheme === 'blue' ? '切换到女生主题' : '切换到男生主题' }}
    </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getStoredTheme, toggleTheme } from '../utils/theme'

const currentTheme = ref('')

onMounted(() => {
    // 初始化当前主题显示
    currentTheme.value = getStoredTheme()
})

const handleToggleTheme = () => {
    // 切换主题并更新显示
    currentTheme.value = toggleTheme()
}
</script>
