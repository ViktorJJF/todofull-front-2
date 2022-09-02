import io from "socket.io-client";
import environment from "@/environment.ts";

let socketUrl =
  environment === "development"
    ? "http://localhost:3000"
    : "https://todofull.club";
const socket = io(socketUrl);
import store from "@/store/index.ts";
import { scrollBottom } from "@/utils/utils.ts";

socket.on("CONNECTED", () => {
  console.log("CONECTADO!");
});

socket.on("NEW_MESSAGE", (data) => {
  //   console.log("los mensajes: ", store.default);
  let chatId = store.getters["chatsModule/getChatById"](data.chatId);
  let chatsModule = store.state.chatsModule;
  let chats = chatsModule.chats;
  let selectedChat = chatsModule.selectedChat;

  // agregando mensaje a chat
  if (selectedChat && data.chatId === selectedChat._id) {
    store.commit("chatsModule/addMessage", {
      mid: data.mid,
      text: data.text,
      from: data.from,
      type: "text",
      chatId,
      isActive: true,
      payload: data.payload,
    });
    scrollBottom();
  }
  // actualizando ultima fecha mensaje recibido
  let lastChat = chats.find((el) => el._id === data.chatId);
  // console.log('🚀 Aqui *** -> lastChat', lastChat);
  // if (lastChat && lastChat.last_message) {
  //   lastChat.last_message[0].createdAt = new Date();
  // }
});

socket.on("NEW_CHAT", (data) => {
  store.commit("chatsModule/addChat", data);
});

socket.on("DELETED_MESSAGE", (data) => {
  store.commit("chatsModule/deletedMessage", data);
});

export default socket;
