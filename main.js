// message generator program

// list of messages for astrology

const msgArray = [
    'Anyone can be a millionaire, but to become a billionaire you need an astrologer.',
    'A physician without a knowledge of Astrology has no right to call himself a physician.',
    'Astrology reveals the will of the gods.',
    'Astrology is just a finger pointing at reality.',
    'We need not feel ashamed of flirting with the zodiac.  The zodiac is well worth flirting with.',
    'The starry vault of heaven is in truth the open book of cosmic projection…',
    'Astrology is one of the oldest and most accurate tools known to mankind.',
    'Astrology is a Language. If you understand this language, The Sky Speaks to You.',
    'Without astrology man treads, as it were, in the dim twilight of ignorance.',
    'Your path is illuminated by a road-map of stars. I am here to guide you!',
    'Astrology has no more useful function than this, to discover the inmost nature of a man and to bring it out into his consciousness, that he may fulfil it according to the law of light.'
];

// selection function
const rndMessage = () => {
    return {
        msg1: 0,
        msg2: 0,
        msg3: 0,
        msgGenerator () {
        // assign first message
        msg1 = Math.floor(Math.random() * msgArray.length);
        console.log(`first message: ${msgArray[msg1]}`);

        // create second message
        do {
            msg2 = Math.floor(Math.random() * msgArray.length);
         } while (msg1 === this.msg2);
        console.log(`second message: ${msgArray[msg2]}`);

         // create third message
         do {
            msg3 = Math.floor(Math.random() * msgArray.length);
         } while (msg1 === this.msg3 && msg2 === this.msg3);
        console.log(`third message: ${msgArray[msg3]}`);        

        },
    }
}

// join together and output as a string

// run the program
console.log(rndMessage().msgGenerator());

