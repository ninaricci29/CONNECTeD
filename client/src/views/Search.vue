<template>
  <div class="search">
    <SearchTags class="search-tags" @searchTags="search" />

    <div class="zero-projects" v-if="hasNoProjects()">
      <img src="../assets/05.png" />

      <div class="font-weight-bold">
        No Projects Found

        <p class="text-muted">
          Seems like nobody has made a project yet! Projects will <br />
          appear here as soon as someone makes it!
        </p>
      </div>
    </div>

     <div class="zero-projects" v-if="discover">
      <div class="font-weight-bold">
        Here are some recently created projects
      </div>
    </div>

    <section class="container">
      <div class="search-cards" v-for="i in rowCount()" v-bind:key="i">
        <ul>
          <li class="description" v-for="j in cols" v-bind:key="j">
            <SearchCard
              v-if="projectExists(i, j)"
              v-bind:project_name="getProject(i, j).project_name"
              v-bind:project_description="getProject(i, j).desc"
              v-bind:project_id="getProject(i, j).id"
              v-bind:picture_link="getProject(i, j).picture"
              v-bind:website="getProject(i, j).website"
              v-bind:users="getProject(i, j).Users"
              v-bind:tags="getProject(i, j).Tags"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import SearchTags from "../components/SearchTags.vue";
import SearchCard from "../components/SearchCards.vue";
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      project_list: [],
      cols: 3,
      value: [],
      tag_ids: [],
      show: false,
      discover: true
    };
  },
  components: {
    SearchTags,
    SearchCard
  },
  mounted() {
    axios
        .get("/connect/discover-projects")
        .then(response => (this.project_list = response.data.project));
  },
  methods: {
    async search(value) {
      this.value = value;
      this.show = true;
      this.discover = false;
      for (var i = 0; i < this.value.length; i++) {
        await axios
          .get("/connect/get-tag?tag=" + this.value[i])
          .then(response => this.tag_ids.push(response.data.tag_id.id));
      }

      axios
        .get("/connect/search-projects?tag_ids=[" + this.tag_ids + "]")
        .then(response => (this.project_list = response.data.project));

      this.tag_ids = [];
    },
    rowCount() {
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
    hasNoProjects() {
      return this.project_list.length == 0 && this.show;
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
li {
  list-style-type: none;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 2fr));
  grid-gap: 5px;
  margin: 0px;
  padding: 0px;
}
.search-cards {
  padding: 1rem 0 1rem 0;
}

.container {
  padding: 20px 40px 0 40px;
}
.zero-projects {
  padding: 40px 0 40px 0;
}
img {
  height: 30%;
  width: 30%;
  display: block;
  margin: 0 auto;
}
.text-muted {
  opacity: 0.4;
  font-weight: 500;
}
</style>
