const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setActivity('A Hazel Mom joke!', {type : 'PLAYING'} )
  console.log(`Logged in as ${client.user.tag}!`);
});


// This allows pinging for commands! Module
let isPingCommandEnabled = true; // Ping commands enabled by default

    client.on('message', async (message) => {
      if (message.author.bot) return;
    
      // Check for disable ping commands (adjust prefix as needed)
      if (message.content.startsWith(',Disable ping commands')) {
        isPingCommandEnabled = false;
        await message.channel.send('Ping commands disabled!');
        return;
      }
    
      // Respond to pings only if enabled
      if (isPingCommandEnabled && message.mentions.users.has(client.user.id)) {
        message.reply(`**Hi I'm Mom and here are my commands!**
  __1__. __,mom__ - "This will give you a mom joke"
  __2__. __,info__ - "information if you didn't know what it was"
  __3__ __,mompuzzle__ - "You can solve a mom puzzle. Riddles time out over time! and To cancel Riddles you just say "cancel""
  __4__ __,responses__ - "list of all the words I will respond to"
  __5__ __,enable__ - "activates shared functionality"
  __6__ __,disable__ - "deactivates shared functionality"
  **My prefix is ,**`)
  return
}
  });

// Keep track of last reply time to avoid spamming
let lastReplyTime = 0;



 // Message responses to Bad words! Module
 client.on('message', async message => {
  if (message.author.bot) return;

  const messageToCheck = [
    {words: ['fuck', 'shit', 'kill', 'screw', 'dmn', 'jesus christ', 'bastard', 'whore', 'gyatt', 'circumcised','obese', 'self harm', 'suicide', 'stabbed', 'death', 'skinned', 'heart attack', 'suffocate', 'slut', 'meesex', 'pussy hot', 'rizz', 'sigma', 'mewing', 'wick the dick', 'shitfire', 'cuntuccino', 'fatty', 'fat', 'dead', 'stroke', 'farther gamer', 'justin', 'alex', 'trinity','whale', 'freak', 'hoe', 'burned', 'inhumane', 'buried', 'rot', 'hell'], 
    replies: [`Oh dear, let's keep the chat family-friendly!`, `Remember, negativity is like a boomerang - it comes back around!`, `Is that your "nicest voice?"`, `Oh dear, let's try to express ourselves without using those words, okay?`] },
  ];

  for (const messageData of messageToCheck) {  // Corrected variable name
      if (messageData.words.some(word => message.content.toLowerCase().includes(word)) &&
          (Date.now() - lastReplyTime) > 10000) {
          const randomReplyIndex = Math.floor(Math.random() * messageData.replies.length);  // Select a random reply
          const randomReply = messageData.replies[randomReplyIndex];
          await message.reply(randomReply);
          lastReplyTime = Date.now();
          break;  // Exit the loop after a reply is sent
      }
  }
});


// Message responses! Module
client.on('message', async message => {
  if (message.author.bot) return;

  // List of messages to check for
  const messagesToCheck = [
    {words: ['true mom'], reply: 'Sorry but I\'m the true mom!'},
    {words: ['xd'], reply: '🤣'},
    {words: ['oops'], reply: `I don't know what happened either!`},
    {words: ['sorry'], reply: 'No worries, everyone makes mistakes! 💕'},
    {words: ['goodnight'], reply: 'Sleep tight and sweet dreams! 🌙'},
    {words: ['hug'], reply: 'Sending you a virtual hug! 🤗'},
    {words: ['please'], reply: `No dear you can't have it`},
    {words: ['art'], reply: `I know I do such good work on my art don't I`},
    {words: [`happy mother's day`], reply: `Thank you I am a great mother aren't I!`},
    {words: ['website'], reply: `https://links.net/`},
    {words: ['grammar'], reply: `Here's your grammy lesson kids! https://www.grammarly.com/`},
    {words: ['eepy'], reply: `Are you tired? Do you want a bedtime story sweetie?`},
    {words: ['mom'], reply: `Yes sweetie?`},
  ];

  for (const messageToCheck of messagesToCheck) {
    if (messageToCheck.words.some(word => message.content.toLowerCase().includes(word)) &&
        (Date.now() - lastReplyTime) > 10000) {
      await message.reply(messageToCheck.reply);
      lastReplyTime = Date.now();
      break;
    }
  }
});


// Information module
client.on('message', message => {
  // Here is where you need to code
 if(message.content == ",info") {
    message.channel.send(`__Hazel Mom bot, works seamlessly alongside Daniel Dad bot to create a delightful and balanced experience for your server. They make a perfect duo!__
    Here's what I can do for you:
    :star: Tell you hilarious mom jokes (,mom).
    :star: Challenge you with riddles (,mompuzzle).
    :star: Shared functionality pretty much says what's on the tin. It shares the functionality of the other bot meaning everything the other bot did you get with this command enabled! Remember it does reset When the bots restart!. These bots are made to run independent of each other.

__Note: You'll need the "Manage Server" permission to activate shared functionality.__
Both Hazel Mom and Daniel Dad are open-source bots, meaning their code is publicly available for anyone to inspect or modify. This ensures transparency and allows for community contributions.
Feel free to invite them to your server and discover the fun they bring! You can invite them by clicking on their profile picture and selecting "Add to Server".`);
 }

 if(message.content == ",responses") {
  message.channel.send(`list of words I will respond to!
  __1__ __#### #### ####__
  __2__ __true mom__
  __3__ __xd__
  __4__ __oops__
  __5__ __sorry__
  __6__ __goodnight__
  __7__ __hug__
  __8__ __please__
  __9__ __art__
  __10__ __happy mother's day__`);
}

if(message.content == ",mom_answers") {
  message.channel.send(`Here are the riddle answers!
  __1__ __A mother's love__
  __2__ __Are you finished cleaning your room?__
  __3__ __A historian__
  __4__ __A mother's heart__
  __5__ __A mother's lap__
  __6__ __Neptune__
  __7__ __Gravity__
  __8__ __Black hole__
  __9__ __Picture__
  __10__ __Appliance__
  `);
}


// Jokes module
if(message.content === `,mom`){
  const advices = [
  'Why did the mom go to the art gallery? Because she wanted to see the masterpiece she created!',
  'Why did the mom go to the store with a ladder? Because she heard the prices were climbing!', 
  'Why did the mom go to the bakery? Because she kneaded some dough! 😄', 
  'Why did the scarecrow win an award? Because she was outstanding in her field.' ,
    //3
];
  // get a random number based on the array's length
var randomIndex = Math.floor(Math.random() * advices.length);
// creates the random output of your array
var randomElement = advices[randomIndex];
    
  message.reply(`Here's a mom joke: ${randomElement}`);
  }

  if(message.content == ",mom") {
    message.delete();
  }
    });




   // Riddle module
    const riddles = [
      {
        question: "What has arms but cannot hug, legs but cannot walk, and a face but cannot smile?",
        answer: "A mother's love"
      },
      {
        question: "What question can you never answer yes to when your mom asks it?",
        answer: "Are you finished cleaning your room?"
      },
      {
        question: "What do you call a mom who doesn't mind telling embarrassing stories about you?",
        answer: "A historian"
      },
      {
    question: "I'm always full, but never eat. I open doors, but have no key. I give you wings, but have no feathers. What am I?",
        answer: "A mother's heart"
    },
      {
    question: "I am a shelter from storms, a source of endless wisdom, and a champion of dreams. What am I?",
        answer: "A mother's lap"
    },
      {
    question: "NUAOGIRTN - What is the largest planet in our solar system?",
        answer: "Neptune"
    },
      {
    question: "RATGYVI - What force attracts objects towards each other?",
        answer: "Gravity"
    },
      {
    question: "CKLHEBOALCKLHEBOAL - What is a region in space with such immense gravity that not even light can escape?",
        answer: "Black hole"
    },
      {
    question: "IECRTPU - Something that goes on a nail on the wall?",
        answer: "Picture"
    },
      {
    question: "ENALCPNIPA - This is something you use everyday.",
        answer: "Appliance"
    },
    
      // Add more riddles to the array as desired
    ];
    
    let riddleInProgress = false;
    let currentRiddle;
    let currentAuthor;
    let timeout;
    
    client.on('message', message => {
      if (message.content === ',mompuzzle' && !message.author.bot) {
        if (!riddleInProgress) {
          currentRiddle = riddles[Math.floor(Math.random() * riddles.length)];
          message.channel.send(currentRiddle.question);
          currentAuthor = message.author;
          riddleInProgress = true;
    
          const filter = m => m.author === currentAuthor;
          const collector = message.channel.createMessageCollector(filter, { time: 60000 });
    
          collector.on('collect', m => {
            if (m.content.toLowerCase() === currentRiddle.answer.toLowerCase()) {
              message.channel.send("Congratulations! You cracked the code!!");
              collector.stop();
              riddleInProgress = false;
              clearTimeout(timeout);
            } else if (m.content.toLowerCase() === 'cancel') {
              message.channel.send("Riddle canceled.");
              collector.stop();
              riddleInProgress = false;
              clearTimeout(timeout);
            } else {
              message.channel.send("Oops, that's not quite right. Keep trying!");
            }
          });
    
          collector.on('end', collected => {
            if (riddleInProgress && !collected.size) {
              timeout = setTimeout(() => {
                message.channel.send("Riddle timed out. Type `,dadpuzzle` to start a new riddle.");
                riddleInProgress = false;
              }, 15000);
            }
          });
        } else {
          message.channel.send("There's already a riddle in progress. Type 'cancel' to end the current riddle and start a new one.");
        }
      }
    }); 





// Shared functionality module
let isSharedFunctionalityEnabled = false; // Now disabled by default

client.on('message', async (message) => {
  if (message.author.bot) return;

  // Check for enable/disable commands (adjust prefix as needed)
  if (message.content.startsWith(',enable')) {
    isSharedFunctionalityEnabled = true;
    await message.channel.send('**Shared functionality enabled!**\n\nPlease be aware that enabling shared functionality might result in both bots responding to the same messages, potentially causing excessive responses. Consider separating the bots into different channels for optimal performance if you experience spamming.');
    return;
  } else if (message.content.startsWith(',disable')) {
    isSharedFunctionalityEnabled = false;
    await message.channel.send('Shared functionality disabled!');
    return;
  }

  // Conditionally execute shared functionality code
  if (isSharedFunctionalityEnabled) {
    // List of messages to check for
    const messagesToCheck = [
      {words: ['dick', 'cock', 'kill yourself', 'bitch', 'motherfucking', 'die'], reply: `Hey there,  Let's try using words that wouldn't make your grandma blush, okay?`},
      {words: ['ass', 'shut', 'cunt', 'piss', 'bullshit', 'sex'], reply: `Hey there,  Let's try using words that wouldn't make your grandma blush, okay?`},
      {words: ['lol'], reply: '🤣'},
      {words: ['cat'], reply: 'ᓚᘏᗢ'},
      {words: ['ty', 'thank you'], reply: 'You\'re welcome!'},
      {words: ['brb'], reply: 'Take your time!'},
      {words: ['rip'], reply: 'You made an impact on our lives, and we\'ll always remember you. Rest in peace.'},
      {words: ['positive'], reply: 'I\'m always happy to keep it a nice and positive space!'},
      {words: ['howdy'], reply: 'Howdy!'},
      {words: ['monkey'], reply: '🐵'},
      {words: ['farther gamer'], reply: `If you mention Pinocchio nose one more time, he's going to sniff you up!!`},
      {words: ['awful', 'worst'], reply: `Ugh, bad days are the worst!  Is there anything I can do to cheer you up?`},
      {words: ['great', 'amazing'], reply: `I'm so happy it was!`},
      // Add more message-reply pairs here
    ];

    for (const messageToCheck of messagesToCheck) {
      if (
        messageToCheck.words.some(
          (word) => message.content.toLowerCase().includes(word)
        ) &&
        (Date.now() - lastReplyTime) > 10000
      ) {
        await message.reply(messageToCheck.reply);
        lastReplyTime = Date.now();
        break;
      }
    }
  }
});



//client.login(process.env.Token);
client.login("Your token here from Discord!");
client.on('ready', () => {
console.log(`Key is accepted now running the bot!`);
  });