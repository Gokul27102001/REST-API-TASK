const {Client} = require('pg')

const client = new Client({
 connectionString: "postgres://bbxkxwzgidixqy:5f41bb2bf52ec1d67dc66d3a150bdedfde9a2ba631fb12471e0415839a914f5b@ec2-34-227-120-79.compute-1.amazonaws.com:5432/d4vtcummcf5f4a",
 ssl: {
 rejectUnauthorized: false
 }
});

module.exports = client
