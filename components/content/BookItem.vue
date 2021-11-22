<template>
  <div class="book-item">
    <div class="book-item__inner" @click="toggle" role="button">
      <div class="book-item__icon" :style="{ '--color': icon.color }">
        <img :src="icon.src" :alt="icon.alt" width="44" height="44" />
      </div>
      <div class="book-item__content">
        <!-- Title -->
        <strong class="book-item__title">
          <slot name="title" />
        </strong>
        <!-- Price -->
        <div class="book-item__price"><slot name="price" /></div>
        <!-- Selected -->
        <div
          class="book-item__selected"
          :class="{ 'book-item__selected--active': isSelected }"
        >
          ✅ Выбрано
        </div>
        <!-- Duration -->
        <span class="book-item__duration">
          <slot name="duration" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { icon, id, selected } = defineProps({
  icon: Object,
  id: [String, Number],
  selected: Array,
});

const isSelected = computed(() => selected.includes(id));

const emit = defineEmits(["update:select"]);

const toggle = () => {
  if (isSelected.value) {
    const index = selected.indexOf(id);
    if (index > -1) {
      selected.splice(index, 1);
    }
  } else {
    // Incongruous values
    const incongrouValues = ["5597497", "7973290"];

    if (incongrouValues.includes(id)) {
      for (const id of incongrouValues) {
        const index = selected.indexOf(id);
        if (index > -1) {
          selected.splice(index, 1);
        }
      }
    }

    selected.push(id);
  }

  emit("update:selected", selected);
};
</script>

<style lang="less">
.book-item {
  margin-bottom: 14px;

  &__inner {
    display: flex;
    background-color: var(--bubble-color);
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 12px;
    cursor: pointer;
  }

  &__icon {
    --size: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: var(--color);
    min-width: var(--size);
    max-width: var(--size);
    min-height: var(--size);
    max-height: var(--size);
    margin-right: 12px;

    img {
      object-fit: contain;
    }
  }

  &__content {
    flex: 1;
    position: relative;
    padding-right: 30px;
  }

  &__title {
    display: block;
    margin-bottom: 2px;
    font-weight: 500;
    font-size: 1.1rem;
  }

  &__duration {
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: 300;
    font-size: 1rem;
  }

  &__selected {
    color: darken(#07d85b, 20%);
    opacity: 0;
    margin-left: 8px;
    transition: all 200ms;

    &--active {
      opacity: 1;
      margin-left: 0;
    }
  }
}
</style>
