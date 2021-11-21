<template>
  <article>
    <ContentBook />

    <!-- <UiLottie
      :content="sticker"
      :width="192"
      :height="192"
      loop
      style="margin: 30px auto 60px"
    /> -->

    <!-- <NuxtLink to="/thanks" style="text-decoration: none">
      <UiButton type="black" block
        >Перейти на страницу<br />
        «Спасибо за визит!»</UiButton
      >
    </NuxtLink> -->

    <!-- <br /><br /> -->

    <ContentRecomendations with-title />
    <ContentRandomReview />
  </article>
</template>

<script setup>
import sticker from "~/assets/stickers/otter-love.json";

useMeta({
  title: "Yusha Otter — Твой стилист 😼",
});
</script>
