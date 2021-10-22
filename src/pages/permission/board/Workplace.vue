<script lang="ts">
import { defineComponent, markRaw, Component } from "vue";
import avatar from "@/images/avatar.jpg";
import { LogoVue } from "@vicons/ionicons5";
import Business from '@/images/Business.svg';
import {
    Users,
    ChartBar,
    ShoppingCart,
    ClipboardList,
    Mail,
    Ticket,
    Tag,
    Settings,
} from "@vicons/tabler";
import { useReactive } from "@/hooks/vue";
export interface IconItem {
    icon: Component;
    title: string;
    color: string;
}
export default defineComponent({
    name: "Workplace",
    setup() {
        const iconsList = useReactive<IconItem[]>([
            {
                icon: markRaw(Users),
                title: "用户",
                color: "#69c0ff",
            },
            {
                icon: markRaw(ChartBar),
                title: "分析",
                color: "#69c0ff",
            },
            {
                icon: markRaw(ShoppingCart),
                title: "商品",
                color: "#ff9c6e",
            },
            {
                icon: markRaw(ClipboardList),
                title: "订单",
                color: "#b37feb",
            },
            {
                icon: markRaw(Ticket),
                title: "票据",
                color: "#ffd666",
            },
            {
                icon: markRaw(Mail),
                title: "消息", 
                color: "#5cdbd3",
            },

        ]);

        return {
            avatar,
            iconsList, 
            Business
        };
    },
    components: {
        LogoVue,
    },
});
</script>

<template>
    <n-card title="工作台">
        <div class="flex justify-between">
            <n-grid x-gap="12" :cols="2">
                <n-gi>
                    <div class="flex align-center">
                        <n-avatar round :size="60" :src="avatar"></n-avatar>
                        <div>
                            <p class="hello">早安，zhangping，开始您一天的工作吧！</p>
                            <span class="tips">今日阴转大雨，15℃ - 25℃，出门记得带伞哦。</span>
                        </div>
                    </div>
                </n-gi>
                <n-gi>
                    <n-grid :cols="3">
                        <n-gi>
                            <div class="work-count">
                                项目数
                                <br />
                                <b>16</b>
                            </div>
                        </n-gi>
                        <n-gi>
                            <div class="work-count">
                                待办
                                <br />
                                <b>8/16</b>
                            </div>
                        </n-gi>
                        <n-gi>
                            <div class="work-count">
                                消息
                                <br />
                                <b>35</b>
                            </div>
                        </n-gi>
                    </n-grid>
                </n-gi>
            </n-grid>
        </div>
    </n-card>
    <div class="mt-12">
        <n-grid x-gap="12" cols="1 1000:2">
            <n-gi>
                <n-card title="项目" :bordered="false" size="small" content-style="padding:0">
                    <div class="flex flex-wrap project-card">
                        <n-card class="project-card-item" hoverable header-style="padding-bottom:0">
                            <template #header>
                                <div class="flex align-start">
                                    <n-icon size="36" color="#ffde66">
                                        <LogoVue />
                                    </n-icon>
                                    <span class="ml-12">Vue</span>
                                </div>
                            </template>
                            <p class="project-introduce">是一个面向开源及私有软件项目的托管平台。</p>
                            <p class="project-introduce">开源君，2021-07-04</p>
                        </n-card>
                        <n-card class="project-card-item" hoverable header-style="padding-bottom:0">
                            <template #header>
                                <div class="flex align-start">
                                    <n-icon size="36" color="#ffde66">
                                        <LogoVue />
                                    </n-icon>
                                    <span class="ml-12">Vue</span>
                                </div>
                            </template>
                            <p class="project-introduce">是一个面向开源及私有软件项目的托管平台。</p>
                            <p class="project-introduce">开源君，2021-07-04</p>
                        </n-card>
                        <n-card class="project-card-item" hoverable header-style="padding-bottom:0">
                            <template #header>
                                <div class="flex align-start">
                                    <n-icon size="36" color="#ffde66">
                                        <LogoVue />
                                    </n-icon>
                                    <span class="ml-12">Vue</span>
                                </div>
                            </template>
                            <p class="project-introduce">是一个面向开源及私有软件项目的托管平台。</p>
                            <p class="project-introduce">开源君，2021-07-04</p>
                        </n-card>
                        <n-card class="project-card-item" hoverable header-style="padding-bottom:0">
                            <template #header>
                                <div class="flex align-start">
                                    <n-icon size="36" color="#ffde66">
                                        <LogoVue />
                                    </n-icon>
                                    <span class="ml-12">Vue</span>
                                </div>
                            </template>
                            <p class="project-introduce">是一个面向开源及私有软件项目的托管平台。</p>
                            <p class="project-introduce">开源君，2021-07-04</p>
                        </n-card>
                        <n-card class="project-card-item" hoverable header-style="padding-bottom:0">
                            <template #header>
                                <div class="flex align-start">
                                    <n-icon size="36" color="#ffde66">
                                        <LogoVue />
                                    </n-icon>
                                    <span class="ml-12">Vue</span>
                                </div>
                            </template>
                            <p class="project-introduce">是一个面向开源及私有软件项目的托管平台。</p>
                            <p class="project-introduce">开源君，2021-07-04</p>
                        </n-card>
                        <n-card class="project-card-item" hoverable header-style="padding-bottom:0">
                            <template #header>
                                <div class="flex align-start">
                                    <n-icon size="36" color="#ffde66">
                                        <LogoVue />
                                    </n-icon>
                                    <span class="ml-12">Vue</span>
                                </div>
                            </template>
                            <p class="project-introduce">是一个面向开源及私有软件项目的托管平台。</p>
                            <p class="project-introduce">开源君，2021-07-04</p>
                        </n-card>
                    </div>
                </n-card>
                <div class="mt-12">
                    <n-card
                        title="消息"
                        size="small"
                        content-style="padding-top:0"
                        :segmented="{
                            content: 'hard',
                        }"
                    >
                        <n-list>
                            <n-list-item>
                                <div class="flex align-center">
                                    <n-avatar
                                        round
                                        src="https://jekip.github.io/assets/schoolboy.9f04cdf7.png"
                                    ></n-avatar>
                                    <div class="ml-24">
                                        <p class="message">Ah Ping 刚才把工作台页面随便写了一些，凑合能看了！</p>
                                        <span class="message-tips">
                                            <n-time :time="1634655264236" />
                                        </span>
                                    </div>
                                </div>
                            </n-list-item>
                            <n-list-item>
                                <div class="flex align-center">
                                    <n-avatar
                                        round
                                        src="https://jekip.github.io/assets/schoolboy.9f04cdf7.png"
                                    ></n-avatar>
                                    <div class="ml-24">
                                        <p class="message">Ah Ping 在 开源组 创建了项目 vite-ping-admin？</p>
                                        <span class="message-tips">
                                            <n-time :time="1634655264236" />
                                        </span>
                                    </div>
                                </div>
                            </n-list-item>
                            <n-list-item>
                                <div class="flex align-center">
                                    <n-avatar
                                        round
                                        src="https://jekip.github.io/assets/schoolboy.9f04cdf7.png"
                                    ></n-avatar>
                                    <div class="ml-24">
                                        <p class="message">技术部那几位童鞋，再次警告，不要摸鱼，不要摸鱼，不要摸鱼啦！</p>
                                        <span class="message-tips">
                                            <n-time :time="1634655264236" />
                                        </span>
                                    </div>
                                </div>
                            </n-list-item>
                            <n-list-item>
                                <div class="flex align-center">
                                    <n-avatar
                                        round
                                        src="https://jekip.github.io/assets/schoolboy.9f04cdf7.png"
                                    ></n-avatar>
                                    <div class="ml-24">
                                        <p class="message">上班不摸鱼，和咸鱼有什么区别（这话真不是我说的哈）！</p>
                                        <span class="message-tips">
                                            <n-time :time="1634655264236" />
                                        </span>
                                    </div>
                                </div>
                            </n-list-item>
                        </n-list>
                    </n-card>
                </div>
            </n-gi>
            <n-gi>
                <n-card title="快捷操作" :bordered="false" size="small" content-style="padding:0">
                    <div class="flex flex-wrap project-card">
                        <n-card
                            class="project-card-item"
                            content-style="padding:12px"
                            v-for="(icon, index) in iconsList"
                            :key="index"
                        >
                            <div class="flex justify-center direction-column align-center">
                                <n-icon :size="28" :color="icon.color">
                                    <component :is="icon.icon"></component>
                                </n-icon>
                                <span>{{ icon.title }}</span>
                            </div>
                        </n-card>
                    </div>
                </n-card>
                <div class="mt-12">
                    <n-card>
                        <n-image style="width:100%;height:100%" hidden :src="Business" />
                    </n-card>
                </div>
            </n-gi>
        </n-grid>
    </div>
</template>
<style lang="less" scoped>
@import url("@/styles/permission/system/Workplace.less");
</style>