<template>
  <div class="navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <router-link to="/" class="navbar-brand">Home</router-link>

      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/reg" class="nav-link">Registration </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.navbar {
  width: 1300px;
}
</style>
