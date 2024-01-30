<template>
  <Card>
    <ResourceCreateForm @submit.prevent="handleSubmit" />
  </Card>
  <ResourceCreatorDialog v-if="isDialogOpen" @close="closeDialog" />
</template>

<script>
import ResourceCreateForm from './ResourceCreateForm.vue';
import ResourceCreatorDialog from './ResourceCreatorDialog.vue';

export default {
  components: {
    ResourceCreateForm,
    ResourceCreatorDialog,
  },

  inject: ['addResource'],
  data() {
    return {
      isDialogOpen: false,
    };
  },
  methods: {
    closeDialog() {
      this.isDialogOpen = false;
    },

    handleSubmit(e) {
      // could do `const title = this.$refs.title.value` etc...

      const formData = new FormData(e.target);

      const { title, description, href } = Object.fromEntries(formData);
      const newResource = { title, description, href };

      const isValid = Object.values(newResource).every(
        (val) => val.trim() !== ''
      );

      if (!isValid) this.isDialogOpen = true;
      else this.addResource({ id: title, ...newResource });
    },
  },
};
</script>
