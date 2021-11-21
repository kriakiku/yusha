<template>
  <article class="book">
    <h2 class="book__title">Записаться на красоту</h2>

    <div class="book__list">
      <ContentBookItem
        :icon="{
          src: '/images/icons/scissors.png',
          alt: '✂️',
          color: '#fef6eb',
        }"
      >
        <template #title>Стрижка с укладкой</template>
        <template #price>850 ₽</template>
        <template #duration>1 час</template>
      </ContentBookItem>

      <ContentBookItem
        :icon="{ src: '/images/icons/brush.png', alt: '👩‍🎨', color: '#eeecfb' }"
      >
        <template #title>Цветное окрашивание</template>
        <template #price>2 100 — 3 000 ₽<sup>1</sup></template>
        <template #duration>~4 часа</template>
      </ContentBookItem>
    </div>

    <UiButton type="primary" block :href="link"> Продолжить </UiButton>

    <div class="book__tip">
      <sup>1</sup> — Конечная стоимость цветного окрашивания будет зависить от
      сложности работы, а так же от длинны и густоты волос.
    </div>
  </article>
</template>

<script setup>
const link = computed(
  () => `https://n363845.yclients.com/company:346950?o=m1310559`
);
</script>

<style lang="less">
.book {
  display: block;
  margin: 50px 0 50px 0;

  &__title {
    margin-bottom: 14px;
  }

  &__tip {
    display: block;
    font-size: 0.84rem;
    line-height: 1;
    margin-top: 8px;
  }
}
</style>
