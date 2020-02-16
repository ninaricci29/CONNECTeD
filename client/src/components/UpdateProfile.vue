<template>
  <div>
    <div>
      <h1>Update your Profile</h1>
      <h6>Complete the form.</h6>
    </div>
    <form class="form" method="update">
      <div class="form-group">
        <label>First Name</label>

        <input
          type="First Name"
          v-model="fn"
          class="form-control active"
          placeholder="John"
        />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input
          type="Last Name"
          v-model="ln"
          class="form-control active"
          placeholder="Smith"
        />
      </div>
      <div class="form-group">
        <label>Year of Study</label>
        <input
          type="year-of-study"
          v-model="yos"
          class="form-control active"
          placeholder="1"
        />
      </div>
      <div class="form-group">
        <label>Major</label>
        <select class="form-control form-control-md" v-model="major">
          <option>select your major</option>
          <option>Computer Science</option>
          <option>Math & Statistics</option>
          <option>Biology</option>
          <option>Drama</option>
        </select>
      </div>
      <div class="form-group">
        <label>Bio</label>

        <input
          type="bio"
          v-model="bio"
          class="form-control active"
          placeholder="Got a project? Let's collaborate!"
        />
        <small id="bio-type" class="form-text text-muted"
          >Describe your self!</small
        >
      </div>
      <div id="button">
        <button
          type="log-in-via-utorid"
          class="btn btn-primary"
          @click="update"
        >
          SUBMIT
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
body {
  padding-top: 40px;
  background-color: white;
  color: black;
  text-align: center;
}
body h1 {
  font-weight: bolder;
  font-size: 60px;
  text-align: center;
}
body h6 {
  font-weight: bold;
  font-size: 20px;
  padding-top: 10px;
}
.form {
  display: inline-block;
}
.form-group {
  text-align: left;
}
.form-control {
  width: 500px;
  border-color: black;
}
.active {
  color: black;
}
#bio-type {
  width: 500px;
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

<script>
import axios from "axios";
export default {
  name: "update",
  data() {
    return {
      fn: "",
      ln: "",
      major: "",
      bio: "",
      yos: "",
      error: ""
    };
  },
  methods: {
    update() {
      // The url for the post request has
      // to be the url to the update page we need to make.
      axios
        .post("/updateprofile", {
          // Still need to figure out the value 'id' will have
          id: 5,
          first_name: this.fn,
          last_name: this.ln,
          major: this.major,
          bio: this.bio,
          year: this.yos
        })
        .then(response => {
          this.id = response.data.id;
          this.first_name = response.data.first_name;
          this.last_name = response.data.last_name;
          this.major = response.data.major;
          this.bio = response.data.bio;
          this.year = response.body.year;
        })
        .catch(err => {
          //console.log(error);
          this.error = err;
        });
    }
  }
};
</script>
