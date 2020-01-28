<template>
  <div class="profile">

    <div class="card card-widget widget-user" align="middle">
        <h2> MY PROFILE </h2>
        <h3 class = "title"> {{name}} </h3>

        <img src=https://source.unsplash.com/tzILuPBLcvk/ r width=200px height="200px"/>



        <h4 class="desc"> Rating: {{rating}}</h4>
        <h4 class="desc"> About me: </h4>
        <textarea name="notes" rows = '4' placeholder:id="Edit your description here."></textarea>

        <br>
        <h4 class="desc"> Skills: </h4>
        <textarea name="skills" rows = '4' placeholder:id="Edit your description here."></textarea>

        <br>
        <h4 class="desc"> Interests: </h4>
        <textarea name="interests" rows = '4' placeholder:id="Edit your description here."></textarea>

        <br> <br> <br>


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

  .profile {
      padding:40px;

      margin:40px;

  }

</style>