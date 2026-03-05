// 主题类型定义
export const THEME_TYPES = {
    DEFAULT: 'default',
    DARK: 'dark',
}

// 获取本地存储的主题
export const getStoredTheme = () => {
    return localStorage.getItem('app-theme') || THEME_TYPES.DEFAULT
}

// 设置主题
export const setTheme = (theme) => {
    // 验证主题类型
    if (!Object.values(THEME_TYPES).includes(theme)) {
        theme = THEME_TYPES.DEFAULT
    }

    // 移除所有主题类名
    Object.values(THEME_TYPES).forEach((type) => {
        document.documentElement.classList.remove(type)
    })

    // 添加当前主题类名（默认主题无需加类名，因为 :root 已默认配置）
    if (theme !== THEME_TYPES.DEFAULT) {
        document.documentElement.classList.add(theme)
    }

    // 保存到本地存储
    localStorage.setItem('app-theme', theme)
}

// 初始化主题
export const initTheme = () => {
    const storedTheme = getStoredTheme()
    setTheme(storedTheme)
}

// 切换主题（默认在默认/暗黑之间切换）
export const toggleTheme = () => {
    const currentTheme = getStoredTheme()
    const newTheme = currentTheme === THEME_TYPES.DEFAULT ? THEME_TYPES.DARK : THEME_TYPES.DEFAULT
    setTheme(newTheme)
    return newTheme
}
