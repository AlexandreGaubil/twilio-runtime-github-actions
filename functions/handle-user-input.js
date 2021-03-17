function sendMessage(context, event) {
  const client = context.getTwilioClient();
  return client.messages
    .create({
      from: event.To,
      to: event.From,
      body:
        'We are located at the University of Chicago.',
    })
    .then(
      (resp) => resp,
      (err) => {
        console.log(err);
        return Promise.resolve();
      }
    );
}

exports.handler = function (context, event, callback) {
  let UserInput = event.Digits || event.SpeechResult;
  let twiml = new Twilio.twiml.VoiceResponse();

  // No User Input
  if (!UserInput) {
    twiml.say('Sorry something went wrong. Please call again');
    return callback(null, twiml);
  }

  // User Input is text: prompt user to use keyboard?
  if (UserInput.length > 1) {
    if (UserInput.toLowerCase().includes('room 1')) {
      UserInput = '1';
    } else if (UserInput.toLowerCase().includes('room 2')) {
      UserInput = '2';
    } else if (UserInput.toLowerCase().includes('address')) {
      UserInput = '3';
    }
  }

  // User Input is a digit: move to according room
  switch (event.room) {
    case '1': //confused egret
      switch (UserInput) { 
      case '1':
        twiml.redirect('room-2');
        break;
      default:
        twiml.redirect('room-1');
      }
      break;
  
    case '2': //number
      switch (UserInput) {
      case '1':
        //twiml.say("Thank you. You will now be forwarded to the home.")
        twiml.redirect('room-3');
        break;
      default:
        //twiml.say('Sorry, we did not recognize your option. Please try again.');
        twiml.redirect('room-2');
      }
      break;
    
    case '3': //attempts to take ring from
      switch (UserInput) {
      case '1':
        twiml.redirect('room-4');
        break;
      case '4':
        twiml.redirect('room-5');
        break;
      default:
        twiml.redirect('room-3');
      }
      break;
      
    case '4': //is in
      switch (UserInput){
        case '1':
          twiml.redirect('room-1');
          break;
        default:
          twiml.redirect('room-4');
      }
      break;
    
    case '5': //Japanese
      switch (UserInput){
        case '4':
          twiml.redirect('room-6');
          break;
        default:
          twiml.redirect('room-5');
      }
      break;
      
    case '6': //figuratively has bow of
      switch (UserInput){
        case '4':
          twiml.redirect('room-7');
          break;
        case '5':
          twiml.redirect('room-12');
          break;
        default:
          twiml.redirect('room-6');
      }
      break;
    
    case '7': //money
      switch (UserInput){
        case '4':
          twiml.redirect('room-8');
          break;
        default:
          twiml.redirect('room-7');
      }
      break;
    
    case '8': //is a distant cousin of
      switch (UserInput){
        case '4':
          twiml.redirect('room-9');
          break;
        case '2':
          twiml.redirect('room-20');
          break;
        default:
          twiml.redirect('room-8');
      }
      break;
    
    case '9': //scavenger
      switch (UserInput){
        case '4':
          twiml.redirect('room-10');
          break;
        default:
          twiml.redirect('room-9');
      }
      break;
    
    case '10': //bites off the finger of
      switch (UserInput){
        case '4':
          twiml.redirect('room-11');
          break;
        case '3':
          twiml.redirect('room-15');
          break;
        default:
          twiml.redirect('room-10');
      }
      break;
      
    case '11': //laughter around
      switch (UserInput){
        case '4':
          twiml.redirect('room-3');
          break;
        default:
          twiml.redirect('room-11');
      }
      break;
    
    case '12': //perfect
      switch (UserInput){
        case '5':
          twiml.redirect('room-13');
          break;
        default:
          twiml.redirect('room-12');
      }
      break;
    
    case '13': //under
      switch (UserInput){
        case '5':
          twiml.redirect('room-14');
          break;
        default:
          twiml.redirect('room-13');
      }
      break;
    
    case '14': //green citrus
      switch (UserInput){
        case '5':
          twiml.redirect('room-6');
          break;
        default:
          twiml.redirect('room-14');
      }
      break;
    
    case '20': //crooked question
      switch (UserInput){
        case '2':
          twiml.redirect('room-21');
          break;
        default:
          twiml.redirect('room-20');
      }
      break;
    
    case '21': //says the sea calls us to
      switch (UserInput){
        case '2':
          twiml.redirect('room-22');
          break;
        case '7':
          twiml.redirect('room-23');
          break;
        default:
          twiml.redirect('room-21');
      }
      break;
    
    case '22': //and we
      switch (UserInput){
        case '2':
          twiml.redirect('room-16');
          break;
        default:
          twiml.redirect('room-22');
      }
      break;
    
    case '16': //tells riddles to
      switch (UserInput){
        case '2':
          twiml.redirect('room-19');
          break;
        case '3':
          twiml.redirect('room-17');
          break;
        default:
          twiml.redirect('room-16');
      }
      break;
    
    case '19': //regressed
      switch (UserInput){
        case '2':
          twiml.redirect('room-8');
          break;
        default:
          twiml.redirect('room-19');
      }
      break;
      
    case '15': //heartless
      switch (UserInput){
        case '3':
          twiml.redirect('room-16');
          break;
        default:
          twiml.redirect('room-15');
      }
      break;
    
    case '17': //ravel after
      switch (UserInput){
        case '3':
          twiml.redirect('room-18');
          break;
        default:
          twiml.redirect('room-17');
      }
      break;
    
    case '18': //arizona angel 
      switch (UserInput){
        case '3':
          twiml.redirect('room-10');
          break;
        default:
          twiml.redirect('room-18');
      }
      break;
    
    case '23': //small songbird before
      switch (UserInput){
        case '7':
          twiml.redirect('room-25');
          break;
        default:
          twiml.redirect('room-23');
      }
      break;
    
    case '25': //is the father in law of
      switch (UserInput){
        case '7':
          twiml.redirect('room-26');
          break;
        case '6':
          twiml.redirect('room-32');
          break;
        default:
          twiml.redirect('room-25');
      }
      break;
    
    case '26': //an empty church
      switch (UserInput){
        case '7':
          twiml.redirect('room-27');
          break;
        default:
          twiml.redirect('room-26');
      }
      break;
    
    case '27': //a tool's
      switch (UserInput){
        case '7':
          twiml.redirect('room-21');
          break;
        default:
          twiml.redirect('room-27');
      }
      break;
    
    case '32': //Connecticut east conditions
      switch (UserInput){
        case '6':
          twiml.redirect('room-30');
          break;
        default:
          twiml.redirect('room-32');
      }
      break;
    
    case '30': //had a crush on
      switch (UserInput){
        case '6':
          twiml.redirect('room-29');
          break;
        case '8':
          twiml.redirect('room-33');
          break;
        default:
          twiml.redirect('room-30');
      }
      break;
    
    case '29': //Peru's capital
      switch (UserInput){
        case '6':
          twiml.redirect('room-28');
          break;
        default:
          twiml.redirect('room-29');
      }
      break;
    
    case '28': //interrupts
      switch (UserInput){
        case '6':
          twiml.redirect('room-25');
          break;
        default:
          twiml.redirect('room-28');
      }
      break;
    
    case '33': //hide
      switch (UserInput){
        case '8':
          twiml.redirect('room-34');
          break;
        default:
          twiml.redirect('room-33');
      }
      break;
    
    case '34': //a proverb
      switch (UserInput){
        case '8':
          twiml.redirect('room-35');
          break;
        default:
          twiml.redirect('room-34');
      }
      break;
    
    case '35': //canada geese
      switch (UserInput){
        case '8':
          twiml.redirect('room-30');
          break;
        default:
          twiml.redirect('room-35');
      }
      break;
    
    
    default:
      switch (UserInput) {
      case '1':
        //twiml.say("Thank you. You will now be moved to Room 1.")
        twiml.redirect('room-1');
        //twiml.dial(context.MY_PHONE_NUMBER);
        break;
      case '2':
        //twiml.say('You are now entering Room 2.');
        twiml.redirect('room-2');
        break;
      //case '3':
        //twiml.say('We will send you a text message with our address in a minute.');
        //break;
      default:
        twiml.say('Sorry, we did not recognize your option. Please try again.');
        twiml.redirect('voice-ivr');
      }
  }

  let request = Promise.resolve();
  if (UserInput === '3') {
    request = sendMessage(context, event);
  }

  request
    .then(() => {
      callback(null, twiml);
    })
    .catch((err) => {
      callback(err);
    });
};
