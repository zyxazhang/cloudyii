<template>
    <main class="layout-container">
        <header class="layout-header glass-card">
            <div class="logo">
                <div class="logo-image">
                    <span class="cloudyii icon-aixin"></span>
                </div>
                <span class="logo-text">云依</span>
            </div>
            <nav class="nav-list">
                <li class="nav-item" v-for="nav in navList" :key="nav.key">
                    <a class="nav-link" href="#">{{ nav.title }}</a>
                </li>
            </nav>
            <div class="right-func">
                <div class="search">
                    <input class="search-input" type="text" placeholder="搜索点什么..." />
                    <span class="cloudyii search-icon icon-sousuo"></span>
                </div>
                <div class="login">登录</div>
            </div>
        </header>
        <div class="pages-container">
            <router-view></router-view>
        </div>
        <!-- <ThemeSwitch /> -->
    </main>
</template>

<script setup>
import { ref } from 'vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

const navList = ref([
    { title: '首页', key: '1' },
    { title: '小说室', key: '2' },
    { title: '日常', key: '3' },
    { title: '工具箱', key: '4' },
    { title: '留言板', key: '5' },
])
</script>

<style lang="scss" scoped>
.layout-container {
    width: 1440px;
    height: inherit;
    margin: 0 auto;
    position: relative;
    .layout-header {
        width: 1376px;
        height: 74px;
        margin: 0 auto 2rem;
        position: sticky;
        z-index: 100;
        top: 2rem;
        border-radius: 1.5rem;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        backdrop-filter: blur(12px);
        .logo {
            --tw-text-opacity: 1;
            color: rgb(255 183 206 / var(--tw-text-opacity, 1));
            display: flex;
            gap: 0.5rem;
            align-items: center;
            .logo-image {
                width: 2.5rem;
                height: 2.5rem;
                background-color: rgb(255 236 242 / var(--tw-bg-opacity, 1));
                border-radius: 50%;
                line-height: 2.5rem;
                text-align: center;
                .icon-aixin {
                    font-size: 1.2rem;
                }
            }
            .logo-text {
                font-size: 1.5rem;
                line-height: 2rem;
                font-family: 'ZCOOL KuaiLe', cursive;
                font-weight: bold;
            }
        }
        .nav-list {
            display: flex;
            align-items: center;
            gap: 2rem;
            .nav-item {
                color: var(--color-text);
                .nav-link {
                    position: relative;
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                    &::after {
                        content: '';
                        position: absolute;
                        bottom: -4px;
                        left: 50%;
                        width: 0;
                        height: 3px;
                        background: #ffb7ce;
                        border-radius: 10px;
                        transition: all 0.3s;
                        transform: translateX(-50%);
                    }
                    &:hover {
                        &::after {
                            width: 80%;
                        }
                    }
                }
            }
        }
        .right-func {
            display: flex;
            align-items: center;
            gap: 1rem;
            .search {
                position: relative;
                width: 12rem;
                height: 2.5rem;
                .search-input {
                    width: 12rem;
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 2.5rem;
                    border: 2px solid #e5e7eb4f;
                    border-radius: 1.25rem;
                    padding: 0 1rem;
                    transition: all 300ms;
                    font-size: 1rem;
                    color: var(--color-text);
                    &::placeholder {
                        color: #acacac;
                    }
                    &:focus {
                        width: 16rem;
                        border: 2px solid var(--color-theme-text);
                    }
                }
                .search-icon {
                    position: absolute;
                    top: 0.8rem;
                    right: 0.8rem;
                }
            }
            .login {
                width: 80px;
                height: 2.5rem;
                border-radius: 1.25rem;
                background-color: #ffecf2;
                text-align: center;
                line-height: 2.5rem;
                color: #ffb7ce;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s;
                &:hover {
                    background: #ffb7ce;
                    color: #fff;
                }
            }
        }
    }
    .pages-container {
        width: 100%;
        margin: 0 auto;
        padding: 2rem;
        box-sizing: border-box;
    }
}
</style>
