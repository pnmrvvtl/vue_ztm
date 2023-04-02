let vm = Vue.createApp({
    data() {
        return {
            message: "Hello world!"
        }
    },
    // template: `{{ message }}`,
    beforeCreate() {
        console.log(`beforeCreate function invoked, message = ${this.message}`)
    },
    created() {
        console.log(`created function invoked, message = ${this.message}`)
    },
    beforeMount() {
        console.log(`beforeMount function invoked, message = ${this.message}`)
    },
    mounted() {
        console.log(`mounted function invoked, message = ${this.message}`)
    },
    beforeUpdate() {
        console.log(`beforeUpdate function invoked, message = ${this.message}`)
    },
    updated() {
        console.log(`updated function invoked, message = ${this.message}`)
    },
    beforeUnmount() {
        console.log(`beforeUnmount function invoked, message = ${this.message}`)
    },
    unmounted() {
        console.log(`unmounted function invoked, message = ${this.message}`)
    }
});

vm.component('hello', {
    template: `<h1>{{ message }}</h1>`,
    data() {
        return {
            message: 'Hello component!',
        }
    }
})

vm.mount('#app');

let vm2 = Vue.createApp({
    data() {
        return {
            message: 'Hello World!',
        }
    },
    render() {
        return Vue.h(
            'h1',
            this.message
        )
    }
}).mount('#app2');