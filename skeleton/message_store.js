const MessageStore = {
  messages : {
  sent: [
    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
    {to: "person@mail.com", subject: "zzz", body: "so booring"}
  ],
  inbox: [
    {from: "grandma@mail.com", subject: "Fwd: Fwd: Fwd: Check this out",
    body:"Stay at home mom discovers cure for leg cramps. Doctors hate her"},
    {from: "person@mail.com", subject: "Questionnaire",
    body: "Take this free quiz win $1000 dollars"} ]
  },

  getInboxMessages : () => {
    return MessageStore.messages.inbox;
  },

  getSentMessages : () => {
    return MessageStore.messages.sent;
  },

  message : (from, to, subject, body) => {
    let messageContents = {to: to, from: from, subject: subject, body: body};
  },

  messageDraft : MessageStore.message(),
  
};


module.exports = MessageStore;
