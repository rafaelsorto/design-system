module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-rafaelsorto`
  extends: ["rafaelsorto"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
