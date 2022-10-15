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
            <div class="pa-3 border-bottom">
              <v-text-field
                label="Buscar contacto"
                variant="outlined"
                density="compact"
                hide-details
                v-model="searchContact"
              ></v-text-field>
            </div>
            <div class="pa-3 border-bottom">
              <v-select
                v-model="selectedCountry"
                :items="['Peru', 'Chile', 'Colombia']"
                hide-details
                density="compact"
                single-line
                label="Selecciona un país"
                variant="outlined"
                clearable
              ></v-select>
            </div>
            <div class="px-5">
              <v-chip-group v-model="filterChats" active-class="primary--text"
                ><v-chip
                  v-for="filter in filters"
                  :key="filter"
                  color="success"
                  :multiple="false"
                >
                  <strong>{{ filter }}</strong>
                </v-chip></v-chip-group
              >
            </div>
            <div class="px-5">
              <h6>Total: {{ $store.state.chatsModule.total }}</h6>
              <h6>Mostrando: {{ $store.state.chatsModule.chats.length }}</h6>
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
                        <span
                          :class="{
                            'msg-message': true,
                            'bold-text': chat.pending_messages_count > 0,
                          }"
                          >{{
                            chat.lastMessage ? chat.lastMessage.text : ""
                          }}</span
                        >
                        <span class="msg-date">{{
                          formatDate(chat.updatedAt, "HH:mm")
                        }}</span>
                        <div
                          v-if="chat.pending_messages_count > 0"
                          :class="{
                            'not-viewed': true,
                          }"
                        >
                          {{ chat.pending_messages_count }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <template v-slot:loading></template>
                </InfiniteScroll>
              </div>
            </v-list>
          </template>
          <!---/Right chat list -->
          <template v-slot:rightpart>
            <template v-if="Object.keys(selectedChat).length > 0">
              <!---chat header-->
              <div class="d-flex pa-1 align-center">
                <v-avatar size="35" class="mr-3"
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
                <v-btn
                  @click="undoPendingMessagesCount"
                  fab
                  large
                  color="bot"
                  class="undo-pending-message mr-2"
                >
                  <v-icon class="wechat-color">mdi-wechat</v-icon>
                  <v-tooltip activator="parent" anchor="bottom"
                    >Marcar como no leído</v-tooltip
                  >
                </v-btn>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      size="small"
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
                      'ma-0': true,
                      'pa-0': true,
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
                        class="mb-1 hover-text"
                        v-for="message in formattedMessage.messages"
                        :key="message._id"
                        @mouseover="selectedMessage = message"
                      >
                        <v-card
                          class="tooltip-text"
                          :style="`${
                            showMessageOptions &&
                            this.selectedMessage &&
                            this.selectedMessage._id == message._id
                              ? 'visibility:visible'
                              : ''
                          }`"
                          id="top"
                        >
                          <v-btn-toggle divided>
                            <v-btn
                              v-show="getFieldTextSelection == 'text'"
                              @click="
                                userForm.name = selectedText;
                                saveUserForm();
                                showMessageOptions = false;
                              "
                              icon="mdi-account"
                            ></v-btn>
                            <v-btn
                              v-show="getFieldTextSelection == 'phone'"
                              @click="
                                userForm.phone = selectedText;
                                saveUserForm();
                                showMessageOptions = false;
                              "
                              icon="mdi-cellphone"
                            ></v-btn>
                            <v-btn
                              v-show="getFieldTextSelection == 'email'"
                              @click="
                                userForm.email = selectedText;
                                saveUserForm();
                                showMessageOptions = false;
                              "
                              icon="mdi-email"
                            ></v-btn>
                            <v-btn
                              v-show="getFieldTextSelection == 'text'"
                              @click="
                                userForm.city = selectedText;
                                saveUserForm();
                                showMessageOptions = false;
                              "
                              icon="mdi-city"
                            ></v-btn>
                          </v-btn-toggle>
                        </v-card>
                        <div
                          v-if="message.type === 'text' || !message.type"
                          class="chat-msg-text"
                          v-html="parseMarkdown(message.text)"
                          ref="target"
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
                  @click="uploadDialog = true"
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
                  class="feather feather-paperclip"
                  @click="pickFile"
                >
                  <path
                    d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                  ></path>
                </svg>
                <input
                  type="file"
                  id="file"
                  ref="file"
                  accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
text/plain, application/pdf"
                  capture
                  @change="handleFileUpload"
                  style="display: none"
                />
                <v-textarea
                  v-model="text"
                  class="mx-1"
                  name="input-4-1"
                  rows="2"
                  variant="outlined"
                  hide-details
                  no-resize
                  @keyup.enter="sendMessage(text)"
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
          <template v-slot:detailpart></template>
        </BaseLeftRightPartVue>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3" v-if="selectedChat">
      <v-card style="background-color: #ffffff" class="mb-7 detail-part">
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
            density="compact"
            hide-details
            variant="outlined"
            label="Nombres"
            placeholder="Nombres"
            append-icon="mdi-account"
            v-model="userForm.name"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            density="compact"
            hide-details
            variant="outlined"
            label="Teléfonos"
            placeholder="Teléfonos"
            append-icon="mdi-cellphone"
            v-model="userForm.phone"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            density="compact"
            hide-details
            variant="outlined"
            label="Correo"
            placeholder="Correo"
            append-icon="mdi-email"
            v-model="userForm.email"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            density="compact"
            hide-details
            variant="outlined"
            label="Ciudad"
            placeholder="Ciudad"
            append-icon="mdi-city"
            v-model="userForm.city"
            class="mb-2"
          ></v-text-field>
          <span>Etiquetas</span>
          <TodofullLabelsSelector
            :initialData="userForm.todofullLabels"
            class="my-3"
            @onSelectTodofullLabels="onSelectTodofullLabels"
            :key="updateLabels"
          ></TodofullLabelsSelector>
          <v-textarea
            density="compact"
            hide-details
            variant="outlined"
            clearable
            clear-icon="mdi-close-circle"
            label="Notas"
            v-model="userForm.notes"
            class="mb-2"
          ></v-textarea>

          <div class="mt-4">
            <v-btn
              color="success"
              @click="saveUserForm"
              variant="outlined"
              class="text-capitalize mr-2"
              >Guardar</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-dialog v-model="uploadDialog">
      <v-card>
        <v-container class="pa-5">
          <UploadImages
            :key="resetImage"
            value="/uploads/grodnobot.png"
            ref="image"
            @change="handleImages"
            :max="1"
            uploadMsg="Click para insertar o arrastrar una imagen"
            fileError="Solo se aceptan archivos imágenes"
            clearAll="Borrar todo"
            class="mb-2"
          />
        </v-container>
        <!-- <v-card-actions rd-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            :loading="uploadingImage"
            color="success"
            variant="outlined"
            class="text-capitalize mr-2"
            @click.self="sendImageMessage"
            >Cargar</v-btn
          >
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="js">
import UploadImages from "vue-upload-drop-images";
import { formatDistance } from "date-fns";
import chatsService from "@/services/api/chats";
import filesService from "@/services/api/files";
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
import InfiniteScroll from "@/components/InfiniteScroll.vue";
import BaseLeftRightPartVue from "@/components/BaseLeftRightPart.vue";
import { buildSuccess } from "@/utils/utils.ts";
import AgentsSelector from "@/components/AgentsSelector.vue";
import TodofullLabelsSelector from "@/components/TodofullLabelsSelector.vue";

export default {
  components: {
    BaseLeftRightPartVue,
    AgentsSelector,
    TodofullLabelsSelector,
    InfiniteScroll,
    UploadImages,
  },
  data() {
    return {
      uploadingImage: false,
      uploadDialog: false,
      activePlatforms: [],
      chat: null,
      chats: [],
      messages: [],
      selectedChat: {},
      selectedPendingMessagesCount: 0,
      text: "",
      isAgentConnected: false,
      dialog: null,
      isErrorStory: false,
      selectedMessage: null,
      search: "",
      fieldsToSearch: ["foreign_telefono", "foreign_name"],
      page: 1,
      pageCount: 0,
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
      selectedText: "",
      showMessageOptions: false,
      filterChats: 0,
      filters: ["Todos", "Pendientes", "Resueltos"],
      selectedCountry: null,
      isLoadingMore: false,
      resetImage: 0,
      image: null,
      file: null,
      imageUploaded: false,
      fileName: "",
      fileUrl: "",
    };
  },
  mounted() {
    this.initialize();
    document.addEventListener("mouseup", (event) => {
      if (
        (event.target.tagName.toLowerCase() === "p" ||
          event.target.tagName.toLowerCase() === "a" ||
          event.target.tagName.toLowerCase() === "div") &&
        (event.target.parentElement.classList.contains("chat-msg-text") ||
          event.target.parentElement.classList.contains("hover-text") ||
          event.target.parentElement.classList.length === 0)
      ) {
        this.onSelectedText();
      }
    });
  },
  methods: {
    pickFile() {
      this.$refs.file.click();
    },
    async initialize(page = 1) {
      this.isDataReady = false;
      // traer listado de chats
      let payload = {
        page: this.page || page,
        search: this.searchContact,
        fieldsToSearch: this.fieldsToSearch,
        sort: "updatedAt",
        order: "desc",
        limit: 100,
      };
      if (this.activePlatforms.length > 0) {
        payload.platforms = this.activePlatforms;
      }
      if (this.selectedCountry) {
        payload.selectedCountry = this.selectedCountry;
      }
      if (this.filterChats) {
        payload.filterChats = this.filters[this.filterChats];
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
      this.clearForm();
      // salvar cantidad de mensajes pendientes, por si se quiere marcar no leido
      this.selectedPendingMessagesCount = chat.pending_messages_count;
      // socket para resetear contador de mensajes no leidos a todos los conectados
      socket.emit("RESTART_PENDING_MESSAGES", {
        chatId: chat._id,
      });
      this.isChatMessageReady = false;
      this.selectedChat = chat;
      this.$store.commit("chatsModule/setSelectedChat", chat);
      this.messages = (
        await messagesService.listByChat({
          chatId: chat._id,
          sort: "createdAt",
          order: "asc",
          restart_pending_messages: true, // esto es para que se reinicien los mensajes pendientes
        })
      ).data.payload;
      chat = (await chatsService.listOne(chat._id)).data.payload;
      this.$store.commit("chatsModule/setMessages", this.messages);
      this.messages = this.$store.state.chatsModule.messages;
      this.chat = chat;
      this.selectedChat = chat;
      this.selectedChat.pending_messages_count = 0; // reiniciar contador mensajes sin leer
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
    sendMessage(text, from = "Agente", type = "text", { url } = {}) {
      this.text = "";
      socket.emit("AGENT_MESSAGE", {
        senderId: this.selectedChat.leadId.contactId,
        chatId: this.selectedChat._id,
        text: text,
        pageID: this.selectedChat.pageID,
        platform: this.selectedChat.platform,
        payload: {
          url,
        },
        type,
      });
      scrollBottom();
    },
    clearForm() {
      this.userForm.name = "";
      this.userForm.email = "";
      this.userForm.city = "";
      this.userForm.todofullLabels = [];
      this.userForm.notes = "";
      this.userForm.phone = "";
    },
    connectAgent(chat) {
      if (chat.isBotActive) {
        chat.isBotActive = false;
        this.selectedChat.isBotActive = false;
        buildSuccess("Chatbot desactivado correctamente");
        const user = JSON.parse(localStorage.getItem("user"));
        let message =
          "🤝👩🏻‍💼 Ahora estás conversando con el agente " +
          user.first_name +
          " " +
          user.last_name;
        console.log("CONECTANDO AGENTE");
        this.sendMessage(message, "Chatbot");
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
        socket.emit("UPDATE_CHAT", { ...this.selectedChat });
      }
    },
    endConversation(chat) {
      chat.isBotActive = true;
      buildSuccess("Chatbot reactivado");
      const user = JSON.parse(localStorage.getItem("user"));
      let message = `El agente ${user.first_name} ${user.last_name} se ha desconectado`;
      this.sendMessage(message, "Chatbot");
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
      socket.emit("UPDATE_CHAT", { ...this.selectedChat });
    },
    errorStory() {
      this.isErrorStory = true;
    },
    loadStory() {
      this.isErrorStory = false;
    },
    getChatUserData(chat) {
      let userData = getDataFromLeadDetail(chat.cleanLeadId.details);
      return userData;
    },
    getChatUserName(chat) {
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
    getUserDataByPlatform(chat) {
      let details = chat.cleanLeadId.details;
    },
    getPlatformIconStyle(platform) {
      const platforms = {
        whatsapp: "mdi-whatsapp whatsapp-color",
        facebook: "mdi-facebook-messenger messenger-color",
        instagram: "mdi-instagram instagram-color",
      };
      return platforms[platform];
    },
    getProfilePic(chat) {
      if (chat.leadId) {
        return chat.leadId.profile_pic;
      }
    },
    addPlatform(platform) {
      this.page = 1;
      if (this.activePlatforms.includes(platform)) {
        this.activePlatforms = this.activePlatforms.filter(
          (p) => p !== platform
        );
      } else {
        this.activePlatforms.push(platform);
      }
      this.initialize();
    },
    onSelectedAgent(agent) {
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
              this.selectedChat.cleanLeadId &&
              this.selectedChat.cleanLeadId.estado
                ? this.selectedChat.cleanLeadId.estado
                : (this.selectedChat.cleanLeadId &&
                    this.selectedChat.cleanLeadId.telefonoId) ||
                  this.selectedChat.leadId.telefonoId
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
    getFileNameFromUrl(url) {
      return getFileNameFromUrl(url);
    },
    parseMarkdown(text) {
      return parseMarkdown(text);
    },
    formatDate(date, format = "dd/MM/yyyy HH:mm") {
      return getFormat(date, format);
    },
    formatDateAgo(value) {
      let date = new Date(value);
      return formatDistance(new Date(), date, { addSuffix: true, locale: es });
    },
    async loadMore() {
      this.isLoadingMore = true;
      if (this.searchContact.trim().length === 0) {
        this.page += 1;
        let payload = {
          page: this.page,
          limit: 100,
          sort: "updatedAt",
          order: "desc",
        };
        if (this.activePlatforms.length > 0) {
          payload.platforms = this.activePlatforms;
        }
        if (this.selectedCountry) {
          payload.selectedCountry = this.selectedCountry;
        }
        if (this.filterChats) {
          payload.filterChats = this.filters[this.filterChats];
        }
        const response = await chatsService.list(payload);
        for (const chat of response.data.payload) {
          this.$store.commit("chatsModule/addChatToEnd", chat);
        }
        this.isLoadingMore = false;
      }
    },
    undoPendingMessagesCount() {
      let count =
        this.selectedPendingMessagesCount === 0
          ? 1
          : this.selectedPendingMessagesCount;
      socket.emit("UNDO_PENDING_MESSAGES_COUNT", {
        count,
        chatId: this.selectedChat._id,
      });
      // actualizar bd
      chatsService.undoPendingMessagesCount(this.selectedChat._id, count);
      buildSuccess("Conversación marcada como no leída");
    },
    onSelectedText() {
      this.showMessageOptions = true;
      this.selectedText = window.getSelection().toString();
    },

    mouseOver() {
      console.log("mouse encima");
    },
    getSelectedText() {
      return window.getSelection().toString();
    },
    onSelectedCountry(event) {
      console.log("seleccionado: ", event);
    },
    handleImages() {
      // this.editedItem.img = files;
      [this.image] = this.$refs.image.files;
      this.sendImageMessage();
    },
    clear() {
      this.image = null;
      this.resetImage += 1;
      this.imageUploaded = false;
    },
    handleFileUpload() {
      const files = this.$refs.file.files;
      this.file = this.$refs.file.files[0];
      if (files[0] !== undefined) {
        this.fileName = files[0].name;
        if (this.fileName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.fileUrl = fr.result;
        });
      } else {
        this.fileName = "";
        this.fileUrl = "";
      }
      console.log("🚀 Aqui *** -> this.fileName", this.fileName);
      console.log("🚀 Aqui *** -> this.fileUrl", this.fileUrl);
      this.sendFileMessage();
    },
    async sendImageMessage() {
      if (this.image) {
        console.log("cargando archivo: ", this.image);
        this.uploadingImage = true;
        let formData = new FormData();
        formData.append("file", this.image);
        let response = await filesService.create(formData);
        const url = response.data.payload.url;
        console.log("🚀 Aqui *** -> path", url);
        this.sendMessage("", "Agente", "image", { url });
        this.uploadDialog = false;
        this.uploadingImage = false;
        this.clear();
        return url;
      }
    },
    async sendFileMessage() {
      if (this.file) {
        console.log("cargando archivo: ", this.file);
        this.uploadingImage = true;
        let formData = new FormData();
        formData.append("file", this.file);
        let response = await filesService.create(formData);
        const url = response.data.payload.url;
        console.log("🚀 Aqui *** -> path", url);
        this.sendMessage("", "Agente", "file", { url });
        this.uploadDialog = false;
        this.uploadingImage = false;
        this.clear();
        return url;
      }
    },
  },
  computed: {
    filteredChats() {
      return this.filterChats == 0
        ? this.$store.getters["chatsModule/getSortedChats"]
        : this.filterChats == 1
        ? this.$store.getters["chatsModule/getSortedChats"].filter(
            (el) => el.pending_messages_count > 0
          )
        : this.$store.getters["chatsModule/getSortedChats"].filter(
            (el) => el.pending_messages_count == 0
          );
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
    getFieldTextSelection() {
      return this.selectedText.includes("@")
        ? "email"
        : !isNaN(this.selectedText)
        ? "phone"
        : "text";
    },
  },
  watch: {
    messages() {
      scrollBottom();
    },
    selectedCountry() {
      this.page = 1;
      this.initialize();
    },
    async searchContact() {
      this.page = 1;
      clearTimeout(this.delayTimer);
      this.delayTimer = setTimeout(() => {
        this.initialize();
      }, 600);
    },
    filterChats() {
      this.page = 1;
      this.initialize();
    },
  },
};
</script>
<style lang="scss">
.fromMe {
  flex-direction: row-reverse;
}
.chat-room-box-height {
  height: calc(100vh - 340px);
}
.chat-room {
  overflow: visible;
}
.detail-part {
  height: calc(100vh - 90px);
  overflow: scroll;
}

.tooltip-text {
  visibility: hidden;
  position: absolute;
  z-index: 9999999999 !important;
  width: 100px !important;
}

// .hover-text:hover .tooltip-text {
//   visibility: visible;
// }

#top {
  top: -40px;
  left: -5%;
}

#bottom {
  top: 25px;
  left: -50%;
}

#left {
  top: -8px;
  right: 120%;
}

#right {
  top: -8px;
  left: 120%;
}

.hover-text {
  position: relative;
}
</style>
