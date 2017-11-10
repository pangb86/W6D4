const MessageStore = require('./message_store');

const Inbox = {
  render : () => {
    let inboxEl = document.createElement("ul");
    let messages = MessageStore.getInboxMessages();
    messages.forEach((message) => {
      inboxEl.appendChild(Inbox.renderMessage(message));
    });
    inboxEl.className = "messages";
    return inboxEl;
  },
  renderMessage : (message) => {
    let item = document.createElement("li");
    item.className = "message";
    item.innerHTML += `<span class="from">${message.from}</span>`;
    item.innerHTML += `<span class="subject">${message.subject}</span>`;
    item.innerHTML += `<span class="body">${message.body}</span>`;


    return item;
  }
};

module.exports = Inbox;
