<template>
    <div class="login-container">
        <div class="login-wrapper glass-card">
            <div class="login-box">
                <span class="cloudyii icon-aixin"></span>
            </div>
            <div class="register-box"></div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.login-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fffdf9cc;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 120;

    backdrop-filter: blur(8px);
    .login-wrapper {
        width: 450px;
        min-height: 300px;
        border-radius: 32px;
        background-color: #fff;
        box-shadow: 0 10px 30px -5px rgba(255, 209, 220, 0.3);
        padding: 40px;
        .login-box {
            width: 100%;
            height: 48px;
            border-radius: 24px;
            background-color: var(--color-theme-text-bg);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            cursor: pointer;
        }
    }
}
</style>
