<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  unmounted() {
    console.log('home unmounted')
  },
  activated() {
    console.log('home activated')
  },
  deactivated() {
    console.log('home deactivated')
  }
}
</script>