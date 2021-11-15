<template>
    <article class="recomendations">
        <h2 class="recomendations__title" v-if="title">Рекомендации по уходу за волосами</h2>
        <div class="recomendations__content" ref="content">
            <div class="recomendations__list">

                <!-- Уход -->
                <ContentRecomendationsItem 
                    to="/article/care-for-colored-hair"
                    banner="/images/photos/colored-hairs.jpg"
                >
                    <template #title>Уход за окрашенными волосами</template>
                    <template #description>
                        <p>
                            Скорее всего в процессе работы мы уже обсудили основные моменты по уходу за волосами, но ты всегда можешь посмотреть их ещё раз 🙃.
                        </p>
                    </template>
                </ContentRecomendationsItem>

                <!-- Укладка волос -->
                <ContentRecomendationsItem 
                    to="/article/hair-styling"
                    banner="/images/photos/hair-styling.jpg"
                >
                    <template #title>Как укладывать волосы?</template>
                    <template #description>
                        <p>
                            Скажи правду, ты запомнил(-а) хоть что-то из того, что я тебе рассказал 😏? Давай ещё раз повторим что куда и чем!
                        </p>
                    </template>
                </ContentRecomendationsItem>

                <!-- Безопасное простраство -->
                <ContentRecomendationsItem 
                    to="/article/safe-space"
                    banner="/images/photos/safe-space.jpg"
                >
                    <template #title>Безопасное пространство</template>
                    <template #description>
                        <p>
                            И помни, в уходе нуждаются не только волосы, но и твоё эмоциональное здоровье. 
                            Твоя задача — позаботиться о себе, а о волосах позабочусь Я 😘!
                        </p>
                    </template>
                </ContentRecomendationsItem>
            </div>
        </div>
    </article>
</template>

<script setup>
    const { title = false } = defineProps({
        title: [Boolean, String]
    })

    const content = ref(null)

    useDragScroll(content)
</script>

<style lang="scss">
    .recomendations {
        display: block;

        &__title {
            font-size: 1.1rem;
            font-weight: normal;
        }

        &__content {
            margin: 0 calc(var(--content-padding) * -1);
            padding: calc(var(--content-padding) / 2) var(--content-padding);

            cursor: grab;
            overflow-y: auto;
            scrollbar-width: none;
            &::-webkit-scrollbar { display: none; }
        }

        &__list {
            width: calc(264px * 3);
        }
    }
</style>
