<template>
    <ContentArticle banner="/images/photos/hair-styling.jpg">
        <template #title>Как укладывать волосы?</template>

        <!-- Переключатель вида волос -->
        <div class="color-picker">
            <p>В первую очередь — выбери тип своих волос, от этого будут зависеть рекомендации:</p>
            <it-toggle v-model="hairType" :options="hairTypes" />
        </div>


        <p>
            Скоро и тут будет много полезного текста :)
        </p><br />

    </ContentArticle>
</template>

<script setup>
    const hairTypes = ['Каре', 'Длинные', 'Кудрявые']
    const hairType = ref(hairTypes[0])
</script>

<style lang="scss" scoped>
    .color-picker {
        font-size: 0.94rem;
        font-weight: 500;
        margin: 12px 0 24px 0;

        p {
            margin-bottom: 6px;
        }
    }
</style>