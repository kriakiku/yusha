<template>
    <ContentArticle banner="/images/photos/colored-hairs.jpg">
        <template #title>Уход за окрашенными волосами</template>

        <!-- Переключатель цвета волс -->
        <div class="color-picker">
            <p>В первую очередь — выбери тип своего окрашивания, это повлияет на рекомендацию:</p>
            <UiToggle v-model="colorType" :options="colorTypes" />
        </div>

        <!-- Цветное окрашивание -->
        <div v-if="colorType === colorTypes[0]">
            <p>У меня для тебя есть пару советов, по сохранению цвета!</p>
            <ol>
                <li>Не мыть голову 72 часа, если очень нужно помыть, то тогда только через 48 часов после окрашивания 🚿.</li>
                <li>Можно пользоваться сухим шампунем.</li>
                <li>Лучшего всего мыть голову чуть прохладной водой или чуть тёплой 💆.</li>
                <li>Пользоваться проф. косметикой, никакого мас-маркета. Шампунь не должен быть «восстанавливающим/питательным/укрепляющим». Лучше всего подходят шампуни, бальзам и маска «без сульфатов/для окрашивания/увлажняющие».</li>
                <li>Хлорированная и горячая вода, море, масло хорошо вымывают цвет, а так же бани и сауны 📛.</li>
            </ol>
        </div>

        <!-- Блонд -->
        <div v-if="colorType === colorTypes[1]">
            <p>У меня для тебя есть пару советов, по сохранению цвета!</p>
            <ol>
                <li>Не мыть голову 72 часа, если очень нужно помыть, то тогда только через 48 часов после окрашивания 🚿.</li>
                <li>Можно пользоваться сухим шампунем.</li>
                <li>Лучшего всего мыть голову чуть прохладной водой или чуть тёплой 💆.</li>
                <li>Пользоваться проф. косметикой, никакого мас-маркета. Шампунь не должен быть «восстанавливающим/питательным/укрепляющим». Лучше всего подходят шампуни, бальзам и маска «без сульфатов/для окрашивания/увлажняющие».</li>
                <li>Не пользоваться первые 2 недели после окрашивания фиолетовым шампунем. Пользоваться им 1 раз 1-2 недели чередуя его с шампунем что перечислены выше ☝️.</li>
                <li>Хлорированная и горячая вода, море, масло хорошо вымывают цвет, а так же бани и сауны 📛.</li>
            </ol>
        </div>

        <UiDivider />

        <p>Если у тебя остались вопросы, то ты смело можешь задать их мне в директ Instagram'a — <a href="https://www.instagram.com/yusha.otter/">@yusha.otter</a>.</p>


    </ContentArticle>
</template>

<script setup>
    const colorTypes = ['🧑‍🎤 Цветное', '👩‍🦳 Блонд и пепел']
    const colorType = ref(colorTypes[0])
</script>

<style lang="less">
    .color-picker {
        font-size: 0.94rem;
        font-weight: 500;
        margin: 12px 0 24px 0;

        p {
            margin-bottom: 6px;
        }
    }
</style>