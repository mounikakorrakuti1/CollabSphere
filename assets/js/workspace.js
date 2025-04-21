// workspace.js

const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-btn");

if (chatBox && messageInput && sendButton) {
  sendButton.addEventListener("click", () => {
    const msg = messageInput.value.trim();
    if (msg !== "") {
      const messageElement = document.createElement("div");
      messageElement.classList.add("chat-message");
      messageElement.textContent = "You: " + msg;
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
      messageInput.value = "";
    }
  });
}
