<template>
  <v-row>
    <v-col cols="12" sm="9">
      <v-card>
        <!---/Main Box chat list -->
        <BaseLeftRightPartVue>
          <!---/Left chat list -->
          <template v-slot:channels>
            <div class="d-flex justify-space-evenly">
              <v-btn
                v-for="platform of platformsSource"
                small
                icon
                color="white"
                @click="addPlatform(platform.value)"
                :class="{
                  selected: activePlatforms.includes(platform.value),
                }"
                :key="platform.value"
              >
                <v-icon :class="platform.iconClass">{{ platform.icon }}</v-icon>
                <v-tooltip activator="parent" anchor="bottom">{{
                  platform.text
                }}</v-tooltip>
              </v-btn>
              <v-divider class="mt-1" vertical />
              <v-btn
                v-for="country of countriesSource"
                small
                icon
                color="white"
                @click="toggleCountry(country)"
                :class="{ selected: selectedCountry === country.value }"
              >
                <img style="width: 25px" :src="country.icon" />
                <v-tooltip activator="parent" anchor="bottom">
                  {{ country.value }}
                </v-tooltip>
              </v-btn>
            </div>
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
            <div class="pa-3 pt-1" v-if="sellTeams.length">
              <v-select
                v-model="selectedSellTeam"
                :items="sellTeams"
                item-title="nombre"
                item-value="_id"
                variant="outlined"
                density="compact"
                hide-details
                clearable
                placeholder="Filtrar por equipo"
              />
            </div>
            <div class="pa-3 pt-1">
              <v-select
                v-model="selectedFilterNegotiationStatus"
                :items="
                  this.$store.state.negotiationStatusesModule
                    .negotiationStatuses
                "
                item-title="name"
                item-value="_id"
                variant="outlined"
                density="compact"
                hide-details
                clearable
                placeholder="Filtrar por estado de negociación"
              />
            </div>
            <div class="px-5">
              <v-row>
                <v-col cols="12" sm="9">
                  <v-chip-group
                    v-model="filterChats"
                    active-class="primary--text"
                  >
                    <v-chip
                      v-for="filter in filtersSource"
                      color="success"
                      :multiple="false"
                      size="small"
                      :key="filter"
                    >
                      <strong>{{ filter.text }}</strong>
                    </v-chip>
                  </v-chip-group>
                </v-col>
                <v-col cols="12" sm="3">
                  <h6>
                    {{ $store.state.chatsModule.total }} -
                    {{ $store.state.chatsModule.chats.length }}
                  </h6>
                </v-col>
              </v-row>
            </div>
            <div class="px-5"></div>

            <v-list>
              <!---/chat list -->
              <v-progress-circular
                v-if="!isDataReady"
                class="v-progress-linear"
                indeterminate
                color="primary"
              />

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
                    @click="selectChat(chat)"
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
                  <h4 style="display: inline">
                    <i
                      :class="`mr-2 mdi text-h7 ${getPlatformIconStyle(
                        selectedChat.platform
                      )}`"
                    ></i>
                    {{ getChatUserName(selectedChat) }}
                  </h4>
                  <Countdown
                    v-if="selectedChat.platform === 'whatsapp'"
                    :millis="remainingMillis"
                    :key="updateCountdown"
                  ></Countdown>

                  <span
                    class="h6"
                    v-if="
                      selectedChat.leadId && selectedChat.leadId.follower_count
                    "
                    ><b>({{ selectedChat.leadId.follower_count }}</b>
                    Seguidores)</span
                  >
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
                      :disabled="remainingMillis <= 0"
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
              <div class="chat-room pa-4" @click="selectChatRoom">
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
                        class="mb-1 hover-text chat-message tooltip-controls"
                        v-for="message in formattedMessage.messages"
                        :key="message._id"
                        @mouseover="selectedMessage = message"
                      >
                        <!-- <span class="tooltiptext">Tooltip text</span> -->
                        <div class="tooltiptext">
                          <v-menu>
                            <template v-slot:activator="{ props }">
                              <v-btn
                                color="primary"
                                v-bind="props"
                                icon="mdi-chevron-down mdi"
                                small
                              >
                              </v-btn>
                            </template>
                            <v-list>
                              <v-list-item>
                                <v-list-item-title
                                  @click="replyToMessage(selectedMessage)"
                                  >Responder</v-list-item-title
                                >
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>

                        <v-card
                          class="tooltip-text"
                          :style="'visibility:visible'"
                          v-show="
                            selectedText &&
                            showMessageOptions &&
                            this.selectedMessage &&
                            this.selectedMessage._id == message._id &&
                            this.selectedMessageText._id ==
                              this.selectedMessage._id
                          "
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
                        <SelectorMessage
                          :message="message"
                          :messages="messages"
                          @goToMessage="goToMessage"
                        ></SelectorMessage>

                        <div
                          v-if="message.type === 'template'"
                          class="chat-msg-text pa-3"
                        >
                          <v-row justify="center ma-2">
                            <div
                              v-if="message.payload.hasOwnProperty('product')"
                            >
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
                            <div v-else>
                              <v-img
                                class="rounded-corners ma-0 pa-0"
                                :src="
                                  message.payload.attachment.payload.elements[0]
                                    .image_url
                                "
                                aspect-ratio="1"
                                contain
                                @click="openUrl(message.payload.post_url)"
                              ></v-img>
                              <v-card
                                color="#F0F2F5"
                                outlined
                                class="pa-3 mb-1"
                                width="200"
                              >
                                <strong>{{
                                  message.payload.attachment.payload.elements[0]
                                    .title
                                }}</strong>
                                <p class="mb-2">
                                  {{
                                    message.payload.attachment.payload
                                      .elements[0].subtitle
                                  }}
                                </p>
                                <v-btn
                                  v-for="(button, btnIndex) in message.payload
                                    .attachment.payload.elements[0].buttons"
                                  :key="btnIndex"
                                  small
                                  class="wrapText mb-2"
                                  block
                                  outlined
                                  color="primary"
                                  ><a
                                    v-if="button.type == 'web_url'"
                                    :href="button.url"
                                    target="_blank"
                                    >{{ button.title }}</a
                                  ><span v-else
                                    >{{ button.title }}
                                    <v-tooltip
                                      activator="parent"
                                      anchor="bottom"
                                    >
                                      {{ button.payload }}
                                    </v-tooltip></span
                                  >
                                </v-btn>
                              </v-card>
                              <div v-if="message.payload.quick_replies">
                                <v-chip
                                  v-for="(reply, replyIdx) in message.payload
                                    .quick_replies"
                                  :multiple="false"
                                  size="small"
                                  :key="replyIdx"
                                >
                                  <strong>{{ reply.title }}</strong>
                                </v-chip>
                              </div>
                            </div>
                          </v-row>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="uploadingImage" class="chat-msg-text">
                    <v-progress-circular
                      class="v-progress-linear"
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </div>
                  <v-alert
                    id="reply-alert"
                    v-if="!!messageToReply"
                    v-model="messageToReply"
                    class="mb-1"
                    border="start"
                    border-color="deep-purple accent-4"
                    closable
                  >
                    <h6
                      v-if="messageToReply.from == 'Cliente'"
                      style="color: #06cf9c"
                    >
                      Cliente
                    </h6>
                    <h6 v-else style="color: #53bdeb">Tú</h6>
                    <SelectorMessage
                      :is_reply="true"
                      :message="messageToReply"
                      :messages="messages"
                    ></SelectorMessage>
                  </v-alert>
                </perfect-scrollbar>
              </div>

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
                  @keyup.enter.exact.prevent="
                    sendMessage(text, 'Agente', 'text')
                  "
                  @keydown.enter.shift.exact.prevent="text += '\n'"
                  :label="
                    selectedChat.isBotActive
                      ? 'Desactiva el chatbot para intervenir chat'
                      : remainingMillis <= 0
                      ? 'No se pueden enviar mensaje pasadas las 24h en WhatsApp'
                      : 'Escribe y presiona Enter'
                  "
                  :disabled="selectedChat.isBotActive || remainingMillis <= 0"
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
      <v-card style="background-color: #ffffff" class="detail-part">
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
          <span>Estados de Negociación</span>
          <NegotiationStatusesSelector
            :initialData="selectedNegotiationStatus"
            class="my-3"
            @onSelectNegotiationStatuses="onSelectNegotiationStatuses"
            :key="updateNegotiationStatus"
          >
          </NegotiationStatusesSelector>
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
    <v-dialog v-model="uploadDialog" style="max-width: 800px">
      <v-card>
        <v-container class="pa-5">
          <UploadImages
            :key="resetImage"
            value="/uploads/grodnobot.png"
            ref="image"
            @change="handleImages"
            @drop="handleImages"
            :max="1"
            uploadMsg="Click para insertar o arrastrar una imagen"
            fileError="Solo se aceptan archivos imágenes"
            clearAll="Borrar todo"
            class="mb-2"
          />
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="alertDialog">
      <v-card>
        <v-container class="pa-5">
          <h5>No colocaste etiquetas</h5>
          <div>
            <v-btn color="success">Continuar</v-btn>
            <v-btn color="error">Cancelar</v-btn>
          </div>
        </v-container>
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
import sellTeamsService from "@/services/api/sellTeams";
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
import { buildSuccess, buildAlert } from "@/utils/utils.ts";
import AgentsSelector from "@/components/AgentsSelector.vue";
import TodofullLabelsSelector from "@/components/TodofullLabelsSelector.vue";
import Countdown from "@/components/Countdown.vue";
import NegotiationStatusesSelector from "@/components/NegotiationStatusesSelector.vue";
import { useChatSidebarStore } from '@/stores/chatSidebar'
import PeruFlagR from '@/assets/images/flags/peru.png'
import ChileFlagR from '@/assets/images/flags/chile.png'
import ColombiaFlagR from '@/assets/images/flags/colombia.png'

import SelectorMessage from "@/components/chat/SelectorMessage.vue";

export default {
  components: {
    BaseLeftRightPartVue,
    AgentsSelector,
    TodofullLabelsSelector,
    InfiniteScroll,
    UploadImages,NegotiationStatusesSelector,
    Countdown,SelectorMessage
  },
  data() {
    return {
      messageToReply:null,
      updateCountdown:0,
      remainingMillis:24*60*60*1000,
      selectedFilterNegotiationStatus:null,
      alertDialog:false,
      uploadingImage: false,
      uploadDialog: false,
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
      selectedMessageText: null,
      search: "",
      fieldsToSearch: ["foreign_telefono", "foreign_name"],
      page: 1,
      pageCount: 0,
      tabCategory: 2,
      tabForm: 0,
      searchContact: "",
      isDataReady: false,
      isChatMessageReady: false,
      activePlatforms: [],
      platforms: [
        { text: 'Whatsapp', value: 'whatsapp', icon: 'mdi-whatsapp', iconClass: 'whatsapp-color' },
        { text: 'Instagram', value: 'instagram', icon: 'mdi-instagram', iconClass: 'instagram-color' },
        { text: 'Facebook', value: 'facebook', icon: 'mdi-facebook-messenger', iconClass: 'messenger-color' },
      ],
      selectedCountry: null,
      countries: [
        { value: 'Peru', icon: PeruFlagR },
        { value: 'Chile', icon: ChileFlagR },
        { value: 'Colombia', icon: ColombiaFlagR },
      ],
      updateLabels: 0,
      updateNegotiationStatus: 0,
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
      filterChats: undefined,
      filters: [
        { text: 'Pendientes', value: 'pending' },
        { text: 'Sin Bot', value: 'no-bot' },
        { text: 'Recientes', value: 'recents' },
      ],
      sellTeams: [],
      selectedSellTeam: null,
      teamPermissions: [],
      isLoadingMore: false,
      resetImage: 0,
      image: null,
      file: null,
      imageUploaded: false,
      fileName: "",
      fileUrl: "",
      chatSidebar: null,
      selectedAgent: null,
      userPermissions: null,
      selectedNegotiationStatus: null,
    };
  },
  created() {
    this.chatSidebar = useChatSidebarStore()
    this.initialize();
    chatsService.listPermissions().then(res => {
      this.userPermissions = res.data.payload
      this.selectedCountry = this.userPermissions.countries[0]
    });
    sellTeamsService.list({ byAgent: true }).then(res => this.sellTeams = res.data.payload)
  },
  mounted() {
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
      if (this.selectedCountry) {
        payload.selectedCountry = this.selectedCountry;
      }
      if (this.filterChats !== undefined) {
        payload.filterChats = this.filtersSource[this.filterChats].value;
      }
      if (this.selectedSellTeam) {
        payload.teamId = this.selectedSellTeam;
      }
      if (this.selectedFilterNegotiationStatus) {
        payload.negotiationStatusId = this.selectedFilterNegotiationStatus;
      }
      await Promise.all([
        this.$store.dispatch("botsModule/list"),
        this.$store.dispatch("chatsModule/list", payload),
      ]);
      this.chats = this.$store.state.chatsModule.chats;
      this.isDataReady = true;
    },
    async selectChat(chat) {
      if (Object.keys(this.selectedChat).length > 0 && this.userForm.todofullLabels.length === 0) {
        // si existia chat antes y no habia etiquetas,mandar alerta
        let resp = await this
          .$swal({
            title: "No se agregaron etiquetas",
            text: "No agregaste etiquetas a este chat ¿Seguro que quieres cambiar de chat?",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
          })
        if (!resp.isConfirmed) {
          return;
        }
      }
      this.remainingMillis = 24 * 60 * 60 * 1000;
      this.clearForm();
      // salvar cantidad de mensajes pendientes, por si se quiere marcar no leido
      this.selectedPendingMessagesCount = chat.pending_messages_count;
      // socket para resetear contador de mensajes no leidos a todos los conectados
      socket.emit("RESTART_PENDING_MESSAGES", {
        chatId: chat._id,
      });
      this.messageToReply=null;
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
      // get last client message

      this.$store.commit("chatsModule/setMessages", this.messages);
      this.messages = this.$store.state.chatsModule.messages;
      this.chat = chat;
      this.selectedChat = chat;
      this.selectedChat.pending_messages_count = 0; // reiniciar contador mensajes sin leer
      const bot = this.$store.state.botsModule.bots.find((el) => el.fanpageId == chat.pageID)
      this.chatSidebar.SET_CURRENT_BOT(bot);
      this.$nextTick(() => {
        scrollBottom();
      });

      this.isChatMessageReady = true;
      // get millis if whatsapp
      if (chat.platform === "whatsapp") {
        this.remainingMillis = 24 * 60 * 60 * 1000 - (Date.now() - new Date(this.selectedChat.last_message.createdAt).getTime())
        this.updateCountdown += 1;
      }
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
      //  let negotiationStatus=await this.$store.dispatch("negotiationStatusesLogsModule/listLastByLeadId",{leadId:this.selectedChat.leadId._id,cleanLeadId:this.selectedChat.cleanLeadId?._id})
      // if(negotiationStatus){
      this.selectedNegotiationStatus = chat.negotiationStatusId;
      // }
      this.updateLabels += 1;
      this.updateNegotiationStatus += 1;
    },
    sendMessage(text, from = "Agente", type = "text", { url } = {}) {
      const user = JSON.parse(localStorage.getItem("user"));
      this.text = "";
      socket.emit("AGENT_MESSAGE", {
        senderId: this.selectedChat.leadId.contactId,
        chatId: this.selectedChat._id,
        text: text,
        pageID: this.selectedChat.pageID,
        platform: this.selectedChat.platform,
        context:this.messageToReply,
        payload: {
          url,
        },
        type,
        userId: user._id
      });
      // set negotiation status
//       if(this.$store.state.chatsModule.hasPendingNegotiationStatus){
//         this.$store.dispatch("negotiationStatusesLogsModule/create",{
//     "negotiationStatusId": "636fc9aed31e5c701c0bb7c9",
//     "isCompleted": false,
//     "chatId": this.selectedChat._id,
//     "hasCronJob": true
// })
// this.$store.state.chatsModule.hasPendingNegotiationStatus=false
//       }
      this.messageToReply=null;
      scrollBottom();

    },
    clearForm() {
      this.userForm.name = "";
      this.userForm.email = "";
      this.userForm.city = "";
      this.userForm.todofullLabels = [];
      this.userForm.notes = "";
      this.userForm.phone = "";
      this.selectedAgent = null
    },
    connectAgent(chat) {
      if (chat.isBotActive) {
        chat.isBotActive = false;
        this.selectedChat.isBotActive = false;
        buildSuccess("Chatbot desactivado correctamente");
        const user = JSON.parse(localStorage.getItem("user"));
        let message =
          "🤝👩🏻‍💼 Ahora estás conversando con el agente " +
          (user.alias || (user.first_name +
            " " +
            user.last_name));
        console.log("CONECTANDO AGENTE");
        this.sendMessage(message, "Chatbot");
        this.isAgentConnected = true;
        // se desactiva bot
        chatsService.update(this.selectedChat._id, {
          isBotActive: false,
        });
        // se agrega el agente usuario al chat
        chatsService.addUser(this.selectedChat._id, user._id)
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
      let message = `El agente ${(user.alias || (user.first_name +
        " " +
        user.last_name))} se ha desconectado`;
      this.sendMessage(message, "Chatbot");
      this.isAgentConnected = false;
      this.selectedChat.userId = null;
      chatsService.update(this.selectedChat._id, {
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
    toggleCountry(country) {
      if (this.selectedCountry === country.value) {
        return this.selectedCountry = null;
      }

      this.selectedCountry = country.value
    },
    mergePermissions(teamPermissions, userPermissions) {
      return teamPermissions.reduce((permissions, current) => {
        const countries = [...permissions.countries]
        for (const country of current.countries) {
          if (!countries.includes(country)) countries.push(country)
        }
        const platforms = [...permissions.platforms]
        for (const platform of current.platforms) {
          if (!platforms.includes(platform)) platforms.push(platform)
        }
        const status = [...permissions.status]
        for (const status of current.status) {
          if (!status.includes(status)) status.push(status)
        }

        return {
          ...permissions,
          countries,
          platforms,
          status,
        };
      }, userPermissions)
    },
    onSelectedAgent(agent) {
      this.selectedAgent = agent;
      console.log('🚀 Aqui *** -> this.selectedAgent ', this.selectedAgent );
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
      let createdItem;
      if (this.userForm.phone) {
        createdItem = await this.$store.dispatch(
          "cleanLeadsModule/create",
          {
            telefono: this.userForm.phone,
            estado:
              this.selectedChat.cleanLeadId &&
                this.selectedChat.cleanLeadId.estado &&
                this.selectedChat.cleanLeadId.estado !== 'SIN ASIGNAR'
                ? this.selectedChat.cleanLeadId.estado
                : (this.selectedChat.cleanLeadId &&
                  this.selectedChat.cleanLeadId.telefonoId) ||
                  this.selectedChat.leadId.telefonoId
                  ? "RE-CONECTAR"
                  : "SIN ASIGNAR",
            telefonoId: this.selectedChat.leadId.telefonoId
              ? this.selectedChat.leadId.telefonoId._id
              : this.selectedChat.cleanLeadId?.telefonoId?._id,

            todofullLabels: this.getIdTodofullLabels(this.userForm.todofullLabels),
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
        let promises = [
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
        ]

        await Promise.all(promises);
      } else {
        await this.$store.dispatch("leadsModule/update", {
          id: this.selectedChat.leadId._id,
          data: {
            appName: this.userForm.name,
            email: this.userForm.email,
            ciudad: this.userForm.city,
            nota: this.userForm.notes,
            todofullLabels: this.getIdTodofullLabels(this.userForm.todofullLabels),
          },
        });
      }
      // if(this.selectedNegotiationStatus){
      //     this.$store.dispatch("negotiationStatusesLogsModule/create",{
      //       "negotiationStatusId": this.selectedNegotiationStatus,
      //       "isCompleted": false,
      //       "chatId": this.selectedChat._id,
      //       "cleanLeadId": createdItem?._id,"leadId":this.selectedChat.leadId._id,"hasCronJob": true});
          this.$store.dispatch("chatsModule/update", {
            id: this.selectedChat._id,
            data: { negotiationStatusId: this.selectedNegotiationStatus },
            notifyUser: false,
          });

        // }
    },
    getFileNameFromUrl(url) {
      return getFileNameFromUrl(url);
    },
    getIdTodofullLabels(todofullLabels) {
      // if is object, get id
      return todofullLabels.filter(el => el).map((label) => typeof label === 'object' ? label.value : label);
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
      if (this.isLoadingMore === true) { return; }

      if (this.searchContact.trim().length !== 0) { return; }

      this.isLoadingMore = true;

      this.page += 1;
      let payload = {
        page: this.page,
        limit: 50,
        sort: "updatedAt",
        order: "desc",
      };
      if (this.activePlatforms.length > 0) {
        payload.platforms = this.activePlatforms;
      }
      if (this.selectedCountry) {
        payload.selectedCountry = this.selectedCountry;
      }
      if (this.selectedFilterNegotiationStatus) {
        payload.negotiationStatusId = this.selectedFilterNegotiationStatus;
      }
      if (this.filterChats !== undefined) {
        payload.filterChats = this.filtersSource[this.filterChats].value;
      }
      const response = await chatsService.list(payload);
      for (const chat of response.data.payload) {
        this.$store.commit("chatsModule/addChatToEnd", chat);
      }

      this.isLoadingMore = false;
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
      this.selectedMessageText = JSON.parse(JSON.stringify(this.selectedMessage));
    },
    getSelectedText() {
      return window.getSelection().toString();
    },
    handleImages() {
      console.log("aaa")
      // this.editedItem.img = files;
      console.log('🚀 Aqui *** ->  this.$refs.image', this.$refs.image);
      // console.log('🚀 Aqui *** -> this.$refs.image.files', this.$refs.image.files);
      [this.image] = this.$refs.image.files;
      this.sendImageMessage();
    },
    clear() {
      this.image = null;
      this.resetImage += 1;
      this.imageUploaded = false;
    },
    handleFileUpload() {
      console.log("aaa")
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
        this.sendMessage(this.text, "Agente", "image", { url });
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
        this.sendMessage(this.text, "Agente", "file", { url });
        this.uploadDialog = false;
        this.uploadingImage = false;
        this.clear();
        return url;
      }
    }, openUrl(url) {
      window.open(url, '_blank')
    }, selectChatRoom() {
      this.selectedText = window.getSelection().toString();
    }, onSelectNegotiationStatuses(negotiationStatus) {
      this.selectedNegotiationStatus = negotiationStatus;
    }, goToMessage(message) {
      if (message) {
        const id = message._id;
        const element = document.getElementById(id);
        console.log('🚀 Aqui *** -> element', element);
        if (element) {
          element.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
          });
          element.classList.add("effect-message");
          setTimeout(function () {
            element.classList.remove("effect-message");
          }, 3000);
        }
      }
    },replyToMessage(selectedMessage){
      this.messageToReply=selectedMessage;
      // wait next tick
      this.$nextTick(() => {
        // focuse element
      const replyAlert=document.getElementById("reply-alert");
      if(replyAlert){
        console.log("encontrado!")
        replyAlert.scrollIntoView({behavior: 'auto',
          block: 'center',
          inline: 'center'});
          scrollBottom()
      }
      });
    }
  },
  computed: {
    permissions() {
      if (this.teamPermissions.length) {
        return this.mergePermissions(this.teamPermissions, this.userPermissions)
      }

      return this.userPermissions;
    },
    countriesSource() {
      if (!this.permissions) return [];

      return this.countries.filter(o => this.permissions.countries.includes(o.value))
    },
    platformsSource() {
      if (!this.permissions) return [];

      return this.platforms.filter(o => this.permissions.platforms.includes(o.value))
    },
    filtersSource() {
      if (!this.permissions) return [];

      return this.filters.filter(o => this.permissions.status.includes(o.value))
    },
    filteredChats() {
      return this.$store.getters["chatsModule/getSortedChats"].filter(chat => {
        if (this.activePlatforms.length > 0) {
          if (!this.activePlatforms.includes(chat.platform)) return false;
        }
        if (this.selectedCountry) {
          if (chat.leadId.pais !== this.selectedCountry) return false;
        }

        return true;
      })
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
          acc.push({ from: el.from, messages: [el], date: el.createdAt, _id: el._id });
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
    }

  },
  watch: {
    messages() {
      scrollBottom();
    },
    selectedCountry() {
      this.page = 1;
      this.initialize();
    },
    selectedSellTeam(val) {
      this.page = 1;
      this.initialize()
      if (val) {
        chatsService.listPermissionsByTeams(val).then(res => this.teamPermissions = res.data.payload)
      } else {
        this.teamPermissions = []
      }
    },
    selectedFilterNegotiationStatus(val) {
      this.page = 1;
      this.initialize()
      // if(val) {
      //   chatsService.listPermissionsByTeams(val).then(res => this.teamPermissions = res.data.payload)
      // }else {
      //   this.teamPermissions = []
      // }
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
    }, async '$store.state.chatsModule.hasToUpdateSelectedChat'() {
      if (this.selectedChat) {
        try {
          const updatedChat = (await chatsService.listOne(this.selectedChat._id)).data.payload;
          if (updatedChat.leadId) {
            this.userForm.todofullLabels = updatedChat.leadId.todofullLabels;
          }
          if (updatedChat.cleanLeadId) {
            this.userForm.todofullLabels = updatedChat.cleanLeadId.todofullLabels;
          }
          this.updateLabels += 1;
        } catch (error) {
          console.log(error)
        }
      }
    }
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
  height: 100%;
}

.tooltip-text {
  visibility: hidden;
  position: absolute;
  z-index: 9999999999 !important;
  width: 100px !important;
}

.tooltip-dropdown {
  visibility: hidden;
  position: absolute;
  z-index: 9999999999 !important;
  width: 100px !important;
}

#top {
  top: -40px;
  left: -5%;
}

#top-right {
  top: -40px;
  left: 320%;
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

.effect-message {
  text-decoration: underline !important;
  font-weight: bold !important;
  background-color: yellow !important;
  size: 30px !important;
}

/* Reply button */
.chat-message .reply-btn {
  /* Style the reply button */
  background-color: #4caf50; /* Green */
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

/* Icon dropdown */
.chat-message .icon-dropdown {
  /* Style the icon dropdown */
  position: absolute; /* Position absolute to align it on top right corner */
  top: 0;
  right: 0;
  display: none;
}

/* Show icon dropdown on hover */
.chat-message:hover .icon-dropdown {
  display: block;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Show message controls on hover */
.chat-message:hover .message-controls {
  display: flex;
}

/* Message controls */
.chat-message .message-controls {
  /* Style the message controls container */
  display: none;
}
</style>
