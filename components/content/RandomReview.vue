<template>
  <article class="random-review">
    <h2 class="random-review__title">Случайный отзыв</h2>

    <div class="random-review__item" :style="{ '--color': review.color }">
      <!-- Avatar -->
      <div class="random-review__avatar">
        <img
          :src="review.avatar"
          width="42"
          height="42"
          :alt="`Аватарка ${review.author}`"
        />
      </div>

      <div class="random-review__content">
        <div class="random-review__meta">
          <!-- Name -->
          <span class="random-review__author">{{ review.author }}</span>
          <!-- Date -->
          <time :datetime="review.date" class="random-review__date">{{
            new Date(review.date).toLocaleDateString("ru")
          }}</time>
        </div>

        <!-- Text -->
        <p class="random-review__text">{{ review.text }}</p>

        <!-- Rating -->
        <span class="random-review__rating">{{ review.rating }}</span>

        <!-- More -->
      </div>
    </div>

    <p class="random-review__tip">
      Больше отзывов можно прочесть на
      <a
        href="https://n363845.yclients.com/company:346950/master-info:1310559?companyId=346950#reviews"
        target="_blank"
        >yclients</a
      >.
    </p>
  </article>
</template>

<script setup>
const { data: reviews } = await useLazyFetch("/api/reviews", {
  lazy: true,
  server: false,
});
const review = computed(() =>
  reviews.value ? [...reviews.value].sort(() => Math.random() - 0.5)[0] : []
);
</script>

<style lang="scss">
.random-review {
  display: block;
  margin-bottom: 28px;

  &__title {
    margin-bottom: 14px;
  }

  &__tip {
    margin-top: 8px;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1;
  }

  &__item {
    display: flex;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    padding: 16px 16px 12px 12px;
  }

  &__avatar {
    --size: 42px;

    min-width: var(--size);
    max-width: var(--size);
    min-height: var(--size);
    max-height: var(--size);
    border-radius: 50%;
    background-color: var(--color);

    img {
      display: block;
      margin: 0 auto;
      filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.5));
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
    }
  }

  &__meta {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }

  &__author {
    font-weight: 600;
  }

  &__date {
    margin-top: 5px;
    margin-left: auto;
    font-weight: 400;
    font-size: 0.8em;
    line-height: 1;
  }

  &__content {
    flex: 1;
    margin-left: 12px;
  }

  &__text {
    font-size: 0.94rem;
    white-space: pre-wrap;
    hyphens: auto;
  }
}
</style>
