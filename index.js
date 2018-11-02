var Twitter = require('twitter');

var client = new Twitter({
    consumer_key : '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

var params = {screen_name: ''};
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