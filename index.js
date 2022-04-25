const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');
const db = require('./database')
require('dotenv').config();
const Carissa = require('./src/streamers/carissaquack')
const Cass = require('./src/streamers/spookycass')
const Adam = require('./src/streamers/adam79_kh')
const Adrianna = require('./src/streamers/adriannaxoo')
const Roasts = require('./src/data/Roasts');
const DadJokes = require('./src/data/DadJokes')

const { default: axios } = require('axios');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OATH_PASSWORD
    },
    channels: [
        channel,
        // "cassandramarie1"
        "spookycass",
        // "carissaquack",
        // "lilbusterx",
        // "meeya_8",
        // "adriannaxoo",
        // "TyrellTheCreator_06",
        // "chipmunkkiesses",
        // "Archangeltricks",
        // "kindaalmostalice"
    ]
    // channels: process.env.CHANNEL_NAMES.split(",")
};

const client = new tmi.Client(options)
client.connect().catch(console.error);

client.on('connected', () => {
    // client.say(channel, "AdamBot is connected bitches");
    // db.connection()
});

client.on('message', (channel, user, message, self) => {
    if(self) return;
    const arr = message.split(" ")
    const command = arr[0]
    let _1 = arr[1]
    let _2 = arr[2]

    if(message.toLowerCase().includes("sus")) {
        client.say(channel, `ඞ`)
    }
    // if(message.toLowerCase().includes("!host")) {
    //     client.host("adam79_bot", "spookycass").then((data)=>{
    //         console.log(data);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }
    if(command.toLowerCase()==="!addtoadam") {
        client.say(channel, `Welcome in @${user.username}!!`)

    }
    if(user['first-msg']) {
        client.say(channel, `Welcome in @${user.username}!!`)

    }

    if(message.toLowerCase().includes("adopted")) {
        client.say(channel, `Mommy Ady will adopt me!! BibleThump`)
    }
    if(message.toLowerCase().includes("say hello")) {
        client.say(channel, `Hello friends <3 <3`)
    }
    if(message.toLowerCase().includes("say goodbye")) {
        client.say(channel, `Thank you for welcoming me, love you all <3`)
    }
    // if(message.toLowerCase() === "meeya") {
    //     client.say(channel, `i thought that strima is ded LUL`);
    // }
    if(message.toLowerCase().includes("fuck off")) {
        client.say(channel, `no, fuck you ${user.username}`);
    }
    if(command.toLowerCase() === "!hello") {
        client.say(channel, `No hello for you @${user.username}, fuck off!!`);
    }
    // if(message.toLowerCase() === "cass") {
    //     client.say(channel, `Cass is the love of Adam's life!!`);
    // }
    if(message.toLowerCase() === "!riot") {
        let RiotText = ""
        for (let index = 0; index < 10; index++) {
            RiotText += "NO BROADCASTER PogChamp ";
        }
        client.say(channel, RiotText);
    }


    if(message.includes("ditching")) {
        client.say(channel, `if you ditch me @${user.username}, i'll come for you`);
    }

    if(command.toLowerCase() === "!love" && _1.toLowerCase().includes("abby")) {
        client.say(channel, `100% for sure`)
    }

    // LOVE COMMAND
    if(command.toLowerCase() === "!love") {
        if(_1 === undefined) {
            client.say(channel, `Please specify a username.`)
            return
        }
        let loveValue = Math.floor(Math.random()*101);
        if(
            (
                _1.toLowerCase().includes('rissa')||
                _1.toLowerCase().includes('cass')||
                _1.toLowerCase().includes('adri')||
                _1.toLowerCase().includes('archa')
            )
            && user.username.toLowerCase().includes("adam")) {
            loveValue = 100;
        }
        client.say(channel, `there is a ${loveValue}% chance of love between ${user.username} and ${_1}`)
    }


    if(command === "!roasts") {
        if(_1 === undefined) {
            client.say(channel, `Please specify a username.`)
            return
        }
        if(_1.toLowerCase().includes("adam"))
            client.say(channel, `HAHA bitch, nice try`)
        else if (_1.toLowerCase().includes("cass")||_1.toLowerCase().includes("rissa")||_1.toLowerCase().includes("arch"))
            client.say(channel, `HOW DARE YOU TRY ROASTING THE QUEEN ${_1.toUpperCase()}, YOUR SIN IS UNFORGIVABLE`)
        else
            client.say(channel, `${_1}, ${Roasts.getRoast()}`)
    }
    if(message.toLowerCase().includes("adamjandro")||message.toLowerCase().includes("adam jandro")) {
        client.say(channel, `${user.username}, don't you dare!! cmonBruh`);
    }

    if(message.toLowerCase() === "!dadjokes") {
        client.say(channel, DadJokes.getJoke());
    }
    // CARISSA CHANNEL
    if(channel === "#carissaquack") {
        Carissa.CarissaCommands(client, channel, user, message)
    }
    // CASSANDRAA CHANNEL
    if(channel === "#spookycass") {
        Cass.CassCommands(client, channel, user, message)
    }
    // ADRIANNAXOO CHANNEL
    if(channel === "#adriannaxoo") {
        Adrianna.AdriannaCommands(client, channel, user, message)
    }
    if(channel === "#kindaalmostalice") {
        if(command.toLowerCase() === "!love") {
            if(_1 === undefined) {
                client.say(channel, `Please specify a username.`)
                return
            }
            let loveValue = Math.floor(Math.random()*101);
            // if(
            //     (
            //         _1.toLowerCase().includes('alice')
            //     )
            //     && user.username.toLowerCase().includes("adam")) {
            //     client.say(channel, `${user.username}, what love are you talking about ? it's none existant Jebaited`)
            //     return
            // }
            client.say(channel, `there is a ${loveValue}% chance of love between ${user.username} and ${_1}`)
        }
    }
    // ADAM CHANNEL
    if(channel === "#adam79_kh"){
       Adam.AdamCommands(client, channel, user, message)
    }

    // if(command === "!RL") {
    //     RLSelected = true
    // }
    // RL.RocketLeagueControls(client, channel, message)


})
