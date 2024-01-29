<template>
  <article>
    {{ id }}
  </article>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'href'],
};
</script>
