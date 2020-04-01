<template>
  <div>
    <div class="page-wrapper">

      <div class="profile-box">
        <img src="../assets/03.png"/>

        <div class="text">
          <div class="label">{{label}}</div>
          <div class="name">{{name}}</div>
        </div>

        <div class="social" >
          <div class="icons" >

            <a :href=github target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" class="abc" />
            </a>
            <a :href=linkedin target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="abc" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: 'About',
        props: {
            label: String,
            name: String,
            github: String,
            linkedin: String,
            image: String
        }
    }
</script>

<style scoped>
  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    box-shadow: 0 2px 6px 0 rgba(47,83,151,0.10);
    transform: translate(0, -60px);
  }

  .name {
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
  }

  .label {
    transition: 500ms;
    font-weight: 600;
    font-size: 10px;
    color: #98A0A6;
  }

  .text {
    padding: 20px 0 0 40px;
    text-align: left;
  }

  /*.page-wrapper {*/
  /*  margin: auto;*/
  /*  display: flex;*/
  /*  flex-wrap: wrap;*/
  /*  align-content: flex-start;*/
  /*  justify-content: space-evenly;*/
  /*  padding-left: calc(5% - 16px);*/
  /*  padding-right: calc(5% - 16px);*/
  /*}*/

  .profile-box {
    background: #FFFFFF;
    box-shadow: 0 2px 6px 0 rgba(47,83,151,0.10);
    border-radius: 3px;
    width: 240px;
    height: 320px;
    text-align: center;
    transition: 300ms;
    flex-grow: 1;
    /*align-content: center;*/
  }

  .profile-box:hover {
    /* box-shadow: 0 2px 6px 0 rgba(47,83,151,0.40); */
    box-shadow: 0 0 20px 9px rgba(0,0,0,0.03);
  }

  .profile-box:hover img{
    /* box-shadow: 0 2px 6px 0 rgba(47,83,151,0.40); */
    box-shadow: 0 0 20px 9px rgba(0,0,0,0.03);
  }

  .social {
    padding: 10px 0 0 40px;
    text-align: left;
  }

  .abc {
    font-size: 18px;
  }

  .icons{
    margin-top: 12px;
  }

  .icons a{
    margin: 0 2px;
    display: inline-block;
    width: 45px;
    height: 45px;
    transition: 0.4s;
    color: #333;
    line-height: 30px;
  }

  .icons a:hover{
    transform: scale(1.2);
    cursor: pointer;
  }
</style>