<template>
    <section class="skills" >
        <h2>Skills</h2>
        <div class="layout-selector container">
            <button @click="handleLayout(ListLayout)" ><v-icon name="bi-list-ul" scale="1.3"/></button>
            <button @click="handleLayout(CardLayout)" ><v-icon name="bi-card-text" scale="1.3"/></button>
            <button @click="handleLayout(ProgressbarLayout)" ><v-icon name="bi-graph-up" scale="1.2"/></button>
        </div>
        <component :is="layout" :content="skills" />
    </section>
</template>

<script setup>
    import { ref, defineAsyncComponent } from 'vue';

    const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
    const ProgressbarLayout = defineAsyncComponent(() => import('@/layouts/ProgressbarLayout.vue'))
    const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))
    const layout = ref(ListLayout)

    const handleLayout = (component) => {
        layout.value = component
    }  

    const skills = ref([
        {
            id: 1,
            name: "HTML",
            img: "fullstack",
            knowledge: 90,
        },
        {
            id: 2,
            name: "CSS",
            img: "fullstack",
            knowledge: 80,
        },
        {
            id: 3,
            name: "JS",
            img: "fullstack",
            knowledge: 60,
        },
    ])
</script>

<style scoped lang="scss">
    .skills {
        background-color: var(--bg-secondary-color);

        .layout-selector {
            text-align: left;

            button{
                background: none;
                box-shadow: none;
            }
        }
    }

</style>