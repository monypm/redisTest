var redis = require('redis');
var client = redis.createClient();

client.on('error', funtion (err) {
    console.log("Error " + err);
});

client.set("Name", "John", redis.print);
client.hset("HashValues", "HashKey1", "100", redis.print);