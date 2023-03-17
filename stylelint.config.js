module.exports = {
  plugin: ["stylelint-scss"],
  extends: [
    "stylelint-config-recommended-scss",  // Add extension rule for scss
    "stylelint-config-recess-order",  // Set up automatic sorting of css properties for visibility
    "stylelint-config-prettier",  // Turn off conflict rules with Prettier
  ],
};
