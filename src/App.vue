<template>
    <div class="container">
        <h1>主题切换示例</h1>
        <ThemeSwitch @theme-changed="updateTheme" />
        <div class="card">
            <p>当前主题：{{ currentTheme }}</p>
            <button class="btn">主题按钮</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { getStoredTheme } from '@/utils/theme'

const currentTheme = ref('')

onMounted(() => {
    currentTheme.value = getStoredTheme()
})

// 更新主题
const updateTheme = (newTheme) => {
    currentTheme.value = newTheme
}
</script>

<style scoped lang="scss">
.container {
    width: 1400px;
    margin: 0px auto;
    padding: 20px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: var(--color-theme-bg);
    transition: all 0.3s ease;
}

.card {
    margin-top: 20px;
    padding: 16px;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    transition: all 0.3s ease;
}

// 确保在小屏幕上可以滚动
html {
    overflow-x: auto;
}
</style>
