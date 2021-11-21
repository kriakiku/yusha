<template>
  <NuxtLink :to="to" class="recomendations-item">
    <img :src="banner" :alt="title" class="recomendations-item__banner" />
    <div class="recomendations-item__content">
      <h3 class="recomendations-item__title"><slot name="title" /></h3>
      <div class="recomendations-item__description">
        <slot name="description" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const slots = useSlots();
const { to, banner } = defineProps({
  to: [String, Object],
  banner: String,
});

const title = computed(() => {
  return slots.title()[0].children;
});
</script>

<style lang="less">
.recomendations-item {
  display: inline-block;
  min-width: 250px;
  max-width: 250px;
  min-height: 300px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  color: unset;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-right: 14px;

  user-select: none;
  -webkit-app-region: no-drag;

  &__banner {
    max-width: 100%;
    height: 140px;
    object-fit: cover;
  }

  &__content {
    padding: 8px 14px;
  }

  &__title {
    margin: 0 0 4px;
  }

  &__description {
    font-size: 0.88rem;
  }
}
</style>
