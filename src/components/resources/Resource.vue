<template>
  <article>
    <Card>
      <header>
        <h3>{{ title }}</h3>
        <Button variant="flat" @click="handleDeleteButtonClick">🗑️</Button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="href">View Resource</a>
      </nav>
    </Card>
  </article>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    href: { type: String, required: true },
  },
  inject: ['removeResource'],
  methods: {
    handleDeleteButtonClick() {
      this.removeResource(this.id);
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
