<template>
  <article class="article">
    <!-- Title -->
    <h1 class="article__title"><slot name="title" /></h1>

    <!-- Banner -->
    <img :src="banner" :alt="title" class="article__banner" />

    <!-- Content -->
    <div class="article__content">
      <slot />
    </div>

    <UiDivider />

    <!-- Tips -->
    <ContentTipInfo />
  </article>
</template>

<script setup>
const slots = useSlots();
const { banner } = defineProps({
  banner: String,
});

const title = computed(() => {
  return slots.title()[0].children;
});

useMeta({
  title,
  meta: [
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:title",
      content: title.value,
    },
    {
      property: "og:image",
      content: banner,
    },
  ],
});
</script>

<style lang="scss">
.article {
  display: block;

  &__banner {
    min-width: 100%;
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 0 0 6px #fff;
    margin-bottom: 14px;
  }
}
</style>
