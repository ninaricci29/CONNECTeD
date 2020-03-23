<template>
  <div class="search-cards">
    <img class="profile-pic" src="../assets/DSC02912.jpg" />
    <div class="container">
      <div class="name">Neil Emmanuel Lu</div>
      <p class="description">Got a project?</p>
    </div>

    <div class="project-covers">
      <b-row>
        <ul>
          <li>
            <img src="../assets/mitchell-hollander-kSmTaltv9KU-unsplash.jpg" />
          </li>
          <li><img src="../assets/matheo-jbt-ZMEmMguGD1I-unsplash.jpg" /></li>
          <li>
            <img src="../assets/nathan-dumlao-c2Y16tC3yO8-unsplash.jpg" />
          </li>
        </ul>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCards"
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

li {
  list-style-type: none;
  padding: 20px 50px 20px 40px;
  display: inline-block;
}

.profile-pic {
  width: 90px;
  height: 90px;
  border-radius: 1000px;
  position: absolute;
  transform: translate(40%, 20%);
  border: 3px solid #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.09);
  object-fit: cover;
  cursor: pointer;
}

.project-covers li img {
  width: 80px;
  height: 80px;
  position: absolute;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.09);
  transform: translate(-10%, -140%);
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
}

.container {
  text-align: left;
  padding: 0 0 140px 140px;
}

.name {
  padding: 20px 0 0 0;
  font-size: 20px;
}

.description {
  color: grey;
  font-size: 14px;
  border-color: white;
}
</style>
