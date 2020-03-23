<template>
  <div class="footer">
    <div class="inner-footer">
      <div class="logo-container info">
        <a>
          <b-link href="/home">CONNECTeD</b-link>
        </a>
      </div>

      <div>
        <div class="info-inner">
          <li><a> About </a></li>
        </div>

        <b-row class="info-inner">
          <li>
            <div class="text-muted">Have an account?</div>
          </li>

          <li>
            <a>
              <b-link href="/log-in">Sign In</b-link>
            </a>
          </li>
        </b-row>
        <div class="info-inner">
          <li>
            <a>
              <b-link href="/FAQ"> FAQ </b-link>
            </a>
          </li>
        </div>
      </div>

      <div class="info-inner">
        &copy; {{ new Date().getFullYear() }} NanoBanano Co.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style scoped>
* {
  list-style: none;
  text-decoration: none;
}

.footer {
  /*width: 100vw;*/
  display: block;
  overflow: hidden;
  /*box-sizing: border-box;*/
  background-color: #18181a;
  color: white;
}

.inner-footer {
  display: block;
  text-align: left;
  /*width: 1100px;*/
  height: 100%;
  margin: 40px;
}

.logo-container a {
  font-weight: bold;
  font-size: 22px;
  text-decoration: none;
  color: white;
}

.logo-container a:hover {
  cursor: pointer;
}

.info {
  margin: 10px 20px 20px 120px;
  cursor: pointer;
}

.info-inner {
  font-size: 14px;
  margin: 10px 0 0 120px;
  padding-bottom: 0px;
}

.info-inner li:not(:first-child) {
  padding-left: 20px;
}

.info-inner li a {
  text-decoration: none;
  color: white;
}

.info-inner li a:hover {
  cursor: pointer;
}
</style>
