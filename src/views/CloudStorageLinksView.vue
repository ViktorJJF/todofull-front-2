<template>
  <div class="row">
    <div class="col-12">
      <div class="card box-margin">
        <div class="card-body">
          <v-btn
            @click="
              close();
              dialog = true;
            "
            >Agregar archivo</v-btn
          >
          <div class="row my-3">
            <div class="col-sm-12 col-md-5">
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
                  <th class="text-left">URL</th>
                  <th class="text-left">Nombre</th>
                  <th class="text-left">Tipo</th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="cloudStorageLink in cloudStorageLinks"
                  :key="cloudStorageLink._id"
                >
                  <td>{{ cloudStorageLink.createdAt }}</td>
                  <td>
                    <a
                      :href="cloudStorageLink.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      >{{ cloudStorageLink.url }}</a
                    >
                  </td>
                  <td>{{ cloudStorageLink.name }}</td>
                  <td>{{ cloudStorageLink.fileType }}</td>
                  <td>
                    <button class="message-options">
                      <i class="text-error mdi mdi-delete"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <!--End Basic Table-->
          </div>
          <div class="row my-3">
            <div class="col-sm-12 col-md-5">
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
                variant="underlined"
              ></v-text-field>
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
              <div class="drag-message">Arrastra un archivo aquí</div>
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
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, inject, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import type { GenericObject } from "@/types/GenericObject";
import CloudStorageLink from "@/models/CloudStorageLinks";

// plugins
const $formatDate: any = inject("$formatDate");
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
  return editedIndex.value === -1 ? "Cargar Archivo" : "Editar Archivo";
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

async function close() {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
}
</script>

<style lang="scss" scoped></style>
