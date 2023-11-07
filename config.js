const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923184070915"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salman:s4salmanyt@salmanahmad.jj7ymis.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhIbURndWtiTnlGY0hlZkx2OGIvbUxsbWg2WVU5WE5GdllZRXhybnYyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXp5RDZsZEpueU1pM1dMNm1jeVIrV0Q5aWN0dktsSDZITUcwd1pXQVFVaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSVhDVkhOZVVaVHNWUnpkbWlMUUZBSlI3T3JwdGxhMVRFZmFlK1d6aFdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyWWVwdG1mRURuUG00TDAxb2tzZi9KejZlUG40a1R6bXhuUVBEUlhUM21NPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktFcnU2bTNsZk0wZ29EMzlMRVlscDFTbzZJenlnZWFkdXgxR1ZuOHR0bXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1Tb3JxcDNnWFNnTmYvOG5qdTZKdm1UY0lrY2NxV0lhRWcyY2Yvdk8yelE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYUVNiL2RoMmZodit0cnUwMUFUVGQyVTBKK29wS2hQZXhVQkZXdCtjMzdRWmg1R2RZaFZIVnB6VDMvZ1o2ckIxV3U1bDczVXY1U3llSlY2ZkVxRWRnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyOCwiYWR2U2VjcmV0S2V5IjoiUmlnMVppYWZXdk82ZjBxYXZrSUMvMkthMXRtcVpoeWVVUkRKM21uNW0zcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVWVYQy1vRFJUQnlHaU1VMEpkRnNPdyIsInBob25lSWQiOiJjZGMyODczYS1hOGRjLTRmZDItYWE1NS03YzMyOWNkZTI1MTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlZRNmNHUnlNM3dNSGI4WEViT2ZpaERNTFNvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQ1BxWVVjeGVyL1g5U2pucXM1RkF6RHIxRFk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPNmMvNGtIRU9HdHA2b0dHQjg9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InIxUUlWWUlYVzREdWxONWl0YmxGcHd1TEFwZjlDUDBnUEhxV3JTRzVra289IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBrQTNTMUFENmkwU3VNOXd3UlNUMmlFUTk2aVdxdWlJSWlTblVMdFo5QXJLNE5EeVBkeXV1Wis5Z3ZJSkxHU1VBVlp6cXptdHZwbWVqR2FNL1JFQ0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEbFVmNzQ2Y2h1UUdxbE1uWTJVeElxT1ltSDA1WnNxVCtJR2NwazNPU0MvL1c4QXhSdFYwREtHU0Q4SWJFcUVFMEYzV3RmN3lGL3d2SC9naEdXRkhodz09In0sIm1lIjp7ImlkIjoiOTE5OTQ2NTA1MDc1OjM5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IjkxOTk0NjUwNTA3NSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk5NDY1MDUwNzU6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTlVQ0ZXQ0YxdUE3cFRlWXJXNVJhY0xpd0tYL1FqOUlEeDZscTBodVpKSyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5OTMzNzk1NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQeVUifQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
