<template>
    <section id="skills" class="skills" >
        <h2>Skills</h2>
        <div class="layout-selector container pb-3">
            <button 
                @click="handleLayout(ListLayout)" 
                aria-label="Cambia al diseño de lista">
                <v-icon name="bi-list-ul" scale="1.3"/>
            </button>
            <button 
                @click="handleLayout(CardLayout)" 
                aria-label="Cambia al diseño de cartas">
                <v-icon name="bi-card-text" scale="1.3"/>
            </button>
            <button 
                @click="handleLayout(ProgressbarLayout)" 
                aria-label="Cambia al diseño de barras progresivas">
                <v-icon name="bi-graph-up" scale="1.2"/>
            </button>
        </div>
        <Transition class="content" name="fade" mode="out-in">
            <component :is="layout" :content="skills" />
        </Transition>
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
            icon: "fa-html5",
            iconColor: '#df673b',
            knowledge: 90,
        },
        {
            id: 2,
            name: "CSS",
            icon: "fa-css3-alt",
            iconColor: '#29a1db',
            knowledge: 80,
        },
        {
            id: 3,
            name: "Bootstrap",
            icon: "fa-bootstrap",
            iconColor: '#8711f9',
            knowledge: 80,
        },
        {
            id: 4,
            name: "JavaScript",
            icon: "fa-js",
            iconColor: '#f5d61e',
            knowledge: 60,
        },
        {
            id: 5,
            name: "VUE",
            icon: "vi-file-type-vue",
            iconColor: '#3bb07c',
            knowledge: 70,
        },
        {
            id: 6,
            name: "React",
            icon: "fa-react",
            iconColor: '#5ed3f3',
            knowledge: 40,
        },
        {
            id: 7,
            name: "PHP",
            icon: "co-php",
            iconColor: '#6578b0',
            knowledge: 60,
        },
        {
            id: 8,
            name: "Laravel",
            icon: "fa-laravel",
            iconColor: '#ee2b1f',
            knowledge: 50,
        },
        {
            id: 9,
            name: "MySQL",
            icon: "si-mysql",
            iconColor: '#4d7a99',
            knowledge: 70,
        },
    ])
</script>

<style scoped lang="scss">
    .skills {
        background-color: var(--bg-secondary-color);

        .layout-selector {
            text-align: center;

            button{
                background: none;
                box-shadow: none;
            }
        }
    }

    .content {
      padding-bottom: var(--large-spacing);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

</style>