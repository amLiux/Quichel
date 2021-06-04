const path = require('path')

module.exports = {
  images: {
    domains: [
        "lh3.googleusercontent.com",
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    GITHUB_SECRET: '',
    GITHUB_ID: '',
    GOOGLE_SECRET: '',
    GOOGLE_ID: '',
    DATABASE_URL: '',
    NEXTAUTH_URL: '',
    MAPBOX_KEY: ''

  }
}
