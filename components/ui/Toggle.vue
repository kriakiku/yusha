<template>
  <div
    class="toggle"
    tabindex="0"
    :class="{ 'toggle--round': round }"
    @keyup.left.prevent="selectPrev"
    @keyup.right.prevent="selectNext"
  >
    <label
      v-for="(option, i) in options"
      :key="i"
      class="toggle-value"
      :class="{
        'toggle-value--selected': option === modelValue,
      }"
      @click="selectValue(i)"
    >
      <span>{{ option }}</span>
    </label>
    <div
      class="toggle-slider"
      :style="{
        width: width + '%',
        transform: `translateX(${sliderPosition}%)`,
        opacity,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: 'UiToggle',
  props: {
    options: { type: Array as PropType<(string | number)[]>, default: [] },
    round: Boolean,
    modelValue: [String, Number],
  },
  setup(props, { emit }) {
    const activeIndex = ref(0)

    function selectValue(i: number) {
      activeIndex.value = i
      emit('update:modelValue', props.options[i])
    }

    function selectNext() {
      if (!props.options[activeIndex.value + 1]) {
        selectValue(0)
        return
      }

      selectValue(activeIndex.value + 1)
    }

    function selectPrev() {
      if (!props.options[activeIndex.value - 1]) {
        selectValue(props.options.length - 1)
        // selectNext(0)
        return
      }

      selectValue(activeIndex.value - 1)
    }

    const width = computed(() => (100 / props.options.length).toFixed(2))
    const opacity = computed(() =>
      props.options.includes(props.modelValue!) ? 1 : 0,
    )
    const sliderPosition = computed(() => {
      const pos = props.options.findIndex((v) => v === props.modelValue)
      return (pos === -1 ? 0 : pos) * 100
    })

    return {
      selectValue,
      selectNext,
      selectPrev,
      width,
      sliderPosition,
      opacity,
    }
  },
})
</script>

<style lang="less">
@import '~/assets/variables.less';

.toggle {
  min-width: 120px;
  // width: 200px;
  position: relative;
  display: flex;
  background-color: #f1f0f5;
  border-radius: @border-radius-base;
  border: solid 3px #f1f0f5;
  transition: all 0.2s ease-out;

  &:focus {
    box-shadow: 0 0 0 1px @color-primary, 0 0 0 4px fade(@color-primary, 20%);
    outline: none;
  }

  &--round {
    border-radius: @border-radius-round;

    & > .toggle-value {
      &::before {
        width: 0 !important;
      }
    }
  }

  &-value {
    position: relative;
    width: 100%;
    flex-grow: 1;
    text-align: center;
    padding: 6px;
    line-height: 1;
    cursor: pointer;

    &:not(&--selected) {
      color: #6c6781;
    }

    &--selected {
      // color: @color-primary;
      & + .toggle-value::before {
        opacity: 0 !important;
      }
    }

    &:not(:first-of-type) {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 4px;
        bottom: 4px;
        width: 1px;
        transition: all 0.2s ease-out;
        background-color: @color-default-border;
      }
    }

    & > span,
    & > i {
      position: relative;
      z-index: 5;
      font-size: @default-text-size;
      font-weight: 500;
    }
  }

  &-slider {
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    border-radius: inherit;
    transition: inherit;
    box-shadow: rgba(0, 0, 0, 0.17) 0 1px 3px 0;
  }
}
</style>