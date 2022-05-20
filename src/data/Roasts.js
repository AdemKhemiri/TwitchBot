module.exports = {
    Roasts: [
        "I'm not saying i hate you but i would unplug your life support to charge my phone.",
        "it's called KARMA, and it's pronounced 'haha fuck you'",
        "Maybe you should eat some makeup so you can be pretty on the inside too.",
        "If you were a cookie, you'd be a whoreo.",
        "I hope KARMA slaps you in the face before i do.",
        "Is there an app I can download to make you disappear?",
        "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
        "Did you hear about the two bald guys who have put their heads together? They made an ass out of themselves.",
        "Don’t you get tired of putting make up on two faces every morning?",
        "Sorry, sarcasm falls out of my mouth like bullshit falls out of yours.",
        "I’d smack you, but that would be animal abuse.",
        "my mum told me to take out the trash but i couldn’t find you LUL",
        "i would roast you but your mirror does every time you look into it.",
        "your hairline goes back to when Adam and Eve were born.",
        "Were you born on a highway because most accidents happen on the highway.",
        "You have the right to remain silent because whatever you say will probably be stupid anyway.",
        "Roasting you is a waste of my time.",


    ],
    getRoast: function() {
        return this.Roasts[Math.floor(Math.random()*this.Roasts.length)]
    }
}