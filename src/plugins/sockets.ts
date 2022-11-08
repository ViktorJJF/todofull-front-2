import io from "socket.io-client";
import environment from "@/environment";

let socketUrl =
  environment === "development"
    ? "http://localhost:3000"
    : "https://chatbotmujeron.herokuapp.com";
const socket = io(socketUrl);
import store from "@/store/index";
import { scrollBottom } from "@/utils/utils";

socket.on("CONNECTED", () => {
  console.log("CONECTADO!");
});

socket.on("NEW_MESSAGE", (data) => {
  //   console.log("los mensajes: ", store.default);
  let chatId = store.getters["chatsModule/getChatById"](data.chatId);
  // @ts-ignore
  let chatsModule = store.state.chatsModule;
  let chats = chatsModule.chats;
  let selectedChat = chatsModule.selectedChat;

  // agregando mensaje a chat
  if (selectedChat && data.chatId === selectedChat._id) {
    store.commit("chatsModule/addMessage", {
      mid: data.mid,
      text: data.text,
      from: data.from,
      type: data.type || "text",
      chatId,
      isActive: true,
      payload: data.payload,
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString(),
    });
    scrollBottom();
  }
  // updating last message
  const chatToUpdate = chats.find((chat) => chat._id === data.chatId);
  if (chatToUpdate) {
    chatToUpdate.lastMessage.text = data.text;
    chatToUpdate.updatedAt = new Date().toUTCString();
    // aumentando contador mensajes sin leer
    if (data.from === "Cliente") {
      chatToUpdate.pending_messages_count += 1;
    }
    chatsModule.chats = chatsModule.chats.slice();
  }
});

socket.on("NEW_CHAT", (data) => {
  store.commit("chatsModule/addChat", data);
});
socket.on("RESTART_PENDING_MESSAGES", (data) => {
  // @ts-ignore
  let chatsModule = store.state.chatsModule;
  let chats = chatsModule.chats;
  let chatToUpdate = chats.find((chat) => chat._id === data.chatId);
  if (chatToUpdate) {
    chatToUpdate.pending_messages_count = 0;
  }
});
socket.on("UPDATE_CHAT", (data) => {
  console.log("ACTUALIZANDO CHATS: ", data);
  // @ts-ignore
  let chatsModule = store.state.chatsModule;
  let chats = chatsModule.chats;
  let chatToUpdateIndex = chats.findIndex((chat) => chat._id == data._id);
  if (chatToUpdateIndex > -1) {
    console.log("ENCONTRADO...");
    // chats.splice(chatToUpdateIndex, 1, data);
    chats[chatToUpdateIndex] = data;
    chats = chats.slice();
    console.log("🚀 Aqui *** -> chatToUpdate", chatToUpdateIndex);
    console.log("🚀 Aqui *** -> chatsModule.chats", chatsModule.chats);
  }
});

socket.on("DELETED_MESSAGE", (data) => {
  store.commit("chatsModule/deletedMessage", data);
});

socket.on("UNDO_PENDING_MESSAGES_COUNT", (data) => {
  const { chatId, count } = data;
  // @ts-ignore
  let chatsModule = store.state.chatsModule;
  let chats = chatsModule.chats;
  let chatToUpdateIndex = chats.findIndex((chat) => chat._id == chatId);
  if (chatToUpdateIndex > -1) {
    chats[chatToUpdateIndex].pending_messages_count = count;
  }
});

export default socket;
