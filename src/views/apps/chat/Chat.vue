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
                v-model="searchContact"
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
                  <v-progress-circular
                    v-if="!isDataReady"
                    class="v-progress-linear"
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                  <v-list-item
                    v-else
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
import { scrollBottom, getDataFromLeadDetail } from "@/utils/utils";
import socket from "@/plugins/sockets";
import { es } from "date-fns/locale";
// import InfiniteScroll from "@/components/InfiniteScroll.vue";
import BaseLeftRightPartVue from "@/components/BaseLeftRightPart.vue";
import { buildSuccess } from "@/utils/utils.ts";
import AgentsSelector from "@/components/AgentsSelector.vue";
import TodofullLabelsSelector from "@/components/TodofullLabelsSelector.vue";

export default {
  components: {
    // InfiniteScroll,
    BaseLeftRightPartVue,
    AgentsSelector,
    TodofullLabelsSelector,
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
        page,
        search: this.searchContact,
        fieldsToSearch: this.fieldsToSearch,
        sort: "updatedAt",
        order: "desc",
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
      this.$store.commit("chatsModule/setMessages", this.messages);
      this.messages = this.$store.state.chatsModule.messages;
      this.chat = chat;
      scrollBottom();
      this.isChatMessageReady = true;
      if (chat.leadId) {
        this.userForm.name = chat.leadId.sourceName;
        this.userForm.email = chat.leadId.email;
        this.userForm.city = chat.leadId.city;
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
      this.initialize();
    },
    onSelectedAgent(agent: String): void {
      console.log("🚀 Aqui *** -> agent", agent);
      if (this.selectedChat.cleanLeadId) {
        // es lead (dejó datos)
        this.selectedChat.cleanLeadId.telefonoId = agent;
        cleanLeadsService.update(this.selectedChat.cleanLeadId._id, {
          telefonoId: agent._id,
        });
      } else {
        this.selectedChat.leadId.telefonoId = agent;
        leadsService.update(this.selectedChat.leadId._id, {
          telefonoId: agent._id,
        });
      }
    },
    onSelectTodofullLabels(selectedLabels) {
      this.userForm.todofullLabels = selectedLabels;
    },
    async saveUserForm() {
      if (this.userForm.phone) {
        let createdItem = await this.$store.dispatch(
          "cleanLeadsModule/create",
          {
            telefono: this.userForm.phone,
            estado: this.selectedChat.leadId.telefonoId
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
                appName: this.selectedChat.leadId.sourceName,
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
            name: this.userForm.name,
            email: this.userForm.email,
            city: this.userForm.city,
            nota: this.userForm.notes,
            todofullLabels: this.userForm.todofullLabels,
          },
        });
      }
    },
  },
  computed: {
    filteredChats() {
      return this.chats;
    },
  },
  watch: {
    messages() {
      scrollBottom();
    },
    async searchContact() {
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
