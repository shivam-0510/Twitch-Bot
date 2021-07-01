const tmi = require('tmi.js');

const options = {
    debug : true,
    connection:{
        cluster:'aws',
        reconnect:true
    },
    identity:{
        username:'FitChallengeBot',
        password:'oauth:dn7t9ckcaov921ky4kbwuzwi7ap9pv',
    },
    channels:['shivam_05_'],
};

const client = new tmi.client(options);
client.connect();
client.on('connected',(address,port)=>{
    client.action('shivam_05_','Hello FitChallenegBot is connected');
});

client.on('chat', (channel, user, message, self)=>{
    if(message==='!game'){
        client.action('shivam_05_','shivam_05_ is playing GTA V');
    }

    client.action('shivam_05_',`Hello ${user['display-name']}`)
})