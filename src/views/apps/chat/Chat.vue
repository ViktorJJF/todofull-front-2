<template>
  <v-row>
    <v-col cols="12" sm="9">
      <v-card>
        <!---/Main Box chat list -->
        <BaseLeftRightPartVue>
          <!---/Left chat list -->
          <template v-slot:channels>
            <v-btn
              small
              @click="addPlatform('whatsapp')"
              :class="{
                'ma-2': true,
                selected: activePlatforms.includes('whatsapp'),
              }"
              text
              icon
              color="white"
            >
              <v-icon class="whatsapp-color">mdi-whatsapp</v-icon>
              <v-tooltip activator="parent" anchor="bottom">Activo</v-tooltip>
            </v-btn>
            <v-btn
              small
              @click="addPlatform('instagram')"
              :class="{
                'ma-2': true,
                selected: activePlatforms.includes('instagram'),
              }"
              text
              icon
              color="white"
            >
              <v-icon class="instagram-color">mdi-instagram</v-icon>
              <v-tooltip activator="parent" anchor="bottom"
                >Instagram</v-tooltip
              >
            </v-btn>
            <v-btn
              small
              @click="addPlatform('facebook')"
              :class="{
                'ma-2': true,
                selected: activePlatforms.includes('facebook'),
              }"
              text
              icon
              color="white"
            >
              <v-icon class="messenger-color">mdi-facebook-messenger</v-icon>
              <v-tooltip activator="parent" anchor="bottom">Tooltip</v-tooltip>
            </v-btn>
          </template>
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
            <v-sheet elevation="6">
              <v-tabs
                v-model="tabCategory"
                background-color="primary"
                class="d-flex align-center"
              >
                <v-tab v-for="category in chatCategories" :key="category">
                  <span class="mb-1">{{ category }}</span>
                </v-tab>
              </v-tabs>
            </v-sheet>
            <v-window v-model="tabCategory">
              <v-window-item :value="0">
                <v-list>
                  <!---/chat list -->
                  <v-list-item
                    v-for="(chat, i) in filteredChats"
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
                            :src="
                              getProfilePic(chat) ||
                              `/assets/images/users/3.jpg`
                            "
                            width="45"
                          ></v-img>
                        </v-avatar>
                      </v-list-item-avatar>
                    </template>
                    <!---/Icon -->
                    <v-list-item-header>
                      <!---/Title -->
                      <v-list-item-title class="font-weight-medium">
                        <i
                          :class="`mr-2 mdi text-h7 ${getPlatformIconStyle(
                            chat.platform
                          )}`"
                        ></i>
                        {{ getChatUserName(chat) }}
                      </v-list-item-title>
                      <!---/Subtitle -->
                      <v-list-item-subtitle class="text-truncate d-block">
                        {{ chat.lastMessage ? chat.lastMessage.text : "" }}
                      </v-list-item-subtitle>
                      <!---/Title -->
                    </v-list-item-header>
                  </v-list-item>
                </v-list>
              </v-window-item>
              <v-window-item :value="1">
                <v-list>
                  <!---/chat list -->
                  <v-list-item
                    v-for="(chat, i) in filteredChats"
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
                            :src="
                              getProfilePic(chat) ||
                              `/assets/images/users/3.jpg`
                            "
                            width="45"
                          ></v-img>
                        </v-avatar>
                      </v-list-item-avatar>
                    </template>
                    <!---/Icon -->
                    <v-list-item-header>
                      <!---/Title -->
                      <v-list-item-title class="font-weight-medium">
                        <i
                          :class="`mr-2 mdi text-h7 ${getPlatformIconStyle(
                            chat.platform
                          )}`"
                        ></i>
                        {{ getChatUserName(chat) }}
                      </v-list-item-title>
                      <!---/Subtitle -->
                      <v-list-item-subtitle class="text-truncate d-block">
                        {{ chat.lastMessage ? chat.lastMessage.text : "" }}
                      </v-list-item-subtitle>
                      <!---/Title -->
                    </v-list-item-header>
                  </v-list-item>
                </v-list>
              </v-window-item>
              <v-window-item :value="2">
                <v-list>
                  <!---/chat list -->
                  <v-list-item
                    v-for="(chat, i) in filteredChats"
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
                            :src="
                              getProfilePic(chat) ||
                              `/assets/images/users/3.jpg`
                            "
                            width="45"
                          ></v-img>
                        </v-avatar>
                      </v-list-item-avatar>
                    </template>
                    <!---/Icon -->
                    <v-list-item-header>
                      <!---/Title -->
                      <v-list-item-title class="font-weight-medium">
                        <i
                          :class="`mr-2 mdi text-h7 ${getPlatformIconStyle(
                            chat.platform
                          )}`"
                        ></i>
                        {{ getChatUserName(chat) }}
                      </v-list-item-title>
                      <!---/Subtitle -->
                      <v-list-item-subtitle class="text-truncate d-block">
                        {{ chat.lastMessage ? chat.lastMessage.text : "" }}
                      </v-list-item-subtitle>
                      <!---/Title -->
                    </v-list-item-header>
                  </v-list-item>
                </v-list>
              </v-window-item>
            </v-window>
          </template>
          <!---/Right chat list -->
          <template v-slot:rightpart>
            <template v-if="selectedChat">
              <!---chat header-->
              <div class="d-flex pa-4 align-center">
                <v-avatar size="45" class="mr-3"
                  ><img
                    :src="
                      getProfilePic(selectedChat) ||
                      `/assets/images/users/3.jpg`
                    "
                    width="45"
                /></v-avatar>
                <div class="user-about">
                  <h4>
                    <i
                      :class="`mr-2 mdi text-h7 ${getPlatformIconStyle(
                        selectedChat.platform
                      )}`"
                    ></i>
                    {{ getChatUserName(selectedChat) }}
                  </h4>
                </div>
                <v-spacer></v-spacer>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="
                        selectedChat.isBotActive
                          ? connectAgent(selectedChat)
                          : endConversation(selectedChat)
                      "
                      icon="mdi-robot"
                      :color="selectedChat.isBotActive ? 'success' : 'error'"
                    ></v-btn>
                  </template>
                  <span>Tooltip</span>
                </v-tooltip>
                <AgentsSelector></AgentsSelector>
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
                        v-if="message.from == 'Agente'"
                      >
                        <img
                          src="/assets/images/users/3.jpg"
                          width="35"
                          alt="..."
                        />
                      </v-avatar>
                      <v-avatar
                        size="35"
                        class="mx-2"
                        v-if="message.from == 'Cliente'"
                      >
                        <img
                          :src="
                            getProfilePic(selectedChat) ||
                            `/assets/images/users/3.jpg`
                          "
                          alt="..."
                          width="35"
                        />
                      </v-avatar>
                      <v-avatar
                        size="35"
                        class="mx-2"
                        v-if="message.from == 'Chatbot'"
                      >
                        <img
                          :src="`/assets/images/users/bot.jpg`"
                          alt="..."
                          width="35"
                        />
                      </v-avatar>
                    </div>
                    <v-chip
                      :color="
                        message.from == 'Cliente'
                          ? ''
                          : message.from == 'Chatbot'
                          ? 'bot'
                          : 'primary'
                      "
                    >
                      {{ message.text }}
                    </v-chip>
                  </div>
                </perfect-scrollbar>
              </div>

              <!---Send Message Footer-->
              <div class="pa-4">
                <v-textarea
                  v-model="text"
                  name="input-4-1"
                  rows="2"
                  variant="outlined"
                  hide-details
                  no-resize
                  @keyup.enter="sendTextMessage(text)"
                  :label="
                    selectedChat.isBotActive
                      ? 'Desactiva el chatbot para intervenir chat'
                      : 'Escribe y presiona Enter'
                  "
                  :disabled="selectedChat.isBotActive"
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
    <v-col cols="12" sm="3" v-if="selectedChat">
      <v-sheet elevation="6">
        <v-tabs
          v-model="tabForm"
          background-color="primary"
          class="d-flex align-center"
        >
          <v-tab :value="0">
            <v-icon class="mb-1" start> mdi-account </v-icon>
          </v-tab>
          <v-tab :value="1">
            <v-icon class="mb-1" start> mdi-image </v-icon>
          </v-tab>
          <v-tab :value="2">
            <v-icon class="mb-1" start> mdi-attachment </v-icon>
          </v-tab>
        </v-tabs>
      </v-sheet>
      <v-window v-model="tabForm">
        <v-window-item :value="0">
          <div style="background-color: #ffffff" class="mb-7">
            <v-card-text class="pa-5 border-bottom">
              <h3 class="title text-h6">Usuario</h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pa-5 border-bottom">
              <v-text-field
                dense
                outlined
                label="Nombres"
                placeholder="Username"
                append-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                label="Teléfonos"
                placeholder="Username"
                append-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                label="Correo"
                placeholder="Email"
                append-icon="mdi-email"
              ></v-text-field>
              <div class="mt-4">
                <v-btn color="success" outlined class="text-capitalize mr-2"
                  >Guardar</v-btn
                >
              </div>
            </v-card-text>
          </div>
        </v-window-item>
        <v-window-item :value="1"> </v-window-item>
        <v-window-item :value="2"> </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script  lang="ts">
import { formatDistance } from "date-fns";
import chatsService from "@/services/api/chats";
import messagesService from "@/services/api/messages";
import { scrollBottom, getDataFromLeadDetail } from "@/utils/utils";
import socket from "@/plugins/sockets";
import { es } from "date-fns/locale";
// import InfiniteScroll from "@/components/InfiniteScroll.vue";
import BaseLeftRightPartVue from "@/components/BaseLeftRightPart.vue";
import { buildSuccess } from "@/utils/utils.ts";
import AgentsSelector from "@/components/AgentsSelector.vue";

export default {
  components: {
    // InfiniteScroll,
    BaseLeftRightPartVue,
    AgentsSelector,
  },
  // filters: {
  //   formatDate: function (value) {
  //     let date = new Date(value);
  //     return formatDistance(new Date(), date, { addSuffix: true, locale: es });
  //   },
  // },
  data() {
    return {
      activePlatforms: [],
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
      chatCategories: ["Pendientes", "Resueltos", "Todos"],
      formCategories: ["Pendientes", "Resueltos", "Todos"],
      tabCategory: 2,
      tabForm: 0,
      // userData
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize(page = 1) {
      // traer listado de chats
      await Promise.all([
        this.$store.dispatch("chatsModule/list", {
          page,
          search: this.search,
          fieldsToSearch: this.fieldsToSearch,
          sort: "updatedAt",
          order: "desc",
        }),
      ]);
      // this.$store.commit("chatsModule/setChats", this.chats);
      this.chats = this.$store.state.chatsModule.chats;
    },
    async selectChat(chat) {
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
      socket.emit("AGENT_MESSAGE", {
        senderId: this.selectedChat.leadId.contactId,
        chatId: this.selectedChat._id,
        text: text,
        pageID: this.selectedChat.pageID,
        platform: this.selectedChat.platform,
      });
      scrollBottom();
    },
    connectAgent(chat) {
      if (chat.isBotActive) {
        chat.isBotActive = false;
        buildSuccess("Chatbot desactivado correctamente");
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("🚀 Aqui *** -> user", user);
        let message =
          "🤝👩🏻‍💼 Ahora estás conversando con el agente " +
          user.first_name +
          " " +
          user.last_name;
        console.log("CONECTANDO AGENTE");
        this.sendTextMessage(message, "Chatbot");
        this.isAgentConnected = true;
        // se cambia estado de atendiendo agente en bd
        chatsService.update(this.selectedChat._id, {
          // userId: user._id,
          isBotActive: false,
        });
        scrollBottom();
        socket.emit("CONNECT_AGENT", {
          senderId: this.selectedChat.leadId.contactId,
          chatId: this.selectedChat._id,
          text: message,
          pageID: this.selectedChat.pageID,
          platform: chat.platform,
        });
      }
    },
    endConversation(chat) {
      chat.isBotActive = true;
      buildSuccess("Chatbot reactivado");
      const user = JSON.parse(localStorage.getItem("user"));
      let message = `El agente ${user.first_name} ${user.last_name} se ha desconectado`;
      this.sendTextMessage(message, "Chatbot");
      this.isAgentConnected = false;
      this.selectedChat.userId = null;
      chatsService.update(this.selectedChat._id, {
        userId: null,
        isBotActive: true,
      });
      socket.emit("DISCONNECT_AGENT", {
        senderId: this.selectedChat.leadId.contactId,
        chatId: this.selectedChat._id,
        text: message,
        pageID: this.selectedChat.pageID,
        platform: chat.platform,
      });
    },
    errorStory() {
      this.isErrorStory = true;
    },
    loadStory() {
      this.isErrorStory = false;
    },
    async selectChat(chat) {
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
    getChatUserData(chat: Object): Object {
      let userData = getDataFromLeadDetail(chat.cleanLeadId.details);
      return userData;
    },
    getChatUserName(chat: Object): String {
      let userData = chat.cleanLeadId
        ? this.getChatUserData(chat)
        : chat.leadId
        ? chat.leadId.sourceName
        : "Usuario";
      if (chat.leadId && chat.leadId.sourceName) {
        return chat.leadId.sourceName;
      }
      if (userData) {
        return userData.nombre;
      }
      return "Usuario";
    },
    getUserDataByPlatform(chat: Object): Object {
      let details = chat.cleanLeadId.details;
    },
    getPlatformIconStyle(platform: String): String {
      const platforms = {
        whatsapp: "mdi-whatsapp whatsapp-color",
        facebook: "mdi-facebook-messenger messenger-color",
        instagram: "mdi-instagram instagram-color",
      };
      return platforms[platform];
    },
    getProfilePic(chat: Object): String {
      if (chat.leadId) {
        return chat.leadId.profile_pic;
      }
    },
    addPlatform(platform: String): void {
      if (this.activePlatforms.includes(platform)) {
        this.activePlatforms = this.activePlatforms.filter(
          (p) => p !== platform
        );
      } else {
        this.activePlatforms.push(platform);
      }
    },
  },
  computed: {
    filteredChats() {
      return this.activePlatforms.length > 0
        ? this.chats.filter((chat) =>
            this.activePlatforms.includes(chat.platform)
          )
        : this.chats;
    },
  },
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
