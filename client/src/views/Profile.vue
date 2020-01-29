<template>
<div class="card center">
    <br> <br> <br> <br>
    <h1 class="PROFILE">{{ name }}</h1>
    <h4 class="desc">Rating: {{ rating }}</h4>

    <div class="circular--landscape" >
      <img src=https://source.unsplash.com/tzILuPBLcvk//>
    </div>



    <br> <br><br> <br>
    <h4 class="desc">About me:</h4>
    <textarea
      name="notes"
     rows="6"
     placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    >
    </textarea>

    <br />
    <h4 class="desc">Skills:</h4>
  <textarea
    name="skills"
    rows="6"
    placeholder="Ornare arcu dui vivamus arcu felis bibendum ut.  Libero id faucibus nisl tincidunt eget nullam non nisi. Aliquam ut porttitor leo a diam sollicitudin tempor id. Morbi enim nunc faucibus a pellentesque sit. Amet massa vitae tortor condimentum lacinia quis vel eros. Non sodales neque sodales ut. Sed risus ultricies tristique nulla. Porttitor massa id neque aliquam vestibulum morbi. "
  ></textarea>

  <br />
  <h4 class="desc">Interests:</h4>
  <textarea
    name="interests"
    rows="6"
    placeholder="Eleifend mi in nulla posuere sollicitudin aliquam. Urna id volutpat lacus laoreet non curabitur gravida. Neque convallis a cras semper auctor neque vitae tempus quam. Odio pellentesque diam volutpat commodo sed. Eleifend mi in nulla posuere sollicitudin aliquam."
  ></textarea> <br> <br> <br> <br> <br> <br>

</div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      name: "Leo Mac Shey",
      desc: "I'm a second year CS spec at UTM :)",
      rating: "5.00"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    background-image: url('https://source.unsplash.com/v9bnfMCyKbg');
      min-height:100%;
      width:30%;
      background-size: cover;
      height: 100%;
      overflow: hidden;
      margin: 0 auto; /* Added */
      float: none; /* Added */
      margin-bottom: 10px; /* Added */


      background-repeat: no-repeat;



    }
    .circular--landscape{

      display: block;
      position: relative;
      width: 400px;
      height: 400px;
      overflow: hidden;
      border-radius: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
  }

  .circular--landscape img {
      width: 100%;

      height: 100%;

  }

</style>
