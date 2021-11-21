<template>
  <div class="book-item">
    <div class="book-item__inner">
      <div class="book-item__icon" :style="{ '--color': icon.color }">
        <img :src="icon.src" :alt="icon.alt" width="44" height="44" />
      </div>
      <div class="book-item__content">
        <!-- Title -->
        <strong class="book-item__title">
          <slot name="title" />
        </strong>
        <!-- Meta -->
        <div class="book-item__meta">
          <!-- Price -->
          <span><slot name="price" /></span>
        </div>
        <!-- Duration -->
        <span class="book-item__duration"><slot name="duration" /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { icon } = defineProps({
  icon: Object,
});
</script>

<style lang="less">
.book-item {
  margin-bottom: 14px;

  &__inner {
    display: flex;
    background-color: var(--bubble-color);
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 12px;
    cursor: pointer;
  }

  &__icon {
    --size: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: var(--color);
    min-width: var(--size);
    max-width: var(--size);
    min-height: var(--size);
    max-height: var(--size);
    margin-right: 12px;

    img {
      object-fit: contain;
    }
  }

  &__content {
    flex: 1;
    position: relative;
    padding-right: 30px;
  }

  &__title {
    display: block;
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 1.1rem;
  }

  &__duration {
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: 300;
    font-size: 1rem;
  }
}
</style>
