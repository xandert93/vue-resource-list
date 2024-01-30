<template>
  <Dialog title="Invalid Input">
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
    </template>
    <!-- <template #actions>
      <Button @click="handleCloseButtonClick">Okay</Button>
    </template> -->
  </Dialog>
</template>

<script>
import Dialog from '../ui/Dialog.vue';

export default {
  components: { Dialog },
  props: ['closeDialog'],
  // methods: {
  //   handleCloseButtonClick() {
  //     this.$emit('close');
  //   },
  // },
};
</script>
