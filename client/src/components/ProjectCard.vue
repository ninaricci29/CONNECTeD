<template>
  <div>
    <div class="card">
      <img class="card-img" :src="picture_link" />
      <div class="abc">
        <b-dropdown
          size="sm"
          right
          text="Right align"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template v-slot:button-content>
            <font-awesome-icon :icon="['fa', 'ellipsis-h']" class="efg" />
          </template>

          <b-dropdown-item :href="updateLink">Edit</b-dropdown-item>
          <b-dropdown-item @click="deleteProject">Delete</b-dropdown-item>
        </b-dropdown>
      </div>

      <div class="card-body">
        <div class="card-footer">
          <p class="category text-muted"></p>
          <h4 class="title">{{ project_name }}</h4>
          <p class="desc text-muted-2">
            {{ project_description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  props: ["project_name", "project_description", "project_id", "picture_link"],
  computed: {
    updateLink: function() {
      return "/connect/projects/" + this.project_id + "/update";
    }
  },
  methods: {
    deleteProject() {
      this.$emit("delete", this.project_id);
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

.abc {
  transform: translate(115px, -400px);
  padding: 0 0 0 0;
  opacity: 0;
}

.efg {
  color: black;
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
.card:hover {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.09);
}

.card .card-img {
  filter: grayscale(100%);
  width: 100%;
  height: 400px;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
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
}
.card .byline {
  font-size: 0.8rem;
  padding: 0 0 0 0;
  color: #6d6d6d;
}
</style>
