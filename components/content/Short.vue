<template>
    <article class="content-short">
        <!-- Banner -->
        <img :src="banner.src" :alt="banner.alt" class="content-short__banner" />
        <!-- Subtitle -->
        <p class="subtitle"><slot name="subtitle" /></p>
        <!-- Title -->
        <h2 class="content-short__title"><slot name="title" /></h2>
        <!-- Content -->
        <div class="content-short__content">
            <slot />
        </div>
    </article>
</template>

<script setup>
    const props = defineProps({
        banner: Object
    })
</script>

<style lang="scss">
    .content-short {
        position: relative;
        padding-top: 42px;
        text-align: center;

        &__banner {
            position: relative;
            z-index: 2;
            display: block;
            max-width: 192px;
            max-height: 192px;
            margin: 0 auto 12px auto;
        }

        &::before {
            content: "";
            position: absolute;
            z-index: 1;
            top: 34px;
            left: 80px;
            width: 128px;
            height: 128px;
            border-radius: 50%;
            background-color: var(--bubble-color);
        }

        &__title {
            margin: 6px 0;
        }
    }
</style>