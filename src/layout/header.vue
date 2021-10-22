<script lang="ts">
import { defineComponent } from 'vue';
import logoImg from '../images/logo.png';
import { LogInOutline, NotificationsOutline, SettingsOutline, LogoGithub,GitCommitOutline } from '@vicons/ionicons5';
import { useRouter, Router } from 'vue-router';
import { useDialog } from 'naive-ui';
import { permissionRoute } from '@/router/permission';
export default defineComponent({
    components: {
        LogInOutline, NotificationsOutline, SettingsOutline,LogoGithub
    },
    setup() {
        const router: Router = useRouter();
        const dialog = useDialog();
        function clickOnHeaderRightIcon(type: number): void {
            switch (type) {
                case 3:
                    dialog.warning({
                        title: '警告',
                        content: '确定退出登录吗？',
                        positiveText: '确定',
                        negativeText: '不确定',
                        onPositiveClick: () => {
                            // router.removeRoute()
                            localStorage.clear();
                            permissionRoute.forEach((route) => {
                                router.removeRoute(route.name)
                            })

                            router.replace('/login');
                            location.reload()
                        },
                        onNegativeClick: () => {
                        }
                    })
                    break;
                default:
                    break;
            }
        }
        return {
            logoImg, clickOnHeaderRightIcon
        }
    },
})
</script>
<template>
    <div class="clear">
        <div class="extra-nav">
            <ul class="nav-list">
                <li>系统设置</li>
                <li>知识库</li>
            </ul>
        </div>
        <ul class="user-center">
            <li>
                <a href="https://github.com/Gitpingping/vite-ping-admin.git" target="_blank">
                    <n-tooltip trigger="hover">
                    <template #trigger>
                        <n-icon>
                            <LogoGithub />
                        </n-icon>
                    </template>
                    github
                </n-tooltip>
                </a>
            </li>
            <li>
                <n-tooltip trigger="hover">
                    <template #trigger>
                        Gitee
                    </template>
                    干！没找到码云的logo
                </n-tooltip>
            </li>
            <li>
                <n-tooltip trigger="hover">
                    <template #trigger>
                        <n-icon>
                            <NotificationsOutline />
                        </n-icon>
                    </template>
                    通知消息
                </n-tooltip>
            </li>
            <li>
                <n-tooltip trigger="hover">
                    <template #trigger>
                        <n-icon>
                            <SettingsOutline />
                        </n-icon>
                    </template>
                    系统设置
                </n-tooltip>
            </li>
            <li>
                <n-tooltip trigger="hover">
                    <template #trigger>
                        <n-icon>
                            <LogInOutline @click="clickOnHeaderRightIcon(3)" />
                        </n-icon>
                    </template>
                    退出登录
                </n-tooltip>
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
.ant-layout-header {
    background-color: #fff;
    padding: 0;
}
.logo {
    width: 200px;
    // background-image: linear-gradient(
    //     to right,
    //     rgba(97, 141, 223, 0.6),
    //     rgba(38, 110, 255, 1)
    // );
    background-color: #fff;
    // line-height: 64px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    float: left;
    img {
        height: 36px;
        margin-top: 12px;
    }
    // border: 1px solid @primary-color;
}
.extra-nav {
    height: 64px;
    float: left;
    display: flex;
    align-items: center;
    padding-left: 36px;
    .fold-out:hover {
        cursor: pointer;
    }
    .nav-list {
        margin-bottom: 0;
        font-weight: 800;
    }
    .nav-list > li {
        float: left;
        padding-left: 36px;
    }
}
.user-center {
    float: right;
    height: 64px;
    display: flex;
    align-items: center;
    margin-right: 24px;
    li {
        float: left;
        margin: 0 12px;
        font-size: 18px;
        cursor: pointer;
    }
}
</style>