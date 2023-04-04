<template>
  <p>The user is {{ age }} years old.</p>
  <button type="button" @click="onClickAge">Update Age From User By Event</button>
  <button type="button" @click="ageChangeFn(3)">Update Age From User By Callback</button>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      // required: true,
      // default: 20,
      validator(value) {
        return value < 130;
      }
    },
    ageChangeFn: Function
  },
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