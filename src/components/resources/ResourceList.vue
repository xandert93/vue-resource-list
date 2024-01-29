<template>
  <div>
    <Resource
      v-for="resource in resources"
      :key="resource.id"
      v-bind="resource"
    />
  </div>
</template>

<script>
import Resource from '../resources/Resource.vue';

export default {
  components: {
    Resource,
  },
  props: {
    resources: {
      type: Array,
    },
  },
};
</script>

<style scoped>
div {
  margin: auto;
  max-width: 40rem;
}
</style>
