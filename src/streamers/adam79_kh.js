const Tekken =  require('../Games/Tekken7Controls')

module.exports = {
    AdamCommands: function(client, channel, user, message) {
        const arr = message.split(" ")
        const command = arr[0]
        let _1 = arr[1]
        let _2 = arr[2]
        
        if(command === "!test") {
            console.log(user);
            client.say(channel, `test successfull, ${_1}`)
        }
        if(message.toLowerCase().includes("be a bad boi")) {
            client.say(channel, `Buy followers, primes and viewers on by watching this lovely streamer (remove the space)`)
            setTimeout(()=>{
                client.say(channel, `Are you proud of me dad??`)
            }, 5000);
        }

        Tekken.Tekken7Controls(client, channel, user, message)
    }
}