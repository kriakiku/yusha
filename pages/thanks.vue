<template>
    <div class="thanks">
        <Head>
            <Title>Спасибо за визит! 😻</Title>
            <Meta name="robots" content="noindex" />
        </Head>

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

<style lang="scss">
    .thanks {
        display: block;
    }
</style>