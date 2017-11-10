/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__(1);
const Inbox = __webpack_require__(2);
const Sent = __webpack_require__(4);

let routes = {
  inbox : Inbox,
  sent : Sent
};

// console.log("It's working!");
document.addEventListener("DOMContentLoaded", function() {
  let sidebarList = Array.from(document.querySelectorAll(".sidebar-nav li"));
  let content = document.querySelector(".content");
  console.log(content);
  let router = new Router(content, routes);
  router.start();
  sidebarList.forEach((el) => {
    el.addEventListener("click", (event) => {
      let newLocation = el.innerText.toLowerCase();
      window.location.hash = newLocation;
    });
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Router {
  constructor(node, routes){
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", (event) => {
      this.render();
    });
  }

  render() {
    let component = this.activeRoute();
    if (component === undefined) {
      this.node.innerHTML = "";
    } else {
      this.node.innerHTML = "";
      let el = component.render();
      this.node.appendChild(el);
    }
  }

  activeRoute() {
    let hashName = window.location.hash.slice(1);
    for (var key in this.routes) {
      if ( key === hashName) {
        return this.routes[key];
      }
    }

  }
}

module.exports = Router;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const MessageStore = __webpack_require__(3);

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const MessageStore = __webpack_require__(3);

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


/***/ })
/******/ ]);