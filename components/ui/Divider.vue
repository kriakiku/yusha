<template>
  <div
    class="divider"
    :class="{
      'divider--horizontal': !vertical,
      'divider--vertical': vertical,
    }"
    role="separator"
  ></div>
</template>

<script setup>
const { vertical } = defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="less">
.divider {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: var(--border-color);

  &--horizontal {
    display: block;
    clear: both;
    width: 100%;
    min-width: 100%;
    height: 1px;
    margin: 16px 0;
  }

  &--vertical {
    position: relative;
    top: -0.06em;
    display: inline-block;
    width: 1px;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
  }
}
</style>
