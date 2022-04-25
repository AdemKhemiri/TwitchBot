module.exports = {
    DadJokes: [
        "/me Why do pirates take so long to learn the alphabet? They spend months at C",
        "/me Why did the pirate not want an iPad? he'd rather have an iPatch",
        "/me Why don’t eggs tell jokes? They’d crack each other up.",
        "/me Did I tell you the time I fell in love during a backflip? I was heels overhead!",
        "/me Did you hear about the Italian chef who died? He pasta way!",
        "/me Do mascara and lipstick ever argue? Sure, but then they make up.",
        "/me How do celebrities stay cool? They have many fans.",
        "/me My boss told me to have a good day, so I went home!",
        "/me Why do dogs float in water? Because they are good buoys.",
        "/me Why don’t skeletons ever go trick or treating? Because they have nobody to go with!",
        "/me Why is that cemetery so popular? People are just dying to get in there!",
        "/me Why was the dad sitting on a pack of playing cards? His kid asked him to sit on the deck.",
        "/me Can February march? No, but April may!",
        "/me Did you hear that I’m reading a book about anti-gravity? It’s impossible to put down.",
        "/me What did the buffalo say when his son left? Bison!",
        "/me Which is faster, hot or cold? Hot, because you can catch a cold.",
        "/me Why are snails bad at racing? They’re sluggish.",
        "/me I don’t trust stairs. They’re always up to something.",
        "/me Did you hear about the two antennas that got married? I heard that the wedding was terrible but the reception was amazing!"

    ],
    getJoke: function() {
        return this.DadJokes[Math.floor(Math.random()*this.DadJokes.length)]
    }
}