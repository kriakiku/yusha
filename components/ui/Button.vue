<template>
  <button v-if="!to && !href" class="it-btn" :class="rootClasses">
    <span v-if="$slots.default" class="it-btn-text">
      <slot />
    </span>
  </button>
  <NuxtLink v-if="to" :to="to" class="it-btn" :class="rootClasses">
    <span v-if="$slots.default" class="it-btn-text">
      <slot />
    </span>
  </NuxtLink>
  <a v-if="href" :href="href" class="it-btn" :class="rootClasses">
    <span v-if="$slots.default" class="it-btn-text">
      <slot />
    </span>
  </a>
</template>

<script setup lang="ts">
const Sizes = useSizes();
const Colors = useColors();

const { type, size, block, to, href } = defineProps({
  type: { type: String },
  size: { type: String },
  block: { type: Boolean },
  to: { type: String },
  href: { type: String },
});

const rootClasses = computed(() => [
  {
    "it-btn--block": block,
    [`it-btn--${size || Sizes.NORMAL}`]: true,
    [`it-btn--${type || Colors.NEUTRAL}`]: true,
  },
]);
</script>

<style lang="less">
@import "~/assets/variables.less";

.set-button-type (@bg-color) {
  background-color: @bg-color;
  box-shadow: 0 2px 4px fade(@bg-color, 40%);
  border: 1px solid @bg-color;

  &:hover {
    background-color: tint(@bg-color, 16%);
    border: 1px solid tint(@bg-color, 16%);
  }

  &:active {
    background-color: darken(@bg-color, 7%);
    border: 1px solid darken(@bg-color, 7%);
    box-shadow: none;
  }

  &:focus {
    box-shadow: 0 2px 4px fade(@bg-color, 40%), 0 0 0 3px fade(@bg-color, 20%);
  }

  &.it-btn--text {
    color: @bg-color;
    background: transparent;
    border: none;
    text-shadow: none;
    box-shadow: none;
  }

  &.it-btn--text:hover {
    background-color: fade(@bg-color, 6%);
  }

  &.it-btn--text:focus {
    box-shadow: 0 0 0 3px fade(@bg-color, 20%);
  }

  &.it-btn--text:active {
    background-color: fade(@bg-color, 20%);
    box-shadow: none;
  }
}

.it-btn {
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  font-family: inherit;
  align-items: center;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.07);
  color: #fff;
  font-weight: 500;
  font-size: @default-text-size;
  line-height: 1;
  border: 0;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: @border-radius-base;
  padding: 8px 20px;
  outline: none;
  user-select: none;
  text-decoration: none;

  &-text,
  > i {
    vertical-align: middle;
  }

  &-text {
    display: flex;
  }

  &--block {
    width: 100%;
  }

  &--primary {
    .set-button-type(@color-primary);
  }

  &--success {
    .set-button-type(@color-success);
  }

  &--warning {
    .set-button-type(@color-warning);
  }

  &--danger {
    .set-button-type(@color-danger);
  }

  &--black {
    .set-button-type(@color-secondary-black);
  }

  &--neutral {
    color: @color-black;
    border: 1px solid #c1ccd9;
    box-shadow: #e4e7eb 0 1px 1px 0;
    text-shadow: none;
    box-sizing: border-box;
    background-color: #fff;

    &:focus {
      border: 1px solid #a6b0bb;
      box-shadow: #e4e7eb 0 1px 1px 0, 0 0 0 3px fade(#a6b0bb, 20%);
    }

    &:active {
      background-color: @color-disabled-bg;
    }

    circle {
      stroke: rgb(193, 204, 217);
    }

    &.it-btn--text {
      color: @color-black;
      background: transparent;
      border: none;
      text-shadow: none;
      box-shadow: none;
    }

    &.it-btn--text:hover {
      background-color: fade(@color-black, 6%);
    }

    &.it-btn--text:focus {
      box-shadow: 0 0 0 3px fade(#a6b0bb, 20%);
    }

    &.it-btn--text:active {
      background-color: fade(@color-black, 20%);
      box-shadow: none;
    }

    &:disabled {
      circle {
        stroke: @color-disabled-border;
      }
    }
  }

  &--big {
    padding: 14px 28px;
    font-size: 16px;
  }

  &--small {
    padding: 5px 14px;
  }
}
</style>
