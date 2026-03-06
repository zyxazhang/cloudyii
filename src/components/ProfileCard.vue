<template>
    <div class="profile-card">
        <div class="avatar-box">
            <img class="avatar-img" src="../assets/images/avatar-01.jpg" alt="" />
            <div class="avatar-tag">
                <span class="tag-icon cloudyii icon-xingxing"></span>
            </div>
        </div>
        <h2 class="name fancy-font">芙宁娜</h2>
        <p class="text">Stay Sweet & Happy</p>
        <p class="desc">这是一只喜欢记录生活、写些温暖文字的博主~ 希望我的小屋能治愈你。🍡</p>
        <div class="count">
            <div class="count-item">
                <div class="count-num">20</div>
                <div class="count-title">文章</div>
            </div>
            <div class="line"></div>
            <div class="count-item">
                <div class="count-num">27</div>
                <div class="count-title">关注</div>
            </div>
            <div class="line"></div>
            <div class="count-item">
                <div class="count-num">1455</div>
                <div class="count-title">获赞</div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.profile-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    .avatar-box {
        position: relative;
        width: 8rem;
        height: 8rem;
        margin-bottom: 1rem;
        .avatar-img {
            border: 2px solid #e5e7eb;
            box-shadow:
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
                rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 10;
            overflow: hidden;
        }
        .avatar-tag {
            position: absolute;
            bottom: 2px;
            right: 2px;
            z-index: 20;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            text-align: center;
            line-height: 2rem;
            background-color: #fff;
            box-shadow:
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
                rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
            .tag-icon {
                font-size: 1rem;
                color: #facc15;
            }
        }
    }
    .name {
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        margin-bottom: 0.25rem;
        text-align: center;
    }
    .text {
        color: #ffb7cecc;
        letter-spacing: 0.1em;
        font-style: italic;
        font-size: 0.75rem;
        line-height: 1rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    .desc {
        text-align: center;
        font-size: 14px;
        line-height: 26px;
        padding: 0 1rem;
        margin-bottom: 1rem;
    }
    .count {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .count-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            .count-num {
                font-weight: 500;
            }
            .count-title {
                font-size: 10px;
            }
        }
        .line {
            width: 1px;
            height: 1rem;
            margin: 0 0.5rem;
            background-color: #eef0f3;
        }
    }
}
</style>
