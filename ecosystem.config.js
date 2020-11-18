module.exports = {
  apps : [{
    script: './node_modules/nuxt/bin/nuxt.js',
    watch: '.',
    name: "cudua-commerce-frontend",
    exec_mode: "fork",
    instances: 'max'
  }]
};
