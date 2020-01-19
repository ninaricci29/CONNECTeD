<template>
  <div class="container">
    <div class="card card-widget widget-user">
    <div class="widget-user-header" >
      <h3 class="username"> {{name}} </h3>


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

