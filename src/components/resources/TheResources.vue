<template>
  <ResourceList :resources="resources" />
</template>

<script>
import ResourceList from './ResourceList.vue';

export default {
  components: {
    ResourceList,
  },
  data: () => ({
    resources: [
      {
        id: 'official-guide',
        title: 'Official Guide',
        description: 'The official Vue.js documentation.',
        href: 'https://vuejs.org',
      },
      {
        id: 'google',
        title: 'Google',
        description: 'Learn to google...',
        href: 'https://google.org',
      },
    ],
  }),
};
</script>
