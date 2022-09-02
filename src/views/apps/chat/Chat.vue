<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-card>
        <!---/Main Box chat list -->
        <BaseLeftRightPartVue>
          <!---/Left chat list -->
          <template v-slot:leftpart>
            <div class="pa-5 border-bottom">
              <v-text-field
                label="Buscar contacto"
                variant="outlined"
                density="compact"
                hide-details
                v-model="handleSearchInput"
              ></v-text-field>
            </div>
            <v-list>
              <!---/chat list -->
              <v-list-item
                v-for="(chat, i) in chats"
                :key="i"
                class="mb-2"
                :class="true ? 'active' : 's'"
                @click="() => selectChat(chat)"
                two-line
              >
                <!---/Icon -->
                <template v-slot:prepend>
                  <v-list-item-avatar
                    icon
                    start
                    class="v-list-item-avatar--start"
                  >
                    <v-avatar size="45">
                      <v-img
                        :src="`/assets/images/users/3.jpg`"
                        width="45"
                      ></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </template>
                <!---/Icon -->
                <v-list-item-header>
                  <!---/Title -->
                  <v-list-item-title class="font-weight-medium">
                    {{ getDataFromLeadDetail(chat.cleanLeadId.details).nombre }}
                  </v-list-item-title>
                  <!---/Subtitle -->
                  <v-list-item-subtitle class="text-truncate d-block">
                    {{ chat.lastMessage.text }}
                  </v-list-item-subtitle>
                  <!---/Title -->
                </v-list-item-header>
              </v-list-item>
            </v-list>
          </template>
          <!---/Right chat list -->
          <template v-slot:rightpart>
            <template v-if="selectedChat">
              <!---chat header-->
              <div class="d-flex pa-4 align-center">
                <v-avatar size="45" class="mr-3"
                  ><img :src="`/assets/images/users/3.jpg`" width="45"
                /></v-avatar>
                <div class="user-about">
                  <h4>
                    {{
                      getDataFromLeadDetail(selectedChat.cleanLeadId.details)
                        .nombre
                    }}
                  </h4>
                </div>
              </div>
              <v-divider></v-divider>
              <!---chat Room-->
              <div class="chat-room pa-4">
                <perfect-scrollbar
                  class="chat-room-box-height"
                  id="content_section"
                >
                  <div
                    class="d-flex align-center mb-4"
                    light
                    v-for="message in $store.state.chatsModule.messages"
                    :key="message._id"
                    :class="{
                      fromMe: message.from != 'Cliente',
                      messageItem: true,
                    }"
                  >
                    <div class="thumb">
                      <v-avatar
                        size="35"
                        class="mx-2"
                        v-if="message.from != 'Cliente'"
                      >
                        <img
                          src="/assets/images/users/3.jpg"
                          width="35"
                          alt="..."
                        />
                      </v-avatar>
                      <v-avatar size="35" class="mx-2" v-else>
                        <img
                          :src="`/assets/images/users/2.jpg`"
                          alt="..."
                          width="35"
                        />
                      </v-avatar>
                    </div>
                    <v-chip :color="message.from != 'Cliente' ? 'primary' : ''">
                      {{ message.text }}
                    </v-chip>
                  </div>
                </perfect-scrollbar>
              </div>

              <!---Send Message Footer-->
              <div class="pa-4">
                <v-textarea
                  name="input-4-1"
                  rows="2"
                  variant="outlined"
                  hide-details
                  no-resize
                  @keydown="addMessage"
                  label="Escribe y presiona Enter"
                ></v-textarea>
              </div>
            </template>
            <template v-else>
              <div
                id="content_section"
                class="d-flex justify-center h-100 align-center"
              >
                <h4>Start conversation</h4>
              </div>
            </template>
          </template>
        </BaseLeftRightPartVue>
      </v-card>
    </v-col>
  </v-row>
</template>

<script  lang="ts">
import { formatDistance } from "date-fns";
import chatsService from "@/services/api/chats";
import messagesService from "@/services/api/messages";
import { scrollBottom, getDataFromLeadDetail } from "@/utils/utils";
// import socket from "@/plugins/sockets";
import { es } from "date-fns/locale";
// import InfiniteScroll from "@/components/InfiniteScroll.vue";
import BaseLeftRightPartVue from "@/components/BaseLeftRightPart.vue";

export default {
  components: {
    // InfiniteScroll,
    BaseLeftRightPartVue,
  },
  // filters: {
  //   formatDate: function (value) {
  //     let date = new Date(value);
  //     return formatDistance(new Date(), date, { addSuffix: true, locale: es });
  //   },
  // },
  data() {
    return {
      chat: null,
      chats: [],
      messages: [],
      selectedChat: null,
      text: "",
      isAgentConnected: false,
      dialog: null,
      isErrorStory: false,
      selectedMessage: null,
      search: "",
      fieldsToSearch: ["foreign_telefono", "foreign_name"],
      page: 1,
      pageCount: 0,
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize(page = 1) {
      // traer listado de chats
      console.log("STORE: ", this.$store.state);
      await Promise.all([
        this.$store.dispatch("chatsModule/list", {
          page,
          search: this.search,
          fieldsToSearch: this.fieldsToSearch,
          sort: "updatedAt",
          order: "desc",
          platform: "whatsapp",
        }),
      ]);
      // this.$store.commit("chatsModule/setChats", this.chats);
      this.chats = this.$store.state.chatsModule.chats;
    },
    async selectChat(chat) {
      console.log("🚀 Aqui *** -> chat", chat);
      this.selectedChat = chat;
      this.$store.commit("chatsModule/setSelectedChat", chat);
      this.messages = (
        await messagesService.listByChat({
          chatId: chat._id,
          sort: "createdAt",
          order: "asc",
        })
      ).data.payload;
      console.log("🚀 Aqui *** -> this.messages", this.messages);
      this.$store.commit("chatsModule/setMessages", this.messages);
      this.messages = this.$store.state.chatsModule.messages;
      this.chat = chat;
      scrollBottom();
    },
    sendTextMessage(text, from = "Agente") {
      console.log("ENVIANDO MENSAJE: ", text, from);
      let payload = {
        text,
        from,
        type: "text",
        chatId: this.selectedChat._id,
        isActive: true,
      };
      // guardando en bd
      messagesService.create(payload);
      this.messages.push(payload);
      this.text = "";
      console.log("🚀 Aqui *** -> this.selectedChat", this.selectedChat);
      // socket.emit("AGENT_MESSAGE", {
      //   senderId: this.selectedChat.leadId.contactId,
      //   chatId: this.selectedChat._id,
      //   text: text,
      //   pageID: this.selectedChat.pageID,
      // });
    },
    connectAgent() {
      const user = JSON.parse(localStorage.getItem("user"));
      let message =
        "🤝👩🏻‍💼 Ahora estás conversando con el agente " +
        user.first_name +
        " " +
        user.last_name;

      if (!this.isAgentConnected) {
        console.log("CONECTANDO AGENTE");
        this.sendTextMessage(message, "Chatbot");
        this.isAgentConnected = true;
        // se cambia estado de atendiendo agente en bd
        chatsService.update(this.selectedChat._id, { userId: user._id });
        scrollBottom();
        // socket.emit("CONNECT_AGENT", {
        //   senderId: this.selectedChat.leadId.contactId,
        //   chatId: this.selectedChat._id,
        //   text: message,
        //   pageID: this.selectedChat.pageID,
        // });
      }
    },
    endConversation() {
      const user = JSON.parse(localStorage.getItem("user"));
      let message = `El agente ${user.first_name} ${user.last_name} se ha desconectado`;
      this.sendTextMessage(message, "Chatbot");
      this.isAgentConnected = false;
      this.selectedChat.userId = null;
      chatsService.update(this.selectedChat._id, { userId: null });
      // socket.emit("DISCONNECT_AGENT", {
      //   senderId: this.selectedChat.leadId.contactId,
      //   chatId: this.selectedChat._id,
      //   text: message,
      //   pageID: this.selectedChat.pageID,
      // });
    },
    errorStory() {
      this.isErrorStory = true;
    },
    loadStory() {
      this.isErrorStory = false;
    },
    getDataFromLeadDetail(details) {
      return getDataFromLeadDetail(details);
    },
    async selectChat(chat) {
      console.log("🚀 Aqui *** -> chat", chat);
      this.selectedChat = chat;
      this.$store.commit("chatsModule/setSelectedChat", chat);
      this.messages = (
        await messagesService.listByChat({
          chatId: chat._id,
          sort: "createdAt",
          order: "asc",
        })
      ).data.payload;
      this.$store.commit("chatsModule/setMessages", this.messages);
      this.messages = this.$store.state.chatsModule.messages;
      scrollBottom();
    },
  },
  computed: {},
  watch: {
    messages() {
      console.log("NUEVO MENSAJE RECIBIDO");
      scrollBottom();
    },
    async search() {
      clearTimeout(this.delayTimer);
      this.delayTimer = setTimeout(() => {
        this.initialize(this.page);
      }, 600);
    },
  },
};
</script>
<style lang="scss">
.fromMe {
  flex-direction: row-reverse;
}
.chat-room-box-height {
  height: calc(100vh - 440px);
}
</style>
