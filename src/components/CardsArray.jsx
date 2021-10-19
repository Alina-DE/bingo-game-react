const cardsArray = [
    "(child noises in the background)",
    "Hello, hello?",
    "I need to jump in another call",
    "Can everyone go on mute?",
    "Could you please get closer to the mic",
    "(loud painful echo / feedback)",
    "Next slide, please",
    "Can we take this offline?",
    "Is ...... on the call?",
    "Could you share the slides afterwards?",
    "Can someone grant host rights?",
    "Can you email that to everyone?",
    "Raise your hand to ask a question",
    "Sorry, I had problems logging in",
    "(animal noises in the background)",
    "Sorry, I couldn't find the meeting ID",
    "I had connection issues",
    "I'll have to get back to you",
    "Who just joined?",
    "Sorry, something .... with my calender",
    "Can you see my screen?",
    "Let's wait for ...!",
    "Will you send the minutes?",
    "Sorry, I was on mute",
    "Can you repeat, please?"
];


cardsArray.sort( () => {
    return 0.5 - Math.random()
})


export default cardsArray