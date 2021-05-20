require('dotenv').config();
const request = require('request');

const makeCall = (voiceObj) => {
    var options = {
        method: 'GET',
        url: `https://api-voice.kaleyra.com/v1/?api_key=${process.env.VOICE_API_KEY}&method=${process.env.VOICE_METHOD}&caller=${voiceObj.mobileNumber}&receiver=${process.env.VOICE_RECEIVER}&meta={"OTP": "${voiceObj.otp.split('').join(' ')}"}`
    };

    request(options, function (error, response, body) {
        if (error) return error;
    });
    return options;
}

module.exports = makeCall;
