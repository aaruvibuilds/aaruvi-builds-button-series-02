const mailWindow = document.getElementById("mailWindow");
const sendBtn = document.getElementById("sendBtn");
const again = document.getElementById("again");
const caption = document.getElementById("caption");
const label = sendBtn.querySelector(".send-label");

let state = "idle";
let timer = null;
let pressing = false;

function clearTimer() {
  if (timer) clearTimeout(timer);
  timer = null;
}

function reset() {
  clearTimer();
  state = "idle";
  pressing = false;
  mailWindow.className = "mail-window";
  sendBtn.className = "send-btn";
  sendBtn.disabled = false;
  label.textContent = "Send";
  caption.textContent = "SEND THE MESSAGE";
}

function press() {
  if (state !== "idle" || pressing) return;
  pressing = true;
  sendBtn.classList.add("pressed");
  label.textContent = "Release";
  caption.textContent = "PRESS TO SEND";
}

function release() {
  if (!pressing || state !== "idle") return;
  pressing = false;
  sendBtn.classList.remove("pressed");
  send();
}

function send() {
  state = "sending";
  sendBtn.disabled = true;
  mailWindow.classList.add("launching");
  label.textContent = "Sending";
  caption.textContent = "PREPARING MESSAGE";

  timer = setTimeout(() => {
    state = "sent";
    mailWindow.classList.remove("launching");
    mailWindow.classList.add("sent");
    caption.textContent = "MESSAGE SENT";
  }, 1550);
}

sendBtn.addEventListener("pointerdown", e => {
  if (e.pointerType === "mouse" && e.button !== 0) return;
  press();
});
sendBtn.addEventListener("pointerup", release);
sendBtn.addEventListener("pointercancel", () => {
  if (state !== "idle") return;
  pressing = false;
  sendBtn.classList.remove("pressed");
  label.textContent = "Send";
  caption.textContent = "SEND THE MESSAGE";
});
sendBtn.addEventListener("pointerleave", () => {
  if (!pressing || state !== "idle") return;
  pressing = false;
  sendBtn.classList.remove("pressed");
  label.textContent = "Send";
  caption.textContent = "SEND THE MESSAGE";
});

sendBtn.addEventListener("keydown", e => {
  if ((e.key === " " || e.key === "Enter") && !e.repeat) {
    e.preventDefault();
    press();
  }
});
sendBtn.addEventListener("keyup", e => {
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    release();
  }
});

again.addEventListener("click", reset);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && state !== "idle") reset();
});
