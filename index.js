var Twitter = require('twitter');

var client = new Twitter({
    consumer_key : process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var params = {screen_name: process.env.SCREEN_NAME};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if(!error) {
//         console.log(tweets);
//     }
// });

client.post('statuses/update', {status: 'Cool, tweeting from nodejs function deployed on Microsoft Azure.'}, function(error, tweet, response){
    if(!error) {
        console.log(tweet);
    }
});