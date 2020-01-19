<template>
  <div class="profile">
    <div class="card">
    <div class="widget-user-header" >
      <h1 class="username"> {{name}} </h1>
      whyyyyy is this not working

    </div>
    </div>
  </div>

</template>
<script>
  export default {
    name:"profile",
    data() {
      return {
        name: 'Jane Doe',
        desc: 'I like to code!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {background-color: powderblue;}
  h1   {color: blue;}
  p    {color: red;}
</style>

