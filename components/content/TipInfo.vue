<template>
  <footer class="tip-info" :class="`tip-info--${position}`">
    <UiButton
      type="primary"
      block
      class="tip-info__button"
      href="https://pay.cloudtips.ru/p/165f6153"
      target="_blank"
    >
      Оставить чаевые
    </UiButton>

    <p class="tip-info__description">
      А ещё, я ни на что не намекаю, но ты всегда можешь порадовать меня чаевыми
      👉👈
    </p>

    <picture>
      <source srcset="/images/gifs/otter-eats.webp" type="image/webp" />
      <img src="/images/gifs/otter-eats.gif" class="tip-info__hero" />
    </picture>
  </footer>
</template>

<script setup>
const { position } = defineProps({
  position: { 
    type: String,
    default: 'sticky'
  },
});
</script>

<style lang="less">
.tip-info {
  margin: 0 calc(var(--content-padding) * -1);
  padding: calc(var(--content-padding) / 2) var(--content-padding);

  &--sticky {
    position: sticky;
    z-index: 10;
    bottom: 0;
    left: 0;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: var(--surface-color--opacity);
  }

  &--static {
    position: relative;
    background-color: var(--surface-color);
  }

  .it-btn {
    margin: 4px 0 4px 0;
    padding: 12px 10px;
    font-size: 1.1rem;
    z-index: 2;

    background-image: linear-gradient(
      to right,
      rgb(0, 198, 255) 0%,
      rgb(0, 114, 255) 50%
    );
    background-size: 140% auto;
    transition: 0.5s;

    &:hover {
      background-position: 40%;
    }
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
