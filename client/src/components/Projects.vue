<template>
  <div class="projects">
    <h4>PROJECTS <font-awesome-icon :icon="['fa', 'lightbulb']" /></h4>

    <section class="container">
      <b-button v-if="isLoggedIn()" class="btn-sm">
        <b-link class="project-button" href="/connect/post-projects"
          >NEW PROJECT</b-link
        >
      </b-button>

      <div class="project-cards" v-for="i in rowCount()" v-bind:key="i">
        <ul>
          <li class="description" v-for="j in cols" v-bind:key="j">
            <ProjectCards
              v-if="projectExists(i, j)"
              v-on:delete="deleteProject"
              v-bind:project_name="getProject(i, j).project_name"
              v-bind:project_description="getProject(i, j).desc"
              v-bind:project_id="getProject(i, j).id"
              v-bind:picture_link="getProject(i, j).picture"
              v-bind:users="getProject(i, j).Users"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectCards from "@/components/ProjectCard.vue";
import axios from "axios";
export default {
  name: "projects",
  data() {
    return {
      utorid: "",
      project_list: null,
      cols: 3
    };
  },
  components: {
    ProjectCards
  },
  mounted() {
    var id = this.$route.params.id;
    axios
      .get("/connect/profile_info?id=" + id)
      .then(response => (this.utorid = response.data.utorid));
    axios
      .get("/connect/project?id=" + id)
      .then(response => (this.project_list = response.data));
  },
  methods: {
    isLoggedIn() {
      return this.$store.state.user.utorid == this.utorid;
    },
    rowCount() {
      if (this.project_list == null) {
        return 0;
      }
      const quotient = Math.floor(this.project_list.length / this.cols);
      const remainder = this.project_list.length % this.cols;
      return quotient + (remainder === 0 ? 0 : 1);
    },
    projectIndex(row, col) {
      return (row - 1) * this.cols + (col - 1);
    },
    getProject(row, col) {
      return this.project_list[this.projectIndex(row, col)];
    },
    projectExists(row, col) {
      return this.getProject(row, col) != null;
    },
    deleteProject(id) {
      axios
        .post("/connect/delete-project", {
          id: id
        })
        .then(
          () =>
            (this.project_list = this.project_list.filter(function(project) {
              return project.id != id;
            }))
        );
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
h4 {
  transform: translate(-40%, 10%);
  font-weight: bold;
}

.container {
  padding: 20px 40px 0 40px;
}

.text-box {
  font-size: 14px;
  height: 80px;
  border-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.09);
  padding-bottom: 20px;
}

li {
  list-style-type: none;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 5px;
  margin: 0px;
  padding: 0px;
}

.project-cards {
  padding: 1rem 0 1rem 0;
}

.project-button {
  color: white;
  text-decoration: none;
}
</style>
