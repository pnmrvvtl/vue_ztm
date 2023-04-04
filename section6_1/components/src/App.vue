<template>
  <h3>Hello from App</h3>

  <!--  <button type="button" @click="updateAge">Update age</button>-->

  <greeting :age="age"></greeting>
  <user :age="age" @age-update="updateAge"></user>
</template>

<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";

export default {
  data() {
    return {
      age: 20
    }
  },
  methods: {
    updateAge(num) {
      this.age += num;
    }
  },
  name: "App",
  components: {
    Greeting,
    User
  }
}
</script>

