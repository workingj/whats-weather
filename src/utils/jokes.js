
const weatherJokes = [
    {
        "Q": "How do hurricanes see?",
        "A": "With one eye!"
    },
    {
        "Q": "What does a cloud wear under his raincoat?",
        "A": "Thunderwear!"
    },
    {
        "Q": "What type of lightning likes to play sports?",
        "A": "Ball lightning!"
    },
    {
        "Q": "What type of cloud is so lazy, because it will never get up?",
        "A": "Fog!"
    },
    {
        "Q": "What did the lightning bolt say to the other lightning bolt?",
        "A": "You’re shocking!"
    },
    {
        "Q": "Whatever happened to the cow that was lifted into the air by the tornado?",
        "A": "Udder disaster!"
    },
    {
        "Q": "What did the one tornado say to the other?",
        "A": "Let’s twist again like we did last summer."
    },
    {
        "Q": "What did the thermometer say to the other thermometer?",
        "A": "You make my temperature rise."
    },
    {
        "Q": "What happens when fog lifts in California?",
        "A": "UCLA!"
    },
    {
        "Q": "What’s the difference between a horse and the weather?",
        "A": "One is reined up and the other rains down."
    },
    {
        "Q": "What did one raindrop say to the other raindrop?",
        "A": "My plop is bigger than your plop."
    },
    {
        "Q": "Why did the woman go outdoors with her purse open?",
        "A": "Because she expected some change in the weather."
    },
    {
        "Q": "What type of lightning likes to play sports?",
        "A": "Ball lightning."
    },
    {
        "Q": "What’s the difference between weather and climate?",
        "A": "You can’t weather a tree, but you can climate."
    },
    {
        "Q": "What happens when it rains cats and dogs?",
        "A": "You have to be careful not to step in a poodle."
    },
    {
        "Q": "What do you call it when it rains chickens and ducks?",
        "A": "Foul (fowl) weather."
    },
    {
        "Q": "What did the hurricane say to the other hurricane?",
        "A": "I have my eye on you."
    },
    {
        "Q": "How do you find out the weather when you’re on vacation?",
        "A": "Go outside and look up."
    },
]

export default function getJoke() {
    return weatherJokes[Math.floor(Math.random() * 18 + 1)];
}
