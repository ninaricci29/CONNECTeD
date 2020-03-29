<template>
  <div>
    <div>
      <h1>Update your Profile</h1>
      <h6>Complete the form.</h6>
    </div>
    <div class="form" method="update">
      <p>{{ message }}</p>
      <div class="form-group">
        <label>First Name</label>
        <input
          type="First Name"
          v-model="first_name"
          class="form-control active"
          placeholder="Jane"
          autocomplete="on"
        />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input
          type="Last Name"
          v-model="last_name"
          class="form-control active"
          placeholder="Smith"
          autocomplete="on"
        />
      </div>
      <div class="form-group">
        <label>Year of Study</label>
        <input
          type="year-of-study"
          v-model="yos"
          class="form-control active"
          placeholder="1"
          autocomplete="on"
        />
      </div>
      <div class="form-group">
        <label>Primary major</label>
        <select class="form-control form-control-md" v-model="major">
          <option>Select your major</option>
          <option>Computer Science</option>
          <option>Mathematics</option>
          <option>Statistics</option>
        </select>
      </div>
      <div class="form-group">
        <label>Bio</label>

        <input
          type="bio"
          v-model="bio"
          class="form-control active"
          placeholder="got a project? let's collaborate!"
          maxlength="50"
        />
        <small id="bio-type" class="form-text text-muted"
          >Describe yourself!</small
        >
      </div>
      <div>
        <b-form-group label="select your tags:">
          <b-form-tags
            v-model="value"
            size="sm"
            add-on-change
            no-outer-focus
            class="mb-2 outer"
          >
            <template
              v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }"
            >
              <ul v-if="tags.length > 0" class="list-inline">
                <li v-for="tag in tags" :key="tag" class="abc">
                  <b-form-tag
                    @remove="removeTag(tag)"
                    :title="tag"
                    :disabled="disabled"
                    variant="info"
                    >{{ tag }}</b-form-tag
                  >
                </li>
              </ul>
              <b-form-select
                class="form-control abc"
                v-bind="inputAttrs"
                v-on="inputHandlers"
                :disabled="disabled || availableOptions.length === 0"
                :options="availableOptions"
              >
                <template v-slot:first>
                  <option disabled value="">Choose a tag...</option>
                </template>
              </b-form-select>
            </template>
          </b-form-tags>
        </b-form-group>
      </div>

      <div class="form-group">
        <label>Website</label>

        <input
          type="website"
          class="form-control active"
          placeholder="https://myWebsite.ca"
          maxlength="100"
          v-model="website"
        />
        <small id="website-type" class="form-text text-muted"
          >Link your Github!</small
        >
      </div>

      <div class="form-group">
        <label>Profile Picture </label>
        <br />
        <input
          type="file"
          id="file"
          ref="file"
          v-on:change="handleFileUpload()"
        />
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "update",
  data() {
    return {
      first_name: "",
      last_name: "",
      major: "",
      bio: "",
      website: "",
      yos: "",
      error: "",
      file: "",
      message: "",
      options: [],
      value: []
    };
  },
  computed: {
    availableOptions() {
      return this.options.filter(opt => this.value.indexOf(opt) === -1);
    }
  },
  async mounted() {
    await axios.get("/connect/tags").then(response => {
      for (var i = 0; i < response.data.length; i++) {
        this.options.push(response.data[i].tag_name);
      }
    });

    this.id = this.$route.params.id;
    axios.get("/connect/profile_info?id=" + this.id).then(response => {
      this.first_name = response.data.first_name;
      this.last_name = response.data.last_name;
      this.bio = response.data.bio;
      this.yos = response.data.year;
      this.major = response.data.major;
      this.website = response.data.website;
      for (var i = 0; i < response.data.Tags.length; i++) {
        this.value.push(response.data.Tags[i].tag_name);
      }
    });
  },

  methods: {
    update() {
      // The url for the post request has
      // to be the url to the update page we need to make.
      var form = new FormData();
      form.append("utorid", AuthenticationService.getUtorid());
      form.append("first_name", this.first_name);
      form.append("last_name", this.last_name);
      form.append("bio", this.bio);
      form.append("major", this.major);
      form.append("year", this.yos);
      form.append("website", this.website);
      form.append("tags", JSON.stringify(this.value));

      form.append("profile_picture", this.file);
      axios
        .post("/connect/updateprofile", form, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          this.id = response.data.id;
          this.first_name = response.data.first_name;
          this.last_name = response.data.last_name;
          this.major = response.data.major;
          this.bio = response.data.bio;
          this.yos = response.data.year;
          this.website = response.data.website;
          this.message = "Profile Updated Successfully!";

          const userId = this.$store.state.user.id;
          this.$router.push({ path: `/profile/${userId}` });
        })
        .catch(error => {
          this.error = error;
          this.message = "Something went wrong, please try again shortly.";
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>

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
.abc {
  display: inline;
}
.abc:not(:first-child) {
  padding-left: 10px;
}

.outer {
  border-color: white;
  padding: 0;
}

.outer span {
  background-color: lightslategrey;
  border-color: black;
  color: white;
}
</style>
