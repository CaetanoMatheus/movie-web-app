<template>
  <h2 class="h3 text-default-dark">
    <font-awesome-icon v-if="this.icon" :class="`text-${this.iconColor}`" :icon="this.icon" />
    {{ this.title }}
  </h2>
</template>

<script>
export default {
  props: ['title', 'icon', 'iconColor'],
}
</script>
