var robot = require("robotjs");

// const RocketLeagueControls = ({client, channel, message}) => {
    
// }
module.exports = {
    Tekken7Controls: function(client, channel, user, message) {

        const grp1 = ['a','b','c','d','e','f','g','h','i','j','k','l', 'm','n']
        const grp2 = ['o','p','q','r','s','t','u','v','w','x','y','z']


        if(message.toLowerCase()==="!tekken") {
            client.say(channel, `The commands to play Tekken: jump, right, left, crouch, accept, lkick, rkick, lpunch, rpunch, rage, assist`)
        }


        if(grp1.indexOf(user.username.toLowerCase()[0]) !== -1){
        
            if(message.toLowerCase()=== "jump") {   
                robot.keyToggle("z", "down")
                setTimeout(()=>{
                    robot.keyToggle("z", "up")
                }, 1500);    
            }
            
            if(message.toLowerCase()=== "right") {         
                robot.keyTap("d")
            }
            if(message.toLowerCase()=== "left") {         
                robot.keyTap("q")
            }
            if(message.toLowerCase()=== "crouch") {         
                robot.keyTap("s")
            }

            if(message.toLowerCase()=== "lkick"||message.toLowerCase()=== "accept") {         
                robot.keyTap("j")
            }

            if(message.toLowerCase()=== "rkick") {         
                robot.keyTap("k")
            }
            if(message.toLowerCase()=== "lpunch") {         
                robot.keyTap("u")
            }
            if(message.toLowerCase()=== "rpunch") {         
                robot.keyTap("i")
            }
            if(message.toLowerCase()=== "rage") {
                robot.keyTap("o")
            }
            if(message.toLowerCase()=== "assist") {
                robot.keyToggle("p", "down")
                setTimeout(()=>{
                    robot.keyToggle("p", "up")
                }, 1500);
            }
        }else {
            if(message.toLowerCase()=== "jump") {
                robot.keyTap("up")
            }
            if(message.toLowerCase()=== "right") {
                robot.keyTap("right")
            }
            if(message.toLowerCase()=== "left") {
                robot.keyTap("left")
            }
            if(message.toLowerCase()=== "crouch") {
                robot.keyTap("down")
            }
            if(message.toLowerCase()=== "lkick" || message.toLowerCase()=== "accept") {
                robot.keyTap("4")
            }
            if(message.toLowerCase()=== "rkick") {
                robot.keyTap("5")
            }
            if(message.toLowerCase()=== "lpunch") {
                robot.keyTap("7")
            }
            if(message.toLowerCase()=== "rpunch") {
                robot.keyTap("8")
            }
            if(message.toLowerCase()=== "rage") {
                robot.keyTap("6")
            }
            if(message.toLowerCase()=== "assist") {
                robot.keyTap("9", "down")
                setTimeout(()=>{
                    robot.keyToggle("9", "up")
                }, 1500);
            }
        }
        // X: left punch : u
        // Y: right punch : i
        // A: left kick : j
        // B: right kick : k
        // RB: RAGE : o
        // LB: assist: p
    }
}