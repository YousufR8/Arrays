let secretMessage = ['Programming', 'is', 'not', 'so', 'hard', 'easily', 'get', 'right', 'the', 'first', 'time'];

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');

let easilyIndex = secretMessage.indexOf('easily');
secretMessage[easilyIndex] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' '));