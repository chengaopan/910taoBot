const { Wechaty, Message } = require("wechaty");

const config = require("../../config/config");
const logMSG = require("../tool/log");
const replyToAMessage = require("../tool/replyToAMessage");


module.exports = (bot) => {
  return async function onMessage(msg) {
    // 判断消息来自自己或三分钟前的消息，直接return
    if (msg.self() || msg.age() > 180) return;

    logMSG(msg);

    if (msg.type() == Message.Type.Text) {
		let rp = await replyToAMessage(msg);
        await msg.say(rp);
    } else {
      await msg.say("目前只看得懂文字啦 ♪(´ε｀ )");
    }
  };
};
