const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable ', (nickname) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
        rl.question('Which meal is your favourite? ', (meal) => {
            rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
                
      console.log(`Hello ${nickname}. Your favourite activity is ${activity}.
      You enjoy the sound of ${music}. Your favourite thing to eat for ${meal} is ${food}`)
    
 rl.close();
});
  });
});
});
});