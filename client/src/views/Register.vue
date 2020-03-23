<template>
  <html>
    <body>
      <div class="about">
        <h1>Eager to be a part of something?</h1>
        <h2>Sign up below :)</h2>
      </div>
      <form>
        First Name:
        <input
          type="text"
          style="background-color:grey;"
          name="firstname"
        /><br />
        <br />
        Last Name:
        <input
          type="text"
          style="background-color:grey;"
          name="lastname"
        /><br />
        <br />
        About you:
        <input
          type="text"
          style="height:150px;background-color:grey;"
          name="firstname"
        /><br />
        <br />
        Gender:
        <input
          type="radio"
          style="vertical-align: middle"
          name="gender"
          value="male"
          checked
        />
        Male<br />
        <input
          type="radio"
          style="vertical-align: middle"
          name="gender"
          value="female"
        />
        Female<br />
        <input
          type="radio"
          style="vertical-align: middle"
          name="gender"
          value="other"
        />
        Other<br />
        Skills
        <div class="btn-group-vertical" aria-multiselectable="true">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic example"
            aria-multiselectable="true"
          >
            <button type="button" class="btn btn-secondary">Python</button>
            <button type="button" class="btn btn-secondary">Java</button>
            <button type="button" class="btn btn-secondary">C/C++</button>
            <button type="button" class="btn btn-secondary">
              HTML,CSS,Javascript
            </button>
            <button type="button" class="btn btn-secondary">
              Web Development
            </button>
          </div>
          <div
            class="btn-group"
            multiple
            role="group"
            aria-label="Basic example"
            aria-multiselectable="true"
          >
            <button type="button" class="btn btn-secondary">
              Android Development
            </button>
            <button type="button" class="btn btn-secondary">
              IOS Development
            </button>
            <button type="button" class="btn btn-secondary">Databases</button>
            <button type="button" class="btn btn-secondary">
              Artificial Intelligence
            </button>
            <button type="button" class="btn btn-secondary">
              Software Design
            </button>
          </div>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic example"
            aria-multiselectable="true"
          >
            <button type="button" class="btn btn-secondary">
              Firebase Hosting
            </button>
            <button type="button" class="btn btn-secondary">MongoDB</button>
            <button type="button" class="btn btn-secondary">Node.js</button>
            <button type="button" class="btn btn-secondary">
              Web and Graphic Design
            </button>
            <button type="button" class="btn btn-secondary">
              Machine Learning
            </button>
          </div>
        </div>
        <br />
        To complete setting up your account, we need to verify that you are a
        student at University of Toronto.
        <a href="http://www.google.com">Click here</a>
      </form>
    </body>
  </html>
</template>

<style scoped>
body {
  background-image: url("https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&dpr=2&auto=format&fit=crop&w=416&h=312&q=60");
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-size: 100% 110%;
}
form {
  text-align: center;
  color: white;
}
h1 {
  text-align: center;
  font-size: 400%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: white;
}
h2 {
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: white;
}
</style>
