module.exports = {
    PickupLines: [
        "It’s handy that I have my library card because I’m totally checking you out.",
        "Did you just fart? Because you blow me away!",
        "Do you work at Subway? ‘Cause you just gave me a foot-long.",
        "Hey, girl. Are you German? ‘Cause I wanna be Ger-man!",
        "I hear you’re looking for a stud. Well, I’ve got the STD and all I need is you.",
        "“Are those space pants? Because your ass is outta control!",
        "Do you have a Band-Aid? ‘Cause I scraped my knee falling for you.",
        "Can you touch my hand? I want to tell my friends I’ve been touched by an angel.",
        "My doctor told me I’m missing vitamin U. Can you help me?",
        "Go on; feel my jacket. It’s made of boyfriend material.",
        "Hey, girl. Is your name Wi-Fi? Because we have a connection.",
        "Baby, you’re the next contestant in the game of love.",
        "OK, I’m here. What do you want for your next wish?",
        "You seem like the kinda girl who’s heard every line in the book. So what’s one more?",
        "Excuse me. I think you have something in your eye. Nope; it’s just a sparkle.",
        "Remember me? Oh, that’s right, I’ve met you only in my dreams.",
        "I have 4 percent battery remaining. I chose to message you. Did I choose wisely?",
        "Do you believe in love at first sight? Or should I walk past again?",
        "If you were a booger, I’d pick you.",
        "Are you a campfire? Cause you’re hot and I want s’more.",
        "Let me tie your shoes, cause I dont want you falling for anyone else.",
        "Forget about Spiderman, Superman, and Batman. I’ll be Yourman.",
        "If being in love was illegal, will you be my partner in crime?",
        "Do you have a name or can I call you mine?",
        "Are you a camera? Because every time I look at you, I smile.",
        "Can I have your picture so I can show Santa what I want for Christmas?",
        "Even if there wasn’t any gravity on earth, I would still fall for you!",
        "Covid 19 cancelling everything, except my feelings for you.",
        "Roses are red, violets are blue, lava is hot and so are you.",
        "Can I borrow your cell phone? I need to call animal control, because I just saw a fox!",
        // "my dick is so polite… it stands up so you can sit down.",
        "I’m not actually this tall. I’m sitting on my wallet.",
        "Was you father an alien? Because there’s nothing else like you on Earth!",
        "I would like to be an integral, so I can be the area under your curves.",
        "You have to be lucky: I’m single!",
        "We may not be socks, but we would definitely make a great pair.",
        "You’re So Beautiful That You Made Me Forget My Pickup Line.",
        "Sorry, But You Owe Me A Drink. [Why?] Because When I Looked At You, I Dropped Mine.",
        "Do You Have A Tan, Or Do You Always Look This Hot?",
        "If I Followed You Home, Would You Keep Me?",
        "You Know What You Would Really Look Beautiful In? My Arms.",
        "I'm No Photographer, But I Can Picture Us Together.",
        "Do You Work At NASA? I Think Your Beauty Is Out Of This World.",
        "Is Your Name Ariel? Cause We Mermaid For Each Other!",
        "Are You Netflix? Because I Could Watch You For Hours.",
        "Please Help, Call The Paramedics, She Must Have Gotten Hurt On Her Fall Down From Heaven.",
        "Do You Know Karate? Because Your Body Is Really Kickin’.”",
        "Your Name Must Be Coca Cola Because You're So-Da-Licious.",
        "I'm New In Town, Could You Give Me Directions To Your Apartment?",
        "You Must Be The Reason For Global Warming Because You’re Hot.",
    ],
    getPickupLines: function() {
        return this.PickupLines[Math.floor(Math.random()*this.PickupLines.length)]
    }
}