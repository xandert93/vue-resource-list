<template>
  <article>
    <Card>
      <header>
        <h3>{{ title }}</h3>
        <Button variant="flat" @click="deleteResource(id)">🗑️</Button>
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
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

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
