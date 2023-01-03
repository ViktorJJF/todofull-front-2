<template>
  <v-container fluid>
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

export default {
  components: {
    VueTimepicker,
  },
  data() {
    return {
      negotiationStatuses: [],
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize() {
      await Promise.all([
        this.$store.dispatch("negotiationStatusesModule/list", {
          sort: "createdAt",
          order: "asc",
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
    addAutomation(negotiationStatus) {
      negotiationStatus.automations.push({
        name: "Nuevo mensaje",
        message: "Nuevo mensaje",
        afterTime: 0,
        afterTimeFormatted: "00:00:00",
      });
    },
    addNegotiationStatus(negotiationStatuses) {
      negotiationStatuses.push({
        isEditing: true,
        name: "Nuevo estado",
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
  },
};
</script>

<style lang="scss" scoped>
</style>