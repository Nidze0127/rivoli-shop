<template>
  <RouterLink :to="route" class="pageLink flex gap-1 w-fit hover:text-green-100" :class="{ 'mt-12': hasMargin }">
    <span class="uppercase duration-75">{{ text }}</span>
    <img src="@/assets/icons/link-arrow.svg" width="12" height="6" class="linkArrow mt-1" alt="" />
    <img src="@/assets/icons/link-arrow-hover.svg" width="12" height="6" class="linkArrowHover mt-1" alt="" />
  </RouterLink>
</template>

<script setup lang="ts">
type Route = {
  name: string
  params?: { id: string }
}

defineProps<{
  route: Route
  text: string
  hasMargin?: boolean
}>()
</script>

<style scoped>
.linkArrowHover {
  display: none;
}

.pageLink:hover .linkArrow {
  display: none;
}

.pageLink:hover .linkArrowHover {
  display: block;
}
</style>
