<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-control">
      <label for="title">Title</label>
      <input id="title" name="title" ref="title" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows="3"
        ref="description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="href">Link</label>
      <input id="href" name="href" type="url" ref="href" />
    </div>
    <div>
      <Button type="submit">Create Resource</Button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
