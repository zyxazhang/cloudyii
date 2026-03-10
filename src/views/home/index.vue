<template>
    <div class="home-page">
        <aside class="home-left">
            <div class="aside-container glass-card">
                <profile-card></profile-card>
            </div>
            <div class="aside-container glass-card">
                <tool-box></tool-box>
            </div>
        </aside>
        <div class="home-center">
            <div class="banner">
                <div class="banner-mask"></div>
                <img class="banner-img" src="../../assets/images/banner.jpg" alt="" />
                <div class="banner-info">
                    <div class="status">连载中</div>
                    <div class="name">《夏日薄荷烟火》</div>
                    <div class="desc">我们在那个蝉鸣的午后相遇，空气里都是清爽的薄荷味</div>
                    <div class="entry">立即阅读</div>
                </div>
            </div>

            <div class="article-content">
                <!-- 博文 -->
                <ul class="latest-article">
                    <li class="list-item glass-card" v-for="value in 3">
                        <div class="article-box">
                            <img class="article-img" src="../../assets/images/banner-02.jpg" alt="" />
                            <div class="article-info">
                                <div class="top">
                                    <div class="type">小说</div>
                                    <div class="time">2026-03-09</div>
                                </div>
                                <div class="title">韵体萌心</div>
                                <div class="desc text-ellipsis-2">
                                    “灵悦”
                                    是系统幻化的白狐名字，它在云璃最脆弱和迷茫的时候出现，给予陪伴与鼓励。这个标题强调灵悦在云璃修仙之路上的重要陪伴作用，象征着希望与温暖，是云璃前行的动力之一
                                </div>
                                <div class="bottom">
                                    <div class="other">
                                        <div class="other-box like">
                                            <span class="cloudyii icon-aixin1"></span>
                                            <span class="num">562</span>
                                        </div>
                                        <div class="other-box comment">
                                            <span class="cloudyii icon-pinglun-"></span>
                                            <span class="num">56</span>
                                        </div>
                                        <div class="other-box collect">
                                            <span class="cloudyii icon-biaoqian1"></span>
                                            <span class="num">156</span>
                                        </div>
                                    </div>
                                    <div class="tags">
                                        <div class="tag-item">治愈</div>
                                        <div class="tag-item">冒险</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="select-box">
                <button class="select-btn selected">最新博文</button>
                <button class="select-btn">精选集</button>
            </div>
            <div class="article-list"></div>
        </div>
        <aside class="home-right">
            <div class="message-board glass-card">
                <message-board></message-board>
            </div>
        </aside>
    </div>

    <div class="home-footer glass-card">
        <div class="footer-left">
            <h3 class="footer-title fancy-font">“路过山海，停驻人间，做一朵会治愈一切的云”</h3>
            <p class="rights">© 2026 cloudyii. all rights reserved</p>
        </div>
        <div class="footer-right">
            <a class="cloudyii glass-card icon-github" target="_blank" href="https://github.com/zyxazhang"></a>
            <a class="cloudyii glass-card icon-gitee" target="_blank" href="https://gitee.com/zyxazhang"></a>
            <a class="cloudyii glass-card icon-juejin" target="_blank" href="https://juejin.cn/user/2903167020835726"></a>
            <a class="cloudyii glass-card icon-qq" target="_blank" href=""></a>
        </div>
    </div>
</template>

<script setup>
import ProfileCard from '@/components/ProfileCard.vue'
import ToolBox from '@/components/ToolBox.vue'
import MessageBoard from '@/components/MessageBoard.vue';
</script>

<style lang="scss" scoped>
.home-page {
    width: 100%;
    display: flex;
    gap: 2rem;

    .home-left {
        width: 320px;
        .aside-container {
            width: 100%;
            border-radius: 1.5rem;
            margin-bottom: 2rem;
        }
    }
    .home-center {
        width: calc(100% - 640px - 4rem);
        .banner {
            width: 100%;
            height: 256px;
            border-radius: 32px;
            overflow: hidden;
            position: relative;
            margin-bottom: 32px;

            .banner-mask {
                position: absolute;
                z-index: 20;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(to right, #ffb7cecc, transparent);
            }
            .banner-img {
                position: absolute;
                z-index: 10;
                width: 100%;
                height: 100%;
                transition: all 0.5s;
                object-fit: cover;
            }
            &:hover {
                .banner-img {
                    transform: scale(1.1);
                }
            }
            .banner-info {
                width: 100%;
                height: 100%;
                background-color: transparent;
                position: relative;
                z-index: 30;
                padding: 0 48px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: #fff;
                gap: 10px;
                .status {
                    width: 80px;
                    height: 24px;
                    line-height: 24px;
                    font-size: 12px;
                    background: #ffffff33;
                    border-radius: 12px;
                    text-align: center;
                }
                .name {
                    width: 100%;
                    height: 36px;
                    font-size: 30px;
                }
                .desc {
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                }
                .entry {
                    width: 112px;
                    height: 40px;
                    border-radius: 20px;
                    text-align: center;
                    line-height: 40px;
                    color: var(--color-theme-text);
                    background-color: #fff;
                    font-weight: bold;
                    transition: all 0.5s ease;
                    cursor: pointer;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }

        .article-content {
            width: 100%;
            min-height: 300px;
            .latest-article {
                width: 100%;
                height: 100%;
                .list-item {
                    width: 100%;
                    height: 260px;
                    border-radius: 40px;
                    background-color: #fff;
                    margin-bottom: 32px;
                    .article-box {
                        width: 100%;
                        height: 100%;
                        padding: 32px;
                        display: flex;
                        justify-content: space-between;
                        .article-img {
                            width: 192px;
                            height: 192px;
                            border-radius: 24px;
                            object-fit: cover;
                        }
                        .article-info {
                            width: calc(100% - 226px);
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            .top {
                                width: 100%;
                                height: 20px;
                                display: flex;
                                align-items: center;
                                gap: 12px;
                                font-size: 12px;
                                margin-bottom: 8px;
                                .type {
                                    height: 20px;
                                    border-radius: 10px;
                                    padding: 0 12px;
                                    background-color: rgb(227, 255, 246);
                                    color: rgb(55, 184, 85);
                                    text-align: center;
                                    line-height: 20px;
                                    font-weight: bold;
                                }
                                .time {
                                    color: #9ca3af;
                                }
                            }
                            .title {
                                width: 100%;
                                height: 32px;
                                font-size: 24px;
                                line-height: 32px;
                                margin-bottom: 16px;
                                cursor: pointer;
                                transition: all 0.5s ease;
                                font-weight: 500;
                                &:hover {
                                    color: var(--color-theme-text);
                                }
                            }
                            .desc {
                                width: 100%;
                                height: 48px;
                                font-size: 14px;
                                line-height: 24px;
                                color: #6b7280;
                                margin-bottom: 32px;
                            }
                            .bottom {
                                width: 100%;
                                height: 20px;
                                display: flex;
                                align-items: center;
                                .other {
                                    width: 60%;
                                    height: 100%;
                                    color: #9ca3af;
                                    font-size: 12px;
                                    display: flex;
                                    align-items: center;
                                    gap: 24px;
                                    .other-box {
                                        display: flex;
                                        align-items: center;
                                        gap: 8px;
                                    }
                                }
                                .tags {
                                    width: 40%;
                                    height: 100%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: flex-end;
                                    gap: 12px;
                                    font-size: 12px;
                                    overflow: hidden;
                                    .tag-item {
                                        height: 20px;
                                        border-radius: 10px;
                                        padding: 0 8px;
                                        border: 1px solid var(--color-theme-text);
                                        color: var(--color-theme-text);
                                        text-align: center;
                                        line-height: 18px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .select-box {
            width: 100%;
            height: 36px;
            margin-top: 32px;
            display: flex;
            align-items: center;
            gap: 16px;
            .select-btn {
                color: var(--color-theme-text);
                background-color: #ffffff80;
                padding: 8px 24px;
                border-radius: 18px;
                cursor: pointer;
                transition: all 0.5s ease-in;
                &:hover {
                    opacity: 0.8;
                    // background-color: ;
                }
            }
            .selected {
                color: #ffffff;
                background-color: var(--color-theme-text);
            }
        }
    }
    .home-right {
        width: 320px;
        .message-board {
            width: 100%;
            height: 290px;
            border-radius: 1.5rem;
            background-color: #fefce880;
        }
    }
}
.home-footer {
    width: 100%;
    height: 100px;
    border-radius: 20px;
    padding: 20px 32px;
    display: flex;
    justify-content: space-between;
    .footer-left {
        height: 60px;
        .footer-title {
            width: 100%;
            height: 40px;
            line-height: 40px;
            color: var(--color-theme-text);
        }
        .rights {
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            text-indent: 20px;
        }
    }

    .footer-right {
        height: 60px;
        display: flex;
        align-items: center;
        gap: 12px;
        a {
            display: block;
            width: 32px;
            height: 32px;
            text-align: center;
            line-height: 32px;
            border-radius: 50%;
        }
    }
}
</style>
