<template>
  <Card class="buttons-card">
    <Button
      @click="handleResourceListButtonClick"
      :variant="resourceListButtonVariant"
      >Resource List</Button
    >
    <Button
      @click="handleResourceCreatorButtonClick"
      :variant="resourceCreatorButtonVariant"
      >+</Button
    >
  </Card>

  <keep-alive>
    <component :is="activeTab" />
  </keep-alive>
</template>

<script>
import ResourceList from './ResourceList.vue';
import ResourceCreator from './ResourceCreator.vue';

const initialResources = [
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
];

export default {
  components: {
    ResourceList,
    ResourceCreator,
  },
  computed: {
    resourceListButtonVariant() {
      return this.activeTab === 'resource-list' ? null : 'flat';
    },
    resourceCreatorButtonVariant() {
      return this.activeTab === 'resource-creator' ? null : 'flat';
    },
  },
  data: () => ({
    activeTab: 'resource-list',
    resources: initialResources,
  }),
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    handleResourceListButtonClick() {
      this.activeTab = 'resource-list';
    },
    handleResourceCreatorButtonClick() {
      this.activeTab = 'resource-creator';
    },
    addResource(newResource) {
      this.resources.unshift(newResource);
      this.activeTab = 'resource-list';
    },
    removeResource(id) {
      const index = this.resources.findIndex((r) => r.id === id);
      this.resources.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.buttons-card {
  display: flex;
  gap: 8px;
}
</style>
