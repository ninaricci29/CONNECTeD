<template>
  <div class="signIn">
      <div>
        <img src="../assets/09.png" />
        <h1 class="brand">JOIN TODAY</h1>
        <h7> Imagine! Create! Collaborate!</h7>
      </div>
      <form class="form">
        <div>
          <b-link href="/connect/register" class="button btn-sm btn">Sign In</b-link>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: "signIn"
};
</script>

<style scoped>
body {
  text-align: center;
}

h7 {
  color: #98A0A6;
}

img {
  width: 20%;
  height: 20%;
}

.signIn {
  padding: 40px 0 20px 0;
  justify-content: center;
}
.brand {
  font-weight: bolder;
  font-size: 60px;
}
.form {
  padding-top: 40px;
  padding-bottom: 80px;
}

.button {
  border-radius: 20px;
  border: 1px solid #212121;
  background-color: #212121;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  text-decoration: none;
}
.button:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.button:focus {
  outline: none;
}
</style>
