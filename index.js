var Twitter = require('twitter');

var client = new Twitter({
    consumer_key : '6G61eCnaKSOVlT2vPwyA45lOb',
    consumer_secret: 'eXdKNpxLwssp3ABRclIA37samLwSW17BYVMZunLNRRmfPE607B',
    access_token_key: '2506190910-a3R17bBA5ineN3l11ks65nj40Jj33swARw77Y7B',
    access_token_secret: 'DpFFHoaYmhzUkwjSilDopjTWx4p6v8Nt8mrsvS4080R2R'
});

var params = {screen_name: 'bhagi_009'};
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