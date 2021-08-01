<template>
  <div>
    <Nav></Nav>
    <body class="text-center">
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please login in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          class="form-control"
          v-model="email"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          placeholder="Password"
          required
        />
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          @click="login"
        >
          log in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; bappy-2020</p>
      </form>
    </body>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import axios from "axios";
export default {
  name: "Login",
  components: {
    Nav,
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:5000/login", user).then(
        (res) => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/");
          }
        },
        (err) => {
          console.log(err.response);
          this.error = err.response.data.error;
        }
      );
    },
  },
};
</script>

<style scoped>
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
