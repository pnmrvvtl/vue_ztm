<template>
  <div class="result">
    <div class="title">
      {{ results[resultIndex].title }}
    </div>
    <div class="desc">
      {{ results[resultIndex].desc }}
    </div>
  </div>

</template>

<script>
export default {
  props: ['results', 'totalCorrect'],
  computed: {
    resultIndex() {
      let index = 0;
      this.results.forEach((item, idx) => {
        if (item.min <= this.totalCorrect && item.max >= this.totalCorrect) {
          index = idx;
        }
      })
      return index;
    }
  }
}
</script>

<style scoped>

</style>