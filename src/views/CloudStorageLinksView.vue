<template>
  <v-container fluid>
    <v-row class="mb-3" v-show="!showFromChat">
      <CountrySelector @onSelectedCountry="onSelectedCountry"></CountrySelector>
    </v-row>
    <v-row>
      <div class="col-12">
        <div class="card box-margin">
          <div class="card-body">
            <v-btn
              v-show="!showFromChat"
              @click="
                close();
                dialog = true;
              "
              >Agregar Catálogo</v-btn
            >
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
                <el-pagination
                  v-model:current-page="page"
                  @current-change="initialize(page)"
                  background
                  layout="pager"
                  :total="$store.state.cloudStorageLinksModule.total"
                  :page-size="$store.state.itemsPerPage"
                />
              </div>
            </div>
            <div class="basic-table-area">
              <!--Basic Table-->
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Fecha de creación</th>
                    <th v-if="!showFromChat" class="text-left">URL</th>
                    <th class="text-left">Nombre</th>
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
                    <td v-if="!showFromChat">
                      <a
                        :href="cloudStorageLink.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        >{{ cloudStorageLink.url }}</a
                      >
                    </td>
                    <td>{{ cloudStorageLink.name }}</td>
                    <td v-if="!showFromChat">
                      <v-checkbox
                        v-model="cloudStorageLink.isActive"
                      ></v-checkbox>
                    </td>
                    <td>
                      <!-- <PDFViewer
                      :pdfUrl="'https://databot-files.s3.amazonaws.com/Generar+Admin+Token+para+uso+API+Shopify.pdf'"
                    ></PDFViewer> -->
                      <template v-if="!showFromChat">
                        <v-btn
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
                <el-pagination
                  v-model:current-page="page"
                  @current-change="initialize(page)"
                  background
                  layout="pager"
                  :total="$store.state.cloudStorageLinksModule.total"
                  :page-size="$store.state.itemsPerPage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  :country="selectedCountry"
                  class="my-3"
                  @onSelectNegotiationStatuses="onSelectNegotiationStatuses"
                >
                </NegotiationStatusesSelector>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <p class="body-1 font-weight-bold">URL (Opcional)</p>
                <v-text-field
                  v-model="editedItem.url"
                  required
                  hide-details
                  variant="underlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <UploadFiles @onNewFile="onNewFile"></UploadFiles>
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
import CountrySelector from "@/components/CountrySelector.vue";
// import PDFViewer from "@/components/PDFViewer.vue";
import filesService from "@/services/api/files";
import { uploadFile, getFormat } from "@/utils/utils";

const props = defineProps({
  showFromChat: { type: Boolean, default: false },
  country: { type: String, default: "" },
});
// emits
const emit = defineEmits(["onSendCatalog"]);
// plugins
const $deepCopy: any = inject("$deepCopy");
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
const fieldsToSearch = ref<string[]>([]);
const search = ref<string>("");
// Others
const loadingButton = ref<boolean>(false);
const delayTimer = ref<any>(null);
const editedIndex = ref<number>(-1);
const selectedCountry = ref<string>("Chile");
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
  return editedIndex.value === -1 ? "Cargar Catálogo" : "Editar Catálogo";
});

watch(search, () => {
  clearTimeout(delayTimer.value);
  delayTimer.value = setTimeout(() => {
    page.value = 1;
    initialize(page.value);
  }, 600);
});

onMounted(() => {
  initialize();
});

async function initialize(pageNumber: number = 1): Promise<any> {
  let payload = {
    page: page.value || pageNumber,
    fieldsToSearch: fieldsToSearch.value,
    sort: "createdAt",
    order: "desc",
  };
  if (selectedCountry.value) {
    payload["country"] = selectedCountry.value;
  }
  if (search.value) {
    payload["search"] = search.value;
  }
  await Promise.all([$store.dispatch("cloudStorageLinksModule/list", payload)]);
  cloudStorageLinks.value = $deepCopy(
    $store.state.cloudStorageLinksModule.cloudStorageLinks
  );
}

async function save() {
  loadingButton.value = true;
  if (editedIndex.value > -1) {
    editedItem.value.country = selectedCountry.value;
    let id = cloudStorageLinks.value[editedIndex.value]._id;
    try {
      await $store.dispatch("cloudStorageLinksModule/update", {
        id,
        data: editedItem.value,
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
      if (editedItem.value.file) {
        editedItem.value.url = await uploadFile(editedItem.value.file);
      }
      editedItem.value.country = selectedCountry.value;
      let newItem = await $store.dispatch(
        "cloudStorageLinksModule/create",
        editedItem.value
      );
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
    await ElMessageBox.confirm(
      "¿Realmente deseas eliminar este registro?",
      "Confirmación",
      {
        confirmButtonText: "OK",
        cancelButtonText: "Cancelar",
        type: "warning",
      }
    )
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

function onSelectedCountry(country) {
  selectedCountry.value = country;
  if (props.country) {
    selectedCountry.value = props.country;
  }
  editedItem.value.country = country;
  initialize();
}

async function close() {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
}

async function onNewFile(file) {
  let formData = new FormData();
  formData.append("file", file);
  editedItem.value.file = file; // just temporal, until its uploaded
}

function sendCatalog(el) {
  emit("onSendCatalog", el);
}
</script>

<style lang="scss" scoped></style>
