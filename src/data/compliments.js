module.exports = {
    Compliments: [
        "You’re that “Nothing” when people ask me what I’m thinking about.",
        "Who raised you? They deserve a medal for a job well done.",
        "You’re the coolest person I know. And I consider myself best friends with like all celebrities, so...",
        "You’re a gift to those around you.",
        "You’re even better than a unicorn, because you’re real.",
        "You bring out the best in other people.",
        "On a scale from 1 to 10, you're an 11.",
        "You're a candle in the darkness.",
        "Being around you is like being on a happy little vacation.",
        "You're my reason to smile.",
        "Your warm energy brings this family together.",
        "You are the best friend one could ask for.",
        "You're incredible.",
        "In High School, I Bet You Were Voted \"Most Likely To Keep Being Awesome.\"",
        "Talking To You Is Like A Breath Of Fresh Air.",
        "You Are A Ray Of Sunshine On A Rainy Day.",
        "I Bet You Sweat Glitter.",
        "Somehow You Make Time Stop And Fly All At The Same Time.",
        "Luckily, You're Not A Drug Because I Would Be A Nasty Addict, And You'd Have To Pay For Rehab."


    ],
    getCompliments: function() {
        return this.Compliments[Math.floor(Math.random()*this.Compliments.length)]
    }
}