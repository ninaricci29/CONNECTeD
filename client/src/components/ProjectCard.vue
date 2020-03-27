<template>
  <div>
    <div class="card">
      <img class="card-img" src="../assets/1.jpg" />
      <div class="contributors top-left">
        <b-link class="angle ghi jkl" href="#">CONTRIBUTORS</b-link>

        <div v-for="user in users" v-bind:key="user.id">
          <a class="angle jkl mno" :href="profilePath(user.id)">
            {{ user.first_name + " " + user.last_name }}
          </a>
        </div>
      </div>

      <div class="abc">
        <b-dropdown
          size="sm"
          right
          text="Right align"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret>
          <template v-slot:button-content>
            <font-awesome-icon :icon="['fa', 'ellipsis-h']" class="def"/>
          </template>

          <b-dropdown-item :href="updateLink">Edit</b-dropdown-item>
          <b-dropdown-item @click="deleteProject">Delete</b-dropdown-item>
        </b-dropdown>
      </div>

      <b-link href="#">
        <font-awesome-icon :icon="['fab', 'github']" class="abc def"/>
      </b-link>

      <div class="card-body">
        <div class="card-footer">
<!--          Replace UI/UX with the first tag they select-->
          <p class="category text-muted font-weight-medium">UI/UX</p>
          <h4 class="title">{{ project_name }}</h4>
          <p class="desc text-muted-2">
            {{ project_description }}
          </p>
          <br /><br />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  props: [
    "project_name",
    "project_description",
    "project_id",
    "picture_link",
    "users"
  ],
  computed: {
    updateLink: function() {
      return "/connect/projects/" + this.project_id + "/update";
    }
  },
  methods: {
    deleteProject() {
      this.$emit("delete", this.project_id);
    },
    profilePath(id) {
      return "/connect/profile/" + id;
    }
  }
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
  color: #6d6d6d;
}

.abc {
  transform: translate(115px, -395px);
  padding: 0 0 0 0;
  opacity: 0;
}
.def {
  color: white;
}
/*For the contributors*/
.ghi {
  font-size: 20px;
  cursor: pointer;
  /*-webkit-text-stroke-color: black;*/
  /*-webkit-text-stroke-width: 0.02em;*/
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  transition: background-size 0.9s cubic-bezier(0.67, 0.01, 0.15, 0.98);
}
.jkl {
  flex-direction: column;
  letter-spacing: 0.03em;
  margin: 0;
  font-weight: 900;
  display: flex;
  text-align: left;
  text-decoration: none;
}
.mno {
  font-size: 15px;
  cursor: pointer;
  -webkit-text-stroke-color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  transition: background-size 0.9s cubic-bezier(0.67, 0.01, 0.15, 0.98);
}

.angle {
  background-image: linear-gradient(135deg, white 0%, white 50%, transparent 50.1%);
  background-size: 0% 100%;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.text-muted {
  opacity: 0.4;
}

.text-muted-2 {
  opacity: 0.85;
}

.card {
  position: relative;
  width: 18rem;
  display: inline-block;
  margin: 10px;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
}

.card .card-img {
  filter: grayscale(100%);
  width: 100%;
  height: 400px;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
}

.card:hover {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.09);
}

.card:hover .angle{
  background-size: 300% 400%;
}

.card:hover .abc {
  opacity: 1;
  cursor: pointer;
  color: white;
}

.card:hover .card-img {
  filter: grayscale(0);
}

.card:hover .card-body {
  height: 13rem;
  transition: height 0.4s ease;
  overflow: hidden;
  filter: grayscale(0);
}

.card:hover .desc {
  display: inline;
}

.card-body {
  background-color: white;
  height: 6rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  transition: height 0.2s ease;
  padding: 0 0 0 0;
}

.card .card-footer {
  text-align: left;
  background: none;
}

.card .category {
  letter-spacing: 2px;
  font-size: 0.7rem;
  margin: 0 0 0 0;
}

.card .desc {
  display: none;
  font-size: 0.7rem;
}

.card .title {
  font-size: 1.1rem;
  font-weight: bold;
}
.card .byline {
  font-size: 0.8rem;
  padding: 0 0 0 0;
  color: #6d6d6d;
}
</style>
