<template>
  <nav id="NavBar">
    <div>
      <input type="checkbox" id="nav" class="hidden" />
      <label for="nav" class="nav-btn">
        <i></i>
        <i></i>
        <i></i>
      </label>
      <!--        THE SEARCH  BAR-->

      <!--            <b-nav-form>-->
      <!--                <b-form-input size="sm" class="search" placeholder="search.." style="width: 300px;" ></b-form-input>-->
      <!--&lt;!&ndash;                <b-button size="sm" class="my-2 my-sm-0" type="submit">search..</b-button>&ndash;&gt;-->
      <!--            </b-nav-form>-->

      <div class="logo">
        <a> <b-link href="/connect/home"> CONNECTeD </b-link> </a>
      </div>

      <div v-if="isLoggedIn" class="h2 mb-2 gear-wheel">
        <b-link class="update-button" :href="editProfile">
          <b-icon icon="gear" v-b-popover.hover.bottomleft="'edit profile'" />
        </b-link>
      </div>

      <div class="nav-wrapper" >
        <ul v-on:click="collapse">
          <li><a href="/connect/home">Home</a></li>
          <li><a href="/connect/search">Search</a></li>
          <li><a :href="profile">Profile</a></li>
          <li><a v-if="isLoggedin()" href="/connect/log-in">Log In</a></li>
          <li><a v-if="isLoggedout()" @click="logOut" href="/connect/home" >Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["navLinks"],
  methods: {
    collapse: function() {
      document.getElementById("nav").checked = false;
    },
    isLoggedin(){
      if(this.$store.state.isLoggedIn){
        return false
      }
      else{
        return true
      }
    },
    isLoggedout(){
      if(this.$store.state.isLoggedIn){
        return true
      }
      else{
        return false
      }
    },
    logOut(){
      this.$store.dispatch('loggedOut')
    }
  },
  computed: {

    profile: function() {
      if (this.$store.state.isLoggedIn) {
        return "/connect/profile/" + this.$store.state.user.id;
      }
      return "/connect/404";
    },

    editProfile: function(){
      return "/connect/profile/" + this.$store.state.user.id + "/edit"
    },
    ...mapState(['isLoggedIn'])
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 15vh;
  font-family: Montserrat;
  font-weight: 400;
  background-position: center;
  background-size: cover;
}

nav {
  padding: 20px;
}

.gear-wheel {
  float: right;
  display: inline;
  padding-right: 120px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  z-index: 9999;
  border-radius: 50%;
}

.update-button {
  color: black;
}

.search {
  border-color: lightslategrey;
  border-radius: 8px;
  position: absolute;
  transform: translate(20%, 80%);
}

.logo {
  float: left;
  /*padding-left: 40px;*/
  /*position: fixed;*/
  /*padding-top: 20px;*/
}

.logo a {
  color: #000;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 1px;
  text-decoration: none;
}

.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #fff;
  opacity: 0;
  transition: all 0.2s ease;
}

.nav-wrapper ul {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

.nav-wrapper ul li {
  display: block;
  float: none;
  width: 100%;
  text-align: right;
  margin-bottom: 10px;
}

.nav-wrapper ul li:nth-child(1) a {
  transition-delay: 0.2s;
}

.nav-wrapper ul li:nth-child(2) a {
  transition-delay: 0.3s;
}

.nav-wrapper ul li:nth-child(3) a {
  transition-delay: 0.4s;
}

.nav-wrapper ul li:nth-child(4) a {
  transition-delay: 0.5s;
}

.nav-wrapper ul li:nth-child(5) a {
  transition-delay: 0.5s;
}

.nav-wrapper ul li:not(:first-child) {
  margin-left: 0;
}

.nav-wrapper ul li a {
  padding: 10px 24px;
  opacity: 0;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.2px;
  transform: translateX(-20px);
  transition: all 0.2s ease;
}

nav ul li :hover {
  outline: none;
  color: lightslategrey;
  text-decoration: none;
}

.nav-btn {
  position: fixed;
  right: 25px;
  top: 15px;
  display: block;
  width: 48px;
  height: 48px;
  cursor: pointer;
  z-index: 9999;
  border-radius: 50%;
}

.nav-btn i {
  display: block;
  width: 20px;
  height: 2px;
  background: #000;
  border-radius: 4px;
  margin-left: 14px;
}

.nav-btn i:nth-child(1) {
  margin-top: 16px;
}

.nav-btn i:nth-child(2) {
  margin-top: 4px;
  opacity: 1;
}

.nav-btn i:nth-child(3) {
  margin-top: 4px;
}

.nav-btn i:nth-child(4) {
  margin-top: 4px;
}

#nav:checked + .nav-btn {
  transform: rotate(45deg);
}

#nav:checked + .nav-btn i {
  background: #000;
  transition: transform 0.2s ease;
}

#nav:checked + .nav-btn i:nth-child(1) {
  transform: translateY(6px) rotate(180deg);
}

#nav:checked + .nav-btn i:nth-child(2) {
  opacity: 0;
}

#nav:checked + .nav-btn i:nth-child(3) {
  transform: translateY(-6px) rotate(90deg);
}

#nav:checked ~ .nav-wrapper {
  z-index: 9990;
  opacity: 1;
}

#nav:checked ~ .nav-wrapper ul li a {
  opacity: 1;
  transform: translateX(0);
}

.hidden {
  display: none;
}
</style>