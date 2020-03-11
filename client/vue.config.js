module.exports = {
  publicPath: "/connect"
};

const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  "entry": "index.js",
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        //  { family: "Raleway", variants: [ "400", "700italic" ] }
        { family: "Montserrat" },
        { family: "Raleway" },
        { family: "Poppins" },
      ]
    })
  ]
}