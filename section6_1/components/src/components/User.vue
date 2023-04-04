<template>
  <p>The user is {{ age }} years old.</p>
  <button type="button" @click="onClickAge">Update Age From User</button>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  emits: ["age-update"],
  methods: {
    onClickAge() {
      this.$emit('age-update', 3);
    }
  }
}
</script>

<style scoped>

</style>