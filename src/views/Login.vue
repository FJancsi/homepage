<template>
  <div class="login">
    <form @submit.prevent="login">
      <div>
        <h3>Log in</h3>
        <div>{{error}}</div>
        <section>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" required placeholder="Email" v-model="email" />
        </section>
        <section>
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
            v-model="password"
          />
        </section>
        <div>
          <button type="submit">Log in</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login: function() {
      const info = {
        email: this.email,
        password: this.password
      };

      Firebase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            this.$router.push("home");
          },
          error => {
            this.error = error.message;
          }
        );
    }
  }
};
</script>
