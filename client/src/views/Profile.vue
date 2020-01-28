<template>
  <div class="profile">
    <div class="card card-widget widget-user">


        <h4 class="desc"> Rating: {{rating}}</h4>
        <h4 class="desc"> About me: </h4>
        <textarea id="" name="notes" rows = '4' placeholder:id="Edit your description here.">


        </textarea>

      </div>
    </div>
</template>

<script>
  export default {
    name:"profile",
    data() {
      return {
        name: 'Leo Mac Shey',
        desc: 'I\'m a second year CS spec at UTM :)',
        rating: '5.00'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {background-color: powderblue;}
  h3   {color: blue;}
  p    {color: red;}


</style>