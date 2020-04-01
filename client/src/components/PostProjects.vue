<template>
  <div>
    <div>
      <h6>Post a new project!</h6>
    </div>
    <div class="form" method="addProject">
      <div class="form-group">
        <label>Project Name</label>
        <span class="star">*</span>

        <input type="Project-Name" v-model="name" class="form-control active" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <span class="star">*</span>

        <textarea
          type="Description"
          v-model="description"
          class="form-control active description"
          placeholder="This project is.."
          rows="4"
          cols="50"
          maxlength="230"
          name="comment"
        />
        <small id="bio-type" class="form-text text-muted"
          >Describe your project!</small
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

      <div>
        <label>Collaborators:</label>
        <b-form-tags
          input-id="tags-separators"
          v-model="value2"
          separator=" ,;"
          placeholder="utorid"
          no-add-on-enter
          remove-on-delete
          class="mb-2"
          :tag-validator="tagValidator"
        ></b-form-tags>
      </div>

      <div class="form-group">
        <label>Website</label>

        <input
          type="website"
          v-model="website"
          class="form-control active"
          placeholder="https://myProjectRepo.ca"
        />
        <small id="website-type" class="form-text text-muted"
          >Link your repo!</small
        >
      </div>

      <div class="form-group">
        <label>Project Picture </label>
        <br />
        <input
          type="file"
          id="file"
          ref="file"
          v-on:change="handleFileUpload()"
        />
      </div>

      <div id="button">
        <p class="star">{{ error }}</p>
        <button
          type="log-in-via-utorid"
          class="btn btn-primary"
          @click="addProject"
        >
          PUBLISH
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addProject",
  data() {
    return {
      name: "",
      description: "",
      website: "",
      options: [],
      value: [],
      value2: [],
      file: "",
      error: ""
    };
  },
  computed: {
    availableOptions() {
      return this.options.filter(opt => this.value.indexOf(opt) === -1);
    }
  },

  mounted() {
    axios.get("/connect/tags").then(response => {
      for (var i = 0; i < response.data.length; i++) {
        this.options.push(response.data[i].tag_name);
      }
    });
  },

  methods: {
    tagValidator(tag) {
      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6;
    },

    addProject() {
      if(this.name == ''){
        this.error = "Please enter a project name"
        return
      }else if(this.description == ''){
        this.error = "Please enter a project description"
        return
      }
      else if(this.value.length == 0){
        this.error = "Please select at least one tag"
        return
      }
      var form = new FormData();
      form.append("picture", this.file);
      form.append("userid", this.$store.state.user.id);
      form.append("desc", this.description);
      form.append("project_name", this.name);
      form.append("website", this.website);
      form.append("tags", JSON.stringify(this.value));
      axios
        .post("/connect/post-projects", form, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          this.project_name = response.data.project_name;
          this.desc = response.data.desc;
          this.website = response.data.website;
        })
        .catch(() => {
          this.error = "Something went wrong, please try again shortly.";
        });
    },
    handleFileUpload() {
      this.error = "";
      var file = this.$refs.file.files[0];
      var size = file.size / 1024 / 1024; // in MB
      if (size > 2) {
        this.error = "Please select a file under 2MB";
      } else if (file.type != "image/jpeg" && file.type != "image/png") {
        this.error = "Please select a png or jpg image";
      } else {
        this.file = file;
      }
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
  padding-top: 40px;
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
.star {
  color: red;
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

.description {
}
</style>
