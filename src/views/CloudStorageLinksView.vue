<template>
  <v-container fluid>
    <v-row class="mb-3" v-show="!showFromChat">
      <CompanySelector @onSelectedCompany="onSelectedCompany"></CompanySelector>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="card box-margin">
          <div class="card-body">
            <v-btn
              v-show="!showFromChat"
              @click="
                close();
                dialog = true;
              "
              >{{
                currentViewType === "files"
                  ? "Agregar Catálogo"
                  : "Agregar Audio"
              }}</v-btn
            >
            <v-row class="my-3">
              <v-col cols="12">
                <v-pagination
                  v-show="!showFromChat"
                  v-model="page"
                  :length="$store.state.cloudStorageLinksModule.totalPages"
                ></v-pagination>
              </v-col>
              <v-col v-show="!showFromChat" cols="12">
                <div
                  class="dataTables_info"
                  id="datatable-buttons_info"
                  role="status"
                  aria-live="polite"
                >
                  Mostrando
                  {{
                    $store.state.itemsPerPage > cloudStorageLinks.length
                      ? cloudStorageLinks.length
                      : $store.state.itemsPerPage
                  }}
                  de {{ $store.state.cloudStorageLinksModule.total }} registros
                </div>
              </v-col>
            </v-row>
            <v-col cols="12" sm="12">
              <v-text-field
                style="background-color: #fff"
                dense
                hide-details
                v-model="search"
                :placeholder="
                  currentViewType === 'files'
                    ? 'Buscar catálogo'
                    : 'Buscar audio'
                "
                variant="outlined"
                density="compact"
                clearable
              ></v-text-field>
            </v-col>
            <div class="basic-table-area">
              <!--Basic Table-->
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Fecha de creación</th>
                    <th v-if="!showFromChat" class="text-left">URL</th>
                    <th class="text-left">Nombre</th>
                    <th class="text-left" v-if="!showFromChat">Veces usado</th>
                    <th class="text-left" v-if="!showFromChat">Activo?</th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="cloudStorageLink in cloudStorageLinks"
                    :key="cloudStorageLink._id"
                  >
                    <td>
                      {{
                        getFormat(
                          cloudStorageLink.createdAt,
                          "dd/MM/yyyy HH:mm"
                        )
                      }}
                    </td>
                    <td v-if="!showFromChat || currentViewType === 'audios'">
                      <div
                        v-for="(file, fileIndex) in cloudStorageLink.files"
                        :key="fileIndex"
                      >
                        <a
                          v-if="file.url && file.type !== 'audio/wav'"
                          :href="file.url"
                          target="_blank"
                          rel="noopener noreferrer"
                          >{{ file.url }}</a
                        >
                        <div v-else>
                          <v-row>
                            <v-col sm="8">
                              <audio
                                style="max-width: 90%"
                                controls
                                :src="file.url"
                              ></audio
                            ></v-col>
                            <v-col sm="4">
                              <div class="audio-duration" v-if="file.duration">
                                {{ Math.floor(file.duration / 1000) }} segs
                              </div></v-col
                            >
                          </v-row>
                        </div>
                      </div>
                    </td>
                    <td>
                      {{ cloudStorageLink.name }}
                    </td>
                    <td v-if="!showFromChat">
                      {{ cloudStorageLink.timesUsed }}
                    </td>
                    <td v-if="!showFromChat">
                      <v-checkbox
                        @change="onIsActiveChange(cloudStorageLink)"
                        v-model="cloudStorageLink.isActive"
                      ></v-checkbox>
                    </td>
                    <td>
                      <!-- <PDFViewer
                      :pdfUrl="'https://databot-files.s3.amazonaws.com/Generar+Admin+Token+para+uso+API+Shopify.pdf'"
                    ></PDFViewer> -->
                      <template v-if="!showFromChat">
                        <v-btn
                          v-show="cloudStorageLink.type !== 'audios'"
                          color="primary"
                          icon="mdi mdi-eye"
                          size="x-small"
                          class="mr-2"
                        ></v-btn>
                        <v-btn
                          @click="editItem(cloudStorageLink)"
                          color="success"
                          icon="mdi mdi-pencil"
                          size="x-small"
                          class="mr-2"
                        ></v-btn>
                        <v-btn
                          @click="deleteItem(cloudStorageLink)"
                          color="error"
                          icon="mdi mdi-delete"
                          size="x-small"
                        ></v-btn>
                      </template>
                      <template v-else>
                        <v-btn
                          color="primary"
                          size="small"
                          class="mr-2"
                          @click="sendCatalog(cloudStorageLink)"
                          >Enviar</v-btn
                        >
                      </template>
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <!--End Basic Table-->
            </div>
            <div class="row my-3">
              <div v-show="!showFromChat" class="col-sm-12 col-md-5">
                <div
                  class="dataTables_info"
                  id="datatable-buttons_info"
                  role="status"
                  aria-live="polite"
                >
                  Mostrando
                  {{
                    $store.state.itemsPerPage > cloudStorageLinks.length
                      ? cloudStorageLinks.length
                      : $store.state.itemsPerPage
                  }}
                  de {{ $store.state.cloudStorageLinksModule.total }} registros
                </div>
              </div>
              <div class="col-sm-12 col-md-7">
                <v-pagination
                  v-model="page"
                  :length="$store.state.cloudStorageLinksModule.totalPages"
                ></v-pagination>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-dialog v-model="dialog" width="700px">
        <v-card>
          <v-card-title>
            <v-icon color="primary" class="mr-1">mdi-cloud-upload</v-icon>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-container class="pa-5">
            <v-row dense>
              <v-col cols="12" sm="12" md="12">
                <p class="body-1 font-weight-bold">Nombre</p>
                <v-text-field
                  v-model="editedItem.name"
                  hide-details
                  variant="outlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <TodofullLabelsSelectorV2
                  :initialData="editedItem.todofullLabels"
                  class="my-3"
                  @onSelectTodofullLabels="onSelectTodofullLabels"
                ></TodofullLabelsSelectorV2>
              </v-col>
              <v-col cols="12" sm="12">
                <NegotiationStatusesSelector
                  v-if="dialog"
                  :initialData="editedItem.negotiationStatusId"
                  class="my-3"
                  @onSelectNegotiationStatuses="onSelectNegotiationStatuses"
                >
                </NegotiationStatusesSelector>
              </v-col>
              <!-- <v-col cols="12" sm="12" md="12">
                <p class="body-1 font-weight-bold">URL (Opcional)</p>
                <v-text-field
                  v-model="editedItem.url"
                  required
                  hide-details
                  variant="underlined"
                ></v-text-field>
              </v-col> -->
              <v-col cols="12" sm="12">
                <div v-if="currentViewType === 'files'">
                  <UploadFiles
                    :files="editedItem.files"
                    v-if="dialog"
                    @onNewFiles="onNewFiles"
                  ></UploadFiles>
                </div>
                <div v-else>
                  <AudioRecordingMany
                    v-if="dialog"
                    @onNewAudios="onNewAudios"
                    :audios="editedItem.files"
                  ></AudioRecordingMany>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions rd-actions>
            <div class="flex-grow-1"></div>
            <v-btn outlined color="error" text @click="close">Cancelar</v-btn>
            <v-btn :loading="loadingButton" color="success" @click="save"
              >Guardar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted, computed, inject, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import type { GenericObject } from "@/types/GenericObject";
import CloudStorageLink from "@/models/CloudStorageLinks";
import TodofullLabelsSelector from "@/components/TodofullLabelsSelector.vue";
import TodofullLabelsSelectorV2 from "@/components/TodofullLabelsSelectorV2.vue";
import NegotiationStatusesSelector from "@/components/NegotiationStatusesSelector.vue";
import UploadFiles from "@/components/UploadFiles.vue";
import AudioRecordingMany from "@/components/AudioRecordingMany.vue";
import CompanySelector from "@/components/CompanySelector.vue";
// import PDFViewer from "@/components/PDFViewer.vue";
import filesService from "@/services/api/files";
import { uploadFile, getFormat } from "@/utils/utils";

const props = defineProps({
  showFromChat: { type: Boolean, default: false },
  company: { type: String, default: "" },
  type: { type: String, default: "" },
});
// emits
const emit = defineEmits(["onSendCatalog"]);
// plugins
const $deepCopy: any = inject("$deepCopy");
const $swal: any = inject("$swal");
const $store = useStore();
const $route = useRoute();
const $router = useRouter();
// Entity
const cloudStorageLinks = ref<GenericObject[]>([]);
const editedItem = ref<GenericObject>(CloudStorageLink());
const defaultItem = ref<GenericObject>(CloudStorageLink());
// Pagination
const pagination = ref<GenericObject>({});
const page = ref<number>(1);
const pageCount = ref<number>(0);
// Search
const fieldsToSearch = ref<string[]>(["name"]);
const search = ref<string>("");
// Others
const loadingButton = ref<boolean>(false);
const delayTimer = ref<any>(null);
const editedIndex = ref<number>(-1);
const selectedCompany = ref<string>($store.getters["authModule/getCurrentCompany"].company._id);
const headers = ref<any[]>([
  {
    text: "Agregado",
    align: "left",
    sortable: false,
    value: "createdAt",
  },
  {
    text: "Nombre",
    align: "left",
    sortable: false,
    value: "name",
  },
  { text: "Acciones", value: "action", sortable: false },
]);

const dialog = ref<boolean>(false);

const formTitle = computed(() => {
  return editedIndex.value === -1
    ? isFilesView.value
      ? "Cargar Catálogo"
      : "Cargar audio"
    : isFilesView.value
    ? "Editar Catálogo"
    : "Editar audio";
});

watch(search, () => {
  clearTimeout(delayTimer.value);
  delayTimer.value = setTimeout(() => {
    page.value = 1;
    initialize(page.value);
  }, 600);
});

watch(page, () => {
  initialize(page.value);
});

watch($route, () => {
  initialize();
});

const currentViewType = computed(() => {
  return props.type
    ? props.type
    : $route.name === "CloudStorageLinks"
    ? "files"
    : "audios";
});

const isFilesView = computed(() => {
  return currentViewType.value === "files";
});

onMounted(() => {
  initialize();
});

async function initialize(pageNumber: number = 1): Promise<any> {
  let payload = {
    page: page.value || pageNumber,
    fields: fieldsToSearch.value.join(","),
    sort: "createdAt",
    order: "desc",
    limit: 10,
    type: currentViewType.value,
  };
  if (selectedCompany.value) {
    payload["company"] = selectedCompany.value;
  }
  if (search.value) {
    payload["filter"] = search.value;
  }
  if (props.showFromChat) {
    payload["isActive"] = true;
  }
  await Promise.all([$store.dispatch("cloudStorageLinksModule/list", payload)]);
  cloudStorageLinks.value = $deepCopy(
    $store.state.cloudStorageLinksModule.cloudStorageLinks
  );
}

async function save() {
  loadingButton.value = true;
  if (editedIndex.value > -1) {
    editedItem.value.company = selectedCompany.value;
    let id = cloudStorageLinks.value[editedIndex.value]._id;
    try {
      if (editedItem.value.preFiles) {
        editedItem.value.files = await Promise.all(
          editedItem.value.preFiles.map(async (file) => {
            if (!file.url) {
              return await uploadFile(file, file.duration ? "audio" : "file");
            }
            return file.url;
          })
        );
        // give format
        editedItem.value.files = editedItem.value.files.map((file, index) => {
          return {
            url: file,
            name: editedItem.value.preFiles[index].name,
            type: editedItem.value.preFiles[index].type,
            size: editedItem.value.preFiles[index].size,
            duration: editedItem.value.preFiles[index].duration,
          };
        });
      }
      // upload file
      // if (editedItem.value.file) {
      //   editedItem.value.url = await uploadFile(editedItem.value.file);
      // }
      await $store.dispatch("cloudStorageLinksModule/update", {
        id,
        data: { type: currentViewType.value, ...editedItem.value },
      });
      Object.assign(
        cloudStorageLinks.value[editedIndex.value],
        editedItem.value
      );
      close();
    } finally {
      loadingButton.value = false;
    }
  } else {
    //create item
    try {
      // upload file
      if (editedItem.value.preFiles) {
        editedItem.value.files = await Promise.all(
          editedItem.value.preFiles.map(async (file) => {
            return await uploadFile(file, file.duration ? "audio" : "file");
          })
        );
        // give format
        editedItem.value.files = editedItem.value.files.map((file, index) => {
          return {
            url: file,
            name: editedItem.value.preFiles[index].name,
            type: editedItem.value.preFiles[index].type,
            size: editedItem.value.preFiles[index].size,
            duration: editedItem.value.preFiles[index].duration,
          };
        });
      }
      editedItem.value.company = selectedCompany.value;
      let newItem = await $store.dispatch("cloudStorageLinksModule/create", {
        type: currentViewType.value,
        ...editedItem.value,
      });
      cloudStorageLinks.value.push(newItem);
      close();
      initialize();
    } finally {
      loadingButton.value = false;
    }
  }
}

function editItem(item: GenericObject) {
  editedIndex.value = cloudStorageLinks.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}

async function deleteItem(item: GenericObject) {
  const index = cloudStorageLinks.value.indexOf(item);
  let id = cloudStorageLinks.value[index]._id;
  if (
    (
      await $swal({
        text: "¿Realmente deseas eliminar este registro?",
        icon: "error",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
      })
    ).isConfirmed
  ) {
    await $store.dispatch("cloudStorageLinksModule/delete", id);
    cloudStorageLinks.value.splice(index, 1);
  }
}

function onSelectNegotiationStatuses(negotiationStatus) {
  console.log("🚀 Aqui *** -> negotiationStatus:", negotiationStatus);
  editedItem.value.negotiationStatusId = negotiationStatus;
}

function onSelectTodofullLabels(selectedLabels) {
  console.log("🚀 Aqui *** -> selectedLabels:", selectedLabels);
  if (selectedLabels.length > 0) {
    editedItem.value.todofullLabels = selectedLabels;
  }
}

function onSelectedCompany(company) {
  selectedCompany.value = company;
  if (props.company) {
    selectedCompany.value = props.company;
  }
  editedItem.value.company = company;
  initialize();
}

async function close() {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
}

async function onNewFiles(files) {
  // console.log("🐞 LOG HERE file:", file);
  // let formData = new FormData();
  // formData.append("file", file);
  // editedItem.value.file = file; // just temporal, until its uploaded
  editedItem.value.preFiles = files;
}

function onNewAudios(audios) {
  console.log("🐞 LOG HERE audios:", audios);
  editedItem.value.preFiles = audios;
}

function sendCatalog(el) {
  emit("onSendCatalog", el);
}

async function onIsActiveChange(item) {
  await $store.dispatch("cloudStorageLinksModule/update", {
    id: item._id,
    data: item,
  });
}
</script>

<style lang="scss" scoped>
.audio-duration {
  color: #333; /* Text color */
  font-size: 14px; /* Text size */
  font-weight: bold; /* Text weight */
  margin-top: 5px; /* Space above the duration */
  text-align: center; /* Centering text */
  background-color: #f0f0f0; /* Background color */
  padding: 5px; /* Padding inside the box */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adding a subtle shadow */
}
</style>
