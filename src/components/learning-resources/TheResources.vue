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
import Resource from './Resource.vue';

export default {
  components: {
    Resource,
  },
  data: () => ({
    resources: [{ id: '001' }, { id: '002' }],
  }),
};
</script>
