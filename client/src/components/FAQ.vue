<template>
  <body>
    <header>
      <div class="logo" cent>
        <br />
        <img class="logo" src="../assets/hello.png" />
      </div>
    </header>

    <div>
      <br />
      <h3>Frequently Asked Questions</h3>
      <br />

      <i
        ><p style="color:seagreen">
          Q: I'm a University of Toronto student. Why should I use CONNECTeD?
        </p></i
      >
      A: If there's something (anything!) you've been meaning to create, you can
      trust our platform to find collaborators and turn dream projects into
      finished products.
      <br />
      <br />

      <i
        ><p style="color:seagreen">
          Q: Okay cool, I'm interested! Can anyone sign up? I want to invite my
          friends!
        </p></i
      >
      A: Right now, all registered users are vetted University of Toronto
      students. This way, you can be sure that the people you're working with
      are verified students.
      <br />
      <br />

      <i
        ><p style="color:seagreen">
          Q: This is so cool. I made an account. Now how do I go about making
          project partners?
        </p></i
      >
      A: Assign profile tags to yourself for languages, frameworks, and
      technologies you're familiar with. Then, you can use the search bar to
      view other users and their abilities, as well as current projects
      underway. To connect with people and projects, simply navigate to their
      cards. Have fun :')
      <br />
      <br />
    </div>
  </body>
</template>

<script>
export default {
  name: "FAQ.vue"
};
</script>

<style scoped>
body {
  margin-left: 100px;
  margin-right: 100px;
  font-family: "Montserrat", Montserrat, serif;
}
img.logo {
  height: 45%;
  width: 45%;
  display: block;
  margin: 0 auto;
}
</style>
