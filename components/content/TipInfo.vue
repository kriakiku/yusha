<template>
    <footer class="tip-info">
        <it-button type="primary" block class="tip-info__button">
            Оставить чаевые
        </it-button>
        
        <p class="tip-info__description">А ещё, я ни на что не намекаю, но ты всегда можешь порадовать меня чаевыми 👉👈</p>

        <picture>
            <source srcset="/images/gifs/otter-eats.webp" type="image/webp">
            <img src="/images/gifs/otter-eats.gif" class="tip-info__hero" />
        </picture>
    </footer>
</template>

<style lang="scss">
    .tip-info {
        position: sticky;
        z-index: 10;
        bottom: 0;
        left: 0;
        background-color: var(--surface-color--opacity);
        backdrop-filter: saturate(180%) blur(20px);
        margin: 0 calc(var(--content-padding) * -1);
        padding: calc(var(--content-padding) / 2) var(--content-padding);

        &__button {
            margin: 4px 0 4px 0;
            padding: 12px 10px;
            font-size: 1.1rem;
            z-index: 2;
        }

        &__description {
            text-align: center;
            font-size: 0.9rem;
            line-height: 1;
        }

        &__hero {
            position: absolute;
            z-index: 1;
            top: -32px;
            right: 20px;
            width: 60px;
            height: 60px;
            transform: rotate(4deg);
            pointer-events: none;

            border: 0;
            color: rgba(0, 0, 0, 0);
        }
    }
</style>