<template>
  <span class="font-semibold rounded-full text-neutral-900" :class="[color, size]">
    <slot />
  </span>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      validator: function (value) {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      },
      default: "md"
    }
  }
}
</script>
