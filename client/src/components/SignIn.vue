<template>
  <div class="signIn">
    <body>
      <div>
        <h1 class="brand">JOIN TODAY</h1>
      </div>
      <form class="form">
        <div id="button">
          <a href="/connect/register" tag="b-button">Sign In</a>
        </div>
      </form>
    </body>
  </div>
</template>

<script>
export default {
  name: "signIn"
};
</script>

<style scoped>
body {
  color: black;
  text-align: center;
}
a {
  text-decoration: none;
  background-color: #2e2e2e;
  color: white;
  padding: 10px;
  border-radius: 7px;
}

a:hover {
  background-color: white;
  color: black;
  border-color: black;
  border-style:solid;
}
.brand {
  font-weight: bolder;
  font-size: 60px;
}
.sub {
  font-weight: bold;
  font-size: 20px;
  padding-top: 10px;
}
.form {
  padding-top: 50px;
  padding-bottom: 40px;
}
#button {
  padding-bottom: 20px;
  padding-top: 20px;
}
.btn {
  background-color: #2e2e2e;
}
.btn-primary {
  border-color: white;
  background-color: #2e2e2e;
}
.btn:hover {
  background-color: white;
  color: black;
  border-color: black;
}
</style>
