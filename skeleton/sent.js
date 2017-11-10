const MessageStore = require('./message_store');

const Sent = {
  render : () => {
    let sentEl = document.createElement("ul");
    let messages = MessageStore.getSentMessages();
    messages.forEach((message) => {
      sentEl.appendChild(Sent.renderMessage(message));
    });
    sentEl.className = "messages";
    return sentEl;
  },
  renderMessage : (message) => {
    let item = document.createElement("li");
    item.className = "message";
    item.innerHTML += `<span class="to">To: ${message.to}</span>`;
    item.innerHTML += `<span class="subject">${message.subject}</span>`;
    item.innerHTML += `<span class="body">${message.body}</span>`;
    return item;
  }
};

module.exports = Sent;
