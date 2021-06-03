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
    GITHUB_SECRET: 'd64152727cbd9b895f19eef9e69fa64ba6802a21',
    GITHUB_ID: 'e3eb525b21f9420bad80',
    GOOGLE_SECRET: 'rZwSK9GSkeBwCIBJPdK76lJK',
    GOOGLE_ID: '272283067022-j5oeiug3c7vahug9m2em0rj98iea8c88.apps.googleusercontent.com',
    DATABASE_URL: 'mongodb+srv://cheloAdmin:Chelo123@cluster0.xhdlo.mongodb.net/quichel',
    NEXTAUTH_URL: 'http://192.168.100.41:3000',
    MAPBOX_KEY: 'pk.eyJ1IjoibWFyY2VsaXV4IiwiYSI6ImNrcGdldW1rdDAzM3MydXA0bGdieTkzbjkifQ.SvWV8Zqgstn_MUjCXok4RA'

  }
}