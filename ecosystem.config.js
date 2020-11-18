module.exports = {
  apps : [{
    script: './node_modules/nuxt/bin/nuxt.js',
    node_args : '-r dotenv/config NODE_ENV=production',
    watch: '.',
    name: "cudua-commerce-frontend",
    exec_mode: "fork",
    instances: 'max'
  }]
};
