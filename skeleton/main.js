const Router = require("./router");
const Inbox = require("./Inbox");
const Sent = require("./sent");

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
