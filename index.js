function shout(string) {
  return 'hello'.toUpperCase();
}

function whisper(string) {
  return 'HELLO'.toLowerCase();
}

function logShout(string) {
  console.log('hello'.toUpperCase());
}

function logWhisper(string) {
  console.log('HELLO'.toLowerCase());
}

function sayHiToGrandma(string) {
  var uppercase = 'HELLO'
  var lowercase = 'hello'
     uppercase = string.toUpperCase();
     lowercase = string.toLowerCase();

  if (string == lowercase) {
    return "I can't hear you!";
  } else if (string == uppercase) {
    return "YES INDEED!";
  } else if (string == "I love you, Grandma.") {
    return "I love you, too.";
  }


}
