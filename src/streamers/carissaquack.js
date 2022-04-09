


module.exports = {
    CarissaCommands: function(client, channel, user, message) {
        const arr = message.split(" ")
        const command = arr[0]
        let _1 = arr[1]
        let _2 = arr[2]
        
        
        if(message.toLowerCase() === "!roger") {
            client.say(channel, `yeah shut up Roger`);
        }
    }
}