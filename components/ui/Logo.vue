<template>
    <NuxtLink to="/" class="logo">
        <img src="/images/logo.png" alt="🥳" class="logo__image" />
        <span class="logo__name">
            Yusha<br />
            Otter
        </span>
    </NuxtLink>
</template>

<style lang="less">
    .logo {
        display: flex;
        text-decoration: none;
        color: unset;
        align-items: center;

        &__image {
            width: 56px;
            height: 56px;
            object-fit: fill;
            margin-right: 12px;
        }

        &__name {
            font-size: 1.2rem;
            font-weight: 700;
            line-height: 1;
            margin-top: -4px;
        }
    }
</style>