<template>
  <div class="check-in">
    <!-- Баннер -->
    <ContentShort :banner="{ src: '/images/icons/calendar.png', alt: '📅' }">
      <template #subtitle>Елена</template>
      <template #title>Спасибо за запись! 🥳</template>
      <p>
        Привет, с нетерпением жду нашу встречу! Для твоего удобства я подготовил
        <a href="#">напоминание в календарь</a>, а так же пару рекомендаций:
      </p>
      <br />
    </ContentShort>

    <!-- Управление записью -->
    <div class="check-in__control">
      <UiButton
        :href="`https://n363845.yclients.com/company:346950/profile/record/${recordId}`"
        type="black"
        block
        target="_blank"
      >
        Управление записью
      </UiButton>
      <p class="check-in__tip">
        Если ты понимаешь, что передумал(-а) или не сможешь прийти — пожалуйста
        отмени запись по ссылке выше или по телефону
        <a href="tel:+78124073424">+7(812)407-34-24</a>
        либо через
        <a href="https://www.instagram.com/osipov_rubik/" target="_blank"
          >Direct</a
        >
        в Instagram. Это позволит мне чуть дольше понежиться в постели, или уйти
        домой раньше 😥.
      </p>
    </div>
  </div>
</template>

<script setup>
const recordId = "343710254";

useMeta({
  title: "Чекин 😻",
  meta: [
    {
      name: "robots",
      content: "noindex",
    },
  ],
});
</script>

<style lang="less">
.check-in {
  display: block;

  &__tip {
    text-align: center;
    font-size: 0.9rem;
    line-height: 1;
    margin-top: 8px;
  }

  &__control {
    position: sticky;
    z-index: 10;
    bottom: 0;
    left: 0;
    background-color: var(--surface-color--opacity);
    backdrop-filter: saturate(180%) blur(20px);
    margin: 0 calc(var(--content-padding) * -1);
    padding: calc(var(--content-padding) / 2) var(--content-padding);
  }
}
</style>
