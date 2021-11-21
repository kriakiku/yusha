<template>
    <div class="thanks">
        <!-- Баннер -->
        <ContentShort :banner="{ src: '/images/icons/message.png', alt: '☕️' }">
            <template #subtitle>Елена</template>
            <template #title>Спасибо за визит! 😼</template>
            <p>Я подготовил для тебя несколько рекомендаций по уходу за волосами:</p><br />
        </ContentShort>

        <!-- Рекомендации -->
        <ContentRecomendations />

        <!-- Чаевые -->
        <ContentTipInfo />
    </div>
</template>

<script setup>
const recordId = "343710254";

useMeta({
  title: "Спасибо за визит! 😻",
  meta: [
    {
      name: "robots",
      content: "noindex",
    },
  ],
});
</script>

<style lang="scss">
    .thanks {
        display: block;
    }
</style>