<template>
  <div class="layout">
    <UiLogo />
    <transition name="fade" mode="out-in">
        <main :key="routeName">
            <slot />
        </main>
    </transition>
  </div>
</template>

<script setup>
const { $router } = useNuxtApp()
const routeName = computed(() => $router.currentRoute.value.name)
</script>

<style lang="scss">
    :root {
        --content-padding: 24px;
        
        --primary-color: #3051fe;
        --background-color: #f1f1f4;
        --surface-color: #f6f7fb;
        --surface-color--opacity: #f6f7fb6b;
        --bubble-color: #fcfcfd;

        max-width: 414px;
        margin: 0 auto;
        background-color: var(--background-color);

        // font-family: Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
        // -webkit-font-smoothing: antialiased;
    }

    body {
        margin: 0;
    }

    .layout {
        display: flex;
        flex-direction: column;
        background-color: #f6f7fb;
        padding: var(--content-padding) var(--content-padding) 0 var(--content-padding);

        @media screen and (min-width: 550px) {
            border-radius: 12px;
            box-shadow: 0 0 0 6px #fff;
            margin: 42px 0;
            height: calc(736px - calc(var(--content-padding) * 2));
            
            overflow-x: auto;
            scrollbar-width: none;
            &::-webkit-scrollbar { display: none; }
        }
    }

    .subtitle {
        font-size: 1.1rem;
        font-weight: lighter;
    }

    ol, ul { padding-left: 24px; }
    li { margin-bottom: 6px; }

    a {
        color: var(--primary-color);
        text-decoration: underline dotted;
        text-underline-offset: 3px;
    }

    // p {
    // margin: 0;
    // }

    /** Transition */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>