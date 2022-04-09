var robot = require("robotjs");

// const RocketLeagueControls = ({client, channel, message}) => {
    
// }
module.exports = {
    RocketLeagueControls: function(client, channel, message) {
        // client.say(channel, "ROCKET LEAGUE GAME SELECTED")
        if(message.toLowerCase()=== "jump") {
            robot.mouseClick("right")
        }
        if(message.toLowerCase()=== "forward") {         
            robot.keyToggle("z", "down")
            setTimeout(()=>{
                robot.keyToggle("z", "up")
            }, 1500);       
        }
        if(message.toLowerCase()=== "left") {
            robot.keyToggle("q", "down")
            robot.keyToggle("z", "down")
            setTimeout(()=>{
                robot.keyToggle("z", "up")
                robot.keyToggle("q", "up")
            }, 500);
        }
        if(message.toLowerCase()=== "right") {
            robot.keyToggle("z", "down")
            robot.keyToggle("d", "down")
            setTimeout(()=>{
                robot.keyToggle("z", "up")
                robot.keyToggle("d", "up")
            }, 500);
        }
    }
}

// export default RocketLeagueControls;