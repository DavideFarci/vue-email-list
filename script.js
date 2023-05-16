const app = Vue.createApp({
    data() {
        return {
            arrEmail: [],
        };
    },
    methods: {
        getTenEmail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(serverResponse => this.arrEmail.push(serverResponse.data.response));
            };
        }
    },
    created() {
        this.getTenEmail();
    },
});

app.mount('#app');


