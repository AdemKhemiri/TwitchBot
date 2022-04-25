

module.exports = {
    AdriannaCommands: function(client, channel, user, message) {
        const arr = message.split(" ")
        const command = arr[0]
        let _1 = arr[1]
        let _2 = arr[2]
        

        if(command.toLowerCase() === "!kiss") {
            client.say(channel, `<3 @${user.username} has kissed ${_1} 💋 <3`)
        }
    }
}
