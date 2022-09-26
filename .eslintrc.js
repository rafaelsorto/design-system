module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-rafaelsortosv`
  extends: ["rafaelsortosv"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
