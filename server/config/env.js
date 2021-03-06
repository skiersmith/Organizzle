// LOCAL DEV VARIABLES
let env = {
	NODE_ENV: 'development',
	PORT: 5000,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'trucktool',
	DBPASSWORD: 'trucktool',
	DBHOST: 'ds012578.mlab.com:12578',
	DBNAME: 'trucktool',
	SERVERNAME: 'dev-server'

}


Object.keys(env).forEach(v => {
	process.env[v] = process.env[v] || env[v]
}) 


// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env