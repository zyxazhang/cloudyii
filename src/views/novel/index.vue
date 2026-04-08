<template>
    <div class="novel-page">
        <div class="novel-top glass-card">
            <h2 class="title fancy-font">“小说灵感小窝”</h2>
            <p class="desc">这里是装满幻想与故事的小星球～把奇奇怪怪的脑洞、甜甜的剧情、可爱的角色，一点点写成小说，慢慢长大，慢慢发光✨</p>
            <div class="author">
                <img class="img" src="../../assets/images/book.gif" alt="" />
                <p class="roast fancy-font">写文一时爽，构思火葬场。脑子已经转不动了，谁来帮我<span class="share">分担</span>一点剧情啊～</p>
            </div>
        </div>
        <div class="novel-bookshelf"></div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.novel-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .novel-top {
        width: 100%;
        height: 240px;
        border-radius: 32px;
        padding: 40px;
        gap: 16px;
        display: flex;
        flex-direction: column;

        .title {
            color: var(--color-theme-text);
            font-size: 24px;
        }
        .desc {
            color: var(--color-text);
        }
        .author {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            .img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
            .roast {
                padding: 4px 8px;
                background-color: #fff;
                border-radius: 8px;
                .share {
                    color: var(--color-theme-text);
                    margin: 0 2px;
                    cursor: pointer;
                }
            }
        }
    }
    .novel-bookshelf {
        width: 100%;
        min-height: 200px;
    }
}
</style>
