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
        id="5597374"
        v-model:selected="selected"
      >
        <template #title>Стрижка с укладкой</template>
        <template #price>850 ₽</template>
        <template #duration>1 час</template>
      </ContentBookItem>

      <ContentBookItem
        :icon="{
          src: '/images/icons/brush.png',
          alt: '👩‍🎨',
          color: '#eeecfb',
        }"
        id="5597497"
        v-model:selected="selected"
      >
        <template #title>Цветное окрашивание</template>
        <template #price>2 100 — 3 000 ₽<sup>1</sup></template>
        <template #duration>~4 часа</template>
      </ContentBookItem>

      <ContentBookItem
        :icon="{
          src: '/images/icons/confetti.png',
          alt: '🎉',
          color: '#f9d5f9',
        }"
        id="7973290"
        v-model:selected="selected"
      >
        <template #title>Тонирование</template>
        <template #price>1 000 ₽<sup>2</sup></template>
        <template #duration>~1:30 часа</template>
      </ContentBookItem>
    </div>

    <UiButton type="primary" block :href="link">
      Продолжить
      <span class="book__button-info"> — выбрано {{ selected.length }}</span>
    </UiButton>

    <div class="book__tip">
      <div>
        <sup>1</sup> — Конечная стоимость цветного окрашивания будет зависить от
        сложности работы, а так же от длинны и густоты волос.
      </div>
      <div>
        <sup>2</sup> — Тонирование это обновление оттенка/цвета ранее
        осветленных волос.
      </div>
    </div>
  </article>
</template>

<script setup>
const selected = ref([]);

const link = computed(
  () =>
    `https://n363845.yclients.com/company:346950/idx:0/date?o=m1310559s${selected.value.join(
      ","
    )}`
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

  &__button-info {
    font-size: 0.9em;
    font-weight: 300;
    margin-left: 6px;
    opacity: 0.8;
    margin-top: 1px;
  }
}
</style>
