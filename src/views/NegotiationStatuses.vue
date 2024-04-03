<template>
  <v-container fluid>
    <v-row class="mb-3">
      <div class="d-flex justify-space-evenly">
        <v-btn
          v-for="(country, idx) of countries"
          small
          icon
          color="white"
          @click="toggleCountry(country)"
          :class="{ selected: selectedCountry === country.value }"
          :key="idx"
        >
          <img style="width: 25px" :src="country.icon" />
          <v-tooltip activator="parent" anchor="bottom">
            {{ country.value }}
          </v-tooltip>
        </v-btn>
      </div>
      <v-col cols="12" sm="12">
        <v-card class="mb-3 mr-3 pa-3">
          <v-card-header-text>
            <v-card-title> Horario hábil </v-card-title>
          </v-card-header-text>
          <v-container fluid>
            <div class="d-flex align-items-center mb-4">
              <div class="col-md-6 pl-0">
                <p class="etiqueta">Desde:</p>
                <input type="time" value="" class="mb-0" />
              </div>
              <div class="col-md-6 pr-0">
                <p class="etiqueta">Hasta:</p>
                <input type="time" value="" class="mb-0" />
              </div>
            </div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mb-3">
      <v-col cols="12" sm="12">
        <v-btn
          @click="addNegotiationStatus(negotiationStatuses)"
          color="success"
        >
          Nuevo
          <v-tooltip activator="parent" anchor="bottom">
            Nuevo estado de negociación
          </v-tooltip>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        v-for="(negotiationStatus, index) in negotiationStatuses"
        :key="negotiationStatus._id"
      >
        <v-card class="mb-3 mr-3">
          <v-card-header-text>
            <v-card-title
              ><h5 v-show="!negotiationStatus.isEditing">
                {{ negotiationStatus.name }}
              </h5>
              <v-text-field
                v-show="negotiationStatus.isEditing"
                density="compact"
                hide-details
                variant="outlined"
                v-model="negotiationStatus.name"
                class="mb-2"
              ></v-text-field>
            </v-card-title>
          </v-card-header-text>
          <v-divider></v-divider>
          <v-container fluid>
            <b>Después de</b>
            <v-select
              v-show="negotiationStatus.isEditing"
              :items="[
                { value: 1, label: '1 día' },
                { value: 2, label: '2 días' },
                { value: 3, label: '3 días' },
                { value: 4, label: '4 días' },
              ]"
              v-model="negotiationStatus.daysToNextStatus"
              item-title="label"
              item-value="value"
              placeholder="x dias"
              density="compact"
            ></v-select>
            <v-card-text v-show="!negotiationStatus.isEditing">
              {{
                negotiationStatus.daysToNextStatus
                  ? `${negotiationStatus.daysToNextStatus} días`
                  : "Sin selección"
              }}
            </v-card-text>
            <b>Cambiar a estado</b>
            <v-select
              v-show="negotiationStatus.isEditing"
              :items="[...negotiationStatuses]"
              clearable
              v-model="negotiationStatus.nextNegotiationStatusId"
              item-title="name"
              item-value="_id"
              placeholder="Sin siguiente estado"
              density="compact"
            ></v-select>
            <v-card-text v-show="!negotiationStatus.isEditing">
              {{
                negotiationStatus.nextNegotiationStatusId
                  ? negotiationStatuses.find(
                      (el) =>
                        el._id == negotiationStatus.nextNegotiationStatusId
                    )?.name
                  : "Sin estado"
              }}
            </v-card-text>
            <v-divider class="mb-3"></v-divider>
            <v-card
              class="mb-2"
              v-for="(automation, idx) in negotiationStatus.automations"
              :key="automation._id"
            >
              <v-card-header>
                <v-card-header-text>
                  <v-col cols="12" sm="12" md="12">
                    <v-row>
                      <v-col cols="12" sm="10">
                        <h5>Mensaje {{ idx + 1 }}</h5>
                      </v-col>
                      <v-col
                        v-show="negotiationStatus.isEditing"
                        cols="12"
                        sm="2"
                      >
                        <v-btn
                          small
                          variant="text"
                          color="error"
                          @click="negotiationStatus.automations.splice(idx, 1)"
                          >Borrar</v-btn
                        >
                      </v-col>
                    </v-row>

                    <v-divider></v-divider>
                    <v-col cols="12" sm="12">
                      <b>Se activará después de</b>
                      <vue-timepicker
                        class="ml-2"
                        v-show="negotiationStatus.isEditing"
                        format="HH:mm:ss"
                        v-model="automation.afterTimeFormatted"
                      ></vue-timepicker>
                      <span class="ml-2" v-show="!negotiationStatus.isEditing"
                        ><i class="mr-2 mdi text-h5 mdi-clock-start"></i>
                        {{ automation.afterTimeFormatted }}</span
                      >
                    </v-col>
                  </v-col>

                  <v-card-subtitle>{{ automation.name }}</v-card-subtitle>
                </v-card-header-text>
              </v-card-header>

              <v-card-text v-show="!negotiationStatus.isEditing">
                {{ automation.message }}
              </v-card-text>
              <v-textarea
                v-show="negotiationStatus.isEditing"
                class="ma-2"
                v-model="automation.message"
                rows="2"
                variant="outlined"
              ></v-textarea>
            </v-card>
            <v-btn
              v-show="negotiationStatus.isEditing"
              @click="addAutomation(negotiationStatus)"
              small
              icon
              color="success"
            >
              <v-icon class="wechat-color">mdi-plus-box</v-icon>
              <v-tooltip activator="parent" anchor="bottom">
                Agregar
              </v-tooltip>
            </v-btn>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-show="negotiationStatus.isEditing"
              @click="save(negotiationStatus, index)"
              color="success"
              >Guardar</v-btn
            >
            <v-btn
              @click="negotiationStatus.isEditing = true"
              v-show="!negotiationStatus.isEditing"
              color="info"
              >Editar</v-btn
            >
            <v-btn color="error" @click="deletes(negotiationStatuses, index)"
              >Borrar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueTimepicker from "vue3-timepicker";
import "vue3-timepicker/dist/VueTimepicker.css";
import { convertMsToTime } from "@/utils/utils";
import PeruFlagR from "@/assets/images/flags/peru.png";
import ChileFlagR from "@/assets/images/flags/chile.png";
import ColombiaFlagR from "@/assets/images/flags/colombia.png";
import EspaniaFlag from "@/assets/images/flags/espania.png";

export default {
  components: {
    VueTimepicker,
  },
  data() {
    return {
      selectedCountry: "Chile",
      negotiationStatuses: [],
      countries: [
        { value: "Peru", icon: PeruFlagR },
        { value: "Chile", icon: ChileFlagR },
        { value: "Colombia", icon: ColombiaFlagR },
        { value: "España", icon: EspaniaFlag },
      ],
    };
  },
  mounted() {
    this.initialize();
  },
  watch: {
    selectedCountry() {
      this.initialize();
    },
  },
  methods: {
    async initialize() {
      await Promise.all([
        this.$store.dispatch("negotiationStatusesModule/list", {
          sort: "createdAt",
          order: "asc",
          country: this.selectedCountry,
          companyId: this.$store.getters["authModule/getCurrentCompany"].company._id,
        }),
      ]);
      this.negotiationStatuses = JSON.parse(
        JSON.stringify(
          this.$store.state.negotiationStatusesModule.negotiationStatuses
        )
      );
      // dar formato a autoActivateAfter
      for (const negotiationStatus of this.negotiationStatuses) {
        negotiationStatus["isEditing"] = false;
        for (const automation of negotiationStatus.automations) {
          automation.afterTimeFormatted = convertMsToTime(automation.afterTime);
        }
      }
    },
    async save(negotiationStatus, index) {
      negotiationStatus.isEditing = false;
      for (const automation of negotiationStatus.automations) {
        let [hours, minutes, seconds] =
          automation.afterTimeFormatted.split(":"); // 10:30
        automation.afterTime =
          hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;
      }
      if (negotiationStatus._id) {
        await this.$store.dispatch("negotiationStatusesModule/update", {
          id: negotiationStatus._id,
          data: negotiationStatus,
        });
      } else {
        negotiationStatus.company = this.$store.getters["authModule/getCurrentCompany"].company._id;
        this.negotiationStatuses[index] = await this.$store.dispatch(
          "negotiationStatusesModule/create",
          {
            ...negotiationStatus,
          }
        );
      }
      // dar formato a autoActivateAfter
      for (const negotiationStatus of this.negotiationStatuses) {
        negotiationStatus["isEditing"] = false;
        for (const automation of negotiationStatus.automations) {
          automation.afterTimeFormatted = convertMsToTime(automation.afterTime);
        }
      }
    },
    // onSelectedDaysToNextStatus(negotiationStatus,day){

    // },
    addAutomation(negotiationStatus) {
      negotiationStatus.automations.push({
        name: "Nuevo mensaje",
        message: "Nuevo mensaje",
        afterTime: 0,
        afterTimeFormatted: "00:00:00",
      });
    },
    addNegotiationStatus(negotiationStatuses) {
      negotiationStatuses.unshift({
        isEditing: true,
        name: "Nuevo estado",
        country: this.selectedCountry,
        automations: [
          {
            name: "Nuevo mensaje",
            message: "Nuevo mensaje",
            afterTime: 0,
            afterTimeFormatted: "00:00:00",
          },
        ],
      });
    },
    deletes(negotiationStatuses, index) {
      if (negotiationStatuses[index]._id) {
        this.$store.dispatch(
          "negotiationStatusesModule/delete",
          negotiationStatuses[index]._id
        );
      }
      negotiationStatuses.splice(index, 1);
    },
    toggleCountry(country) {
      if (this.selectedCountry === country.value) {
        return (this.selectedCountry = null);
      }

      this.selectedCountry = country.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.etiqueta {
  margin-bottom: 0;
}
</style>
