const { createApp } = Vue;

createApp({
  data() {
    return {
      mailList: [],
      isLoading: false,
    };
  },
  methods: {
    generateEmails: function () {
      this.isLoading = true;
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((genEmail) => {
            this.mailList.push(genEmail.data.response);
            this.isLoading = false;
            console.log(genEmail);
          });
      }
    },
  },
}).mount("#app");
