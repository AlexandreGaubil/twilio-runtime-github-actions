exports.handler = function (context, event, callback,) {
  let twiml = new Twilio.twiml.VoiceResponse();
  const gather = twiml.gather({
    numDigits: 1,
    action: 'handle-user-input?room=0',
    hints: 'room 1, room 2',
    input: 'dtmf',
  });
  
  gather.say('Welcome to the home room.');
  gather.say('Press 1 or say Room 1 to go to Room 1.');
  gather.say('Press 2 or say Room 2 to go to Room 2.');
  //gather.say('Press 3 or say Address to receive a text message with our address');
  twiml.say(`Sorry we couldn't understand you`);
  twiml.redirect();
  callback(null, twiml);
};
