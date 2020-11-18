module.exports = {
  apps : [{
    script: './node_modules/nuxt/bin/nuxt.js',
    watch: '.',
    name: "cudua-commerce-frontend",
    exec_mode: "cluster",
    instances: 'max',
    env: {
      "NODE_ENV": "production",
      "PORT": 3333,
    }
  }]
};
