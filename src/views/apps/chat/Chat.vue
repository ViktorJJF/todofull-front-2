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
              <v-tooltip activator="parent" anchor="bottom">Whatsapp</v-tooltip>
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
              <v-tooltip activator="parent" anchor="bottom"
                >Messenger</v-tooltip
              >
            </v-btn>
          </template>
          <template v-slot:leftpart>
            <div class="pa-5 border-bottom">
              <v-text-field
                label="Buscar contacto"
                variant="outlined"
                density="compact"
                hide-details
                v-model="searchContact"
              ></v-text-field>
            </div>

            <v-list>
              <!---/chat list -->
              <v-progress-circular
                v-if="!isDataReady"
                class="v-progress-linear"
                indeterminate
                color="primary"
              ></v-progress-circular>

              <div v-else class="">
                <!---/Icon -->
                <InfiniteScroll :key="updateScroll" @loadMore="loadMore">
                  <div
                    :class="{
                      msg: true,
                      online: true,
                      'chat-active':
                        selectedChat && chat._id == selectedChat._id,
                    }"
                    v-for="(chat, i) in filteredChats"
                    :key="i"
                    @click="() => selectChat(chat)"
                  >
                    <img
                      class="msg-profile"
                      :src="getProfilePic(chat) || `/assets/images/users/3.jpg`"
                      width="45"
                      alt=""
                    />
                    <div class="msg-detail">
                      <div class="msg-username">
                        <i
                          :class="`mr-2 mdi text-h7 ${getPlatformIconStyle(
                            chat.platform
                          )}`"
                        ></i>
                        {{ getChatUserName(chat) }}
                      </div>
                      <div class="msg-content">
                        <span class="msg-message">{{
                          chat.lastMessage ? chat.lastMessage.text : ""
                        }}</span>
                        <span class="msg-date">{{
                          formatDate(chat.updatedAt, "HH:mm")
                        }}</span>
                      </div>
                    </div>
                  </div>
                </InfiniteScroll>
              </div>
            </v-list>
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
                <AgentsSelector
                  :telefonoId="
                    selectedChat.cleanLeadId
                      ? selectedChat.cleanLeadId?.telefonoId?._id
                      : selectedChat.leadId?.telefonoId?._id
                  "
                  @onSelectedAgent="onSelectedAgent"
                ></AgentsSelector>
              </div>

              <v-divider></v-divider>
              <!---chat Room-->
              <div class="chat-room pa-4">
                <v-progress-circular
                  v-show="!isChatMessageReady"
                  class="v-progress-linear"
                  indeterminate
                  color="primary"
                ></v-progress-circular>
                <perfect-scrollbar
                  v-show="isChatMessageReady"
                  class="chat-room-box-height"
                  id="content_section"
                >
                  <div
                    v-for="formattedMessage in formattedMessages"
                    :key="formattedMessage._id"
                    :class="{
                      'chat-msg': true,
                      owner: formattedMessage.from != 'Cliente',
                    }"
                  >
                    <div class="chat-msg-profile">
                      <img
                        class="chat-msg-img"
                        :src="
                          formattedMessage.from == 'Chatbot'
                            ? '/assets/images/users/bot.jpg'
                            : formattedMessage.from == 'Agente'
                            ? '/assets/images/users/3.jpg'
                            : getProfilePic(selectedChat) ||
                              `/assets/images/users/3.jpg`
                        "
                        alt=""
                      />
                      <div class="chat-msg-date">
                        {{ formatDate(formattedMessage.date) }}
                      </div>
                    </div>
                    <div class="chat-msg-content">
                      <div
                        class="mb-2"
                        v-for="message in formattedMessage.messages"
                        :key="message._id"
                      >
                        <div
                          v-if="message.type === 'text' || !message.type"
                          class="chat-msg-text"
                          v-html="parseMarkdown(message.text)"
                        ></div>
                        <div
                          v-if="message.type === 'image'"
                          class="chat-msg-text"
                        >
                          <img :src="message.payload.url" />
                        </div>
                        <div
                          v-if="message.type === 'template'"
                          class="chat-msg-text"
                        >
                          <v-row justify="center">
                            <div>
                              <v-img
                                class="rounded-corners"
                                :src="
                                  message.payload.product.elements[0].image_url
                                "
                                aspect-ratio="1"
                                contain
                              ></v-img>
                              <v-card
                                color="#F0F2F5"
                                outlined
                                class="pa-3"
                                width="200"
                              >
                                <strong>{{
                                  message.payload.product.elements[0].title
                                }}</strong>
                                <p>
                                  {{
                                    message.payload.product.elements[0].subtitle
                                  }}
                                </p>
                              </v-card>
                            </div>
                          </v-row>
                        </div>
                        <div
                          v-if="message.type === 'file'"
                          class="chat-msg-text"
                        >
                          <i class="mr-2 mdi text-h5 mdi-file"></i>
                          <a target="_blank" :href="message.payload.url">{{
                            getFileNameFromUrl(message.payload.url)
                          }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </perfect-scrollbar>
              </div>

              <!---Send Message Footer-->
              <div class="chat-area-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-image"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <path d="M21 15l-5-5L5 21"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8M8 12h8"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-paperclip"
                >
                  <path
                    d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                  ></path>
                </svg>
                <v-textarea
                  v-model="text"
                  class="mx-1"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-smile"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-thumbs-up"
                >
                  <path
                    d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"
                  ></path>
                </svg>
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
        </v-tabs>
      </v-sheet>
      <v-window v-model="tabForm">
        <v-window-item :value="0">
          <div style="background-color: #ffffff" class="mb-7">
            <v-card-text class="pa-5 border-bottom">
              <h3 class="title text-h6">Usuario</h3>
              <h4>
                Fuente:
                {{
                  $store.state.botsModule.bots.find(
                    (el) => el.fanpageId == selectedChat.pageID
                  )
                    ? $store.state.botsModule.bots.find(
                        (el) => el.fanpageId == selectedChat.pageID
                      ).name
                    : "Sin fuente"
                }}
              </h4>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pa-5 border-bottom">
              <v-text-field
                dense
                outlined
                label="Nombres"
                placeholder="Username"
                append-icon="mdi-account"
                v-model="userForm.name"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                label="Teléfonos"
                placeholder="Username"
                append-icon="mdi-cellphone"
                v-model="userForm.phone"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                label="Correo"
                placeholder="Email"
                append-icon="mdi-email"
                v-model="userForm.email"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                label="Ciudad"
                placeholder="Email"
                append-icon="mdi-email"
                v-model="userForm.city"
              ></v-text-field>
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Notas"
                v-model="userForm.notes"
              ></v-textarea>
              <bold>Etiquetas</bold>
              <TodofullLabelsSelector
                :initialData="userForm.todofullLabels"
                class="ma-3"
                @onSelectTodofullLabels="onSelectTodofullLabels"
                :key="updateLabels"
              ></TodofullLabelsSelector>
              <div class="mt-4">
                <v-btn
                  color="success"
                  @click="saveUserForm"
                  outlined
                  class="text-capitalize mr-2"
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
import cleanLeadsService from "@/services/api/cleanLeads";
import leadsService from "@/services/api/leads";
import messagesService from "@/services/api/messages";
import {
  scrollBottom,
  getDataFromLeadDetail,
  getFileNameFromUrl,
  parseMarkdown,
  getFormat,
} from "@/utils/utils";
import socket from "@/plugins/sockets";
import { es } from "date-fns/locale";
// import InfiniteScroll from "@/components/InfiniteScroll.vue";
import BaseLeftRightPartVue from "@/components/BaseLeftRightPart.vue";
import { buildSuccess } from "@/utils/utils.ts";
import AgentsSelector from "@/components/AgentsSelector.vue";
import TodofullLabelsSelector from "@/components/TodofullLabelsSelector.vue";
import InfiniteScroll from "@/components/InfiniteScroll.vue";

export default {
  components: {
    // InfiniteScroll,
    BaseLeftRightPartVue,
    AgentsSelector,
    TodofullLabelsSelector,
    InfiniteScroll,
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
      searchContact: "",
      isDataReady: false,
      isChatMessageReady: false,
      updateLabels: 0,
      // userData
      userForm: {
        name: "",
        phone: "",
        email: "",
        city: "",
        notes: "",
        todofullLabels: [],
      },
      updateScroll: 0,
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize(page = 1) {
      this.isDataReady = false;
      // traer listado de chats
      let payload = {
        page: this.page || page,
        search: this.searchContact,
        fieldsToSearch: this.fieldsToSearch,
        sort: "updatedAt",
        order: "desc",
        limit: 50,
      };
      if (this.activePlatforms.length > 0) {
        payload.platforms = this.activePlatforms;
      }
      await Promise.all([
        this.$store.dispatch("botsModule/list"),
        this.$store.dispatch("chatsModule/list", payload),
      ]);
      // this.$store.commit("chatsModule/setChats", this.chats);
      this.chats = this.$store.state.chatsModule.chats;
      this.isDataReady = true;
    },
    async selectChat(chat) {
      this.isChatMessageReady = false;
      this.selectedChat = chat;
      this.$store.commit("chatsModule/setSelectedChat", chat);
      this.messages = (
        await messagesService.listByChat({
          chatId: chat._id,
          sort: "createdAt",
          order: "asc",
        })
      ).data.payload;
      chat = (await chatsService.listOne(chat._id)).data.payload;
      this.$store.commit("chatsModule/setMessages", this.messages);
      this.messages = this.$store.state.chatsModule.messages;
      this.chat = chat;
      scrollBottom();
      this.isChatMessageReady = true;
      if (chat.leadId) {
        this.userForm.name = chat.leadId.sourceName || chat.leadId.appName;
        this.userForm.email = chat.leadId.email;
        this.userForm.city = chat.leadId.ciudad;
        this.userForm.todofullLabels = chat.leadId.todofullLabels;
        this.userForm.notes = chat.leadId.nota;
        this.userForm.phone = "";
      }
      if (chat.cleanLeadId) {
        this.userForm.phone = chat.cleanLeadId.telefono;
        const detail = chat.cleanLeadId.details.find(
          (el) => el.fuente === chat.leadId.fuente
        );
        if (detail) {
          this.userForm.name = detail.nombre;
          this.userForm.email = detail.email;
          this.userForm.city = detail.ciudad;
          this.userForm.notes = detail.nota;
        }

        this.userForm.todofullLabels = chat.cleanLeadId.todofullLabels;
      }
      this.updateLabels += 1;
    },
    sendTextMessage(text, from = "Agente") {
      console.log("ENVIANDO MENSAJE: ", text, from);
      let payload = {
        text,
        from,
        type: "text",
        chatId: this.selectedChat._id,
        isActive: true,
        createdAt: new Date(),
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
      if (chat.leadId && (chat.leadId.sourceName || chat.leadId.appName)) {
        return chat.leadId.sourceName || chat.leadId.appName;
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
      this.initialize();
    },
    onSelectedAgent(agent: String): void {
      if (this.selectedChat.cleanLeadId) {
        // es lead (dejó datos)
        this.selectedChat.cleanLeadId.telefonoId = agent;
        cleanLeadsService.update(this.selectedChat.cleanLeadId._id, {
          telefonoId: agent._id,
          estado: "RE-CONECTAR",
        });
        buildSuccess("Nuevo agente asignado a lead");
      } else {
        this.selectedChat.leadId.telefonoId = agent;
        leadsService.update(this.selectedChat.leadId._id, {
          telefonoId: agent._id,
          assignAgentChat: true, // this parameter is used to send telegram message for assign chat
        });
        buildSuccess("Nuevo agente asignado a lead");
      }
    },
    onSelectTodofullLabels(selectedLabels) {
      if (selectedLabels.length > 0) {
        this.userForm.todofullLabels = selectedLabels;
      }
    },
    async saveUserForm() {
      if (this.userForm.phone) {
        console.log("EL PAIS: ", this.selectedChat.leadId.pais);
        console.log("las etiquetas: ", this.userForm.todofullLabels);
        let createdItem = await this.$store.dispatch(
          "cleanLeadsModule/create",
          {
            telefono: this.userForm.phone,
            estado:
              (this.selectedChat.cleanLeadId
                ? this.selectedChat.cleanLeadId.telefonoId
                : null) || this.selectedChat.leadId.telefonoId
                ? "RE-CONECTAR"
                : "SIN ASIGNAR",
            telefonoId: this.selectedChat.leadId.telefonoId
              ? this.selectedChat.leadId.telefonoId._id
              : null,

            todofullLabels: this.userForm.todofullLabels,
            details: [
              {
                type: "CHATBOT",
                contactId: this.selectedChat.leadId.contactId,
                fuente: this.selectedChat.leadId.fuente,
                appName:
                  this.selectedChat.leadId.sourceName ||
                  this.selectedChat.leadId.appName,
                nombre: this.userForm.name,
                email: this.userForm.email,
                ciudad: this.userForm.city,
                nota: this.userForm.notes,
                pais: this.selectedChat.leadId.pais,
              },
            ],
          }
        );
        // actualizando referencia a lead y chat
        await Promise.all([
          this.$store.dispatch("leadsModule/update", {
            id: this.selectedChat.leadId._id,
            data: { cleanLeadId: createdItem._id },
            notifyUser: false,
          }),
          this.$store.dispatch("chatsModule/update", {
            id: this.selectedChat._id,
            data: { cleanLeadId: createdItem._id },
            notifyUser: false,
          }),
        ]);
      } else {
        await this.$store.dispatch("leadsModule/update", {
          id: this.selectedChat.leadId._id,
          data: {
            appName: this.userForm.name,
            email: this.userForm.email,
            ciudad: this.userForm.city,
            nota: this.userForm.notes,
            todofullLabels: this.userForm.todofullLabels,
          },
        });
      }
    },
    getFileNameFromUrl(url: String): String {
      return getFileNameFromUrl(url);
    },
    parseMarkdown(text: String): String {
      return parseMarkdown(text);
    },
    formatDate(date: String, format = "dd/MM/yyyy HH:mm"): String {
      return getFormat(date, format);
    },
    formatDateAgo(value: String): String {
      let date = new Date(value);
      return formatDistance(new Date(), date, { addSuffix: true, locale: es });
    },
    async loadMore() {
      console.log("CARGANDO MAS...");
      if (this.searchContact.trim().length === 0) {
        this.page += 1;
        const response = await chatsService.list({
          page: this.page,
          limit: 10,
          sort: "updatedAt",
          order: "desc",
        });
        this.chats.push(...response.data.payload);
      }
    },
  },
  computed: {
    filteredChats() {
      return this.chats;
    },
    formattedMessages() {
      return this.messages.reduce((acc, el) => {
        // group messages
        let group =
          acc.length > 0 && acc[acc.length - 1].from === el.from
            ? acc[acc.length - 1]
            : null;
        if (group) {
          group.messages.push(el);
        } else {
          acc.push({ from: el.from, messages: [el], date: el.createdAt });
        }
        return acc;
      }, []);
    },
  },
  watch: {
    messages() {
      scrollBottom();
    },
    async searchContact() {
      this.page = 1;
      clearTimeout(this.delayTimer);
      this.delayTimer = setTimeout(() => {
        this.initialize();
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
