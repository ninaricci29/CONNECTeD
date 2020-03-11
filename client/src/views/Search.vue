<template>
  <div class="search">
    <SearchTags class="search-tags" />

    <section>
      <div class="search-cards">
        <ul>
          <li>
            <SearchCard />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import SearchTags from "../components/SearchTags.vue";
import SearchCard from "../components/SearchCards.vue";

export default {
  name: "search",
  data() {
    return {
      project_list: null,
      cols: 3
    };
  },
  components: {
    SearchTags,
    SearchCard
  },
  methods: {
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
  grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
  grid-gap: 20px;
  margin: 0px;
  padding: 0px;
}

.search-cards {
  padding: 1rem 0 1rem 0;
}
</style>
