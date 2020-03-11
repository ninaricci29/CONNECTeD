export default {
  isLoggedIn() {
    return window.$cookies.get("utorid") != null;
  },

  userIsLoggedIn(utorid) {
    return window.$cookies.get("utorid") == utorid;
  },

  getUtorid() {
    return window.$cookies.get("utorid");
  }
};
