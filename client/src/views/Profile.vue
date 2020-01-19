<template>
  <div class="profile">
    <div class="card card-widget widget-user">
      <div class="widget-user-header align:center" >
        <h3 class="name"> {{ name }} </h3>
        <div class="photo" style="width:300px;height:300px;overflow:hidden;display:inline-block;border:1px solid black; margin-left:auto;margin-right:auto;">
          <img src="https://source.unsplash.com/iJ9o00UeAWk" width="200px">
        </div>
        <h4 class="desc"> About me: {{desc}}</h4>
        <h4 class="desc"> Rating: {{rating}}</h4>

      </div>
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