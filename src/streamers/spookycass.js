

module.exports = {
    CassCommands: function(client, channel, user, message) {
        const arr = message.split(" ")
        const command = arr[0]
        let _1 = arr[1]
        let _2 = arr[2]

        if(command.toLowerCase() === "dee") {
            client.say(channel, "Just dee honestly")
        }

        if(command === "!simp") {
            if(user.username.toLowerCase().includes("adam") && channel.toLowerCase()==="#spookycass" && _1.toLowerCase().includes("cass"))
                client.say(channel, `Is that even a question?? Adam is no simp, He's Cassandra's soulmate`)
            else {
                if(_1===undefined)
                    _1="Cass"
                client.say(channel, `${user.username} is a ${Math.floor(Math.random()*101)}% simp for ${_1}`)
            }
        }

        if(message.toLowerCase().includes("be a bad boi")) {
            client.say(channel, `Buy followers, primes and viewers on by watching this lovely streamer (remove the space)`)
            setTimeout(()=>{
                client.say(channel, `Are you proud of me dad??`)
            }, 5000);
        }
        if(message.toLowerCase().includes("veng")) {
            client.say(channel, `GO vengeance GO ResidentSleeper`);
        }
    }
}