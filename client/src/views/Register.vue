<template>
<html>
  <div class="about">
    <h1>Eager to be a part of something?</h1>
    <h2> Sign up below :) </h2>
  </div>
  <form>
    First Name:
    <input type="text" name="firstname"><br>
    <br>
    Last Name:
    <input type="text" name="lastname"><br>
    <br>
    About you:
    <input type="text" name="firstname"><br>
    <br>
    Gender:
    <input type="radio" name="gender" value="male" checked> Male<br>
    <p style="margin-left: 80px"><input type="radio" name="gender" value="female"> Female<br></p>
    <p style="margin-left: 80px"><input type="radio" name="gender" value="other"> Other<br></p>
    Skills
    <div class="checkbox">
  <label><input type="checkbox" value="">Python</label>
</div>
<div class="checkbox">
  <label><input type="checkbox" value="">Java</label>
</div>
<div class="checkbox disabled">
  <label><input type="checkbox" value="">C</label>
</div>
    To complete setting up your account, we need to verify that you are a student at University of Toronto. <a href="http://www.google.com">Click here</a>
  </form>
</html>
</template>

<style>
body{
  background-image: url(https://www.utoronto.ca/sites/default/files/cover-utm-hazel-mccallion-bldg.jpg);
  background-color: #cccccc;
  background-blend-mode:overlay;;
}
h1{
  text-align: center;
  font-size: 400%; 
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
h2{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
</style>