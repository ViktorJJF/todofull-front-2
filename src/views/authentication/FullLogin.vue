<template>
  <v-container id="login" class="fill-height justify-center" tag="section">
    <v-row justify="center" class="h-100vh" align="center">
      <v-col lg="11" sm="8" xl="7">
        <v-card class="elevation-4">
          <v-row>
            <v-col
              lg="7"
              class="bg-info d-none d-md-flex align-center justify-center"
            >
              <div class="d-none d-sm-block">
                <div class="d-flex align-center pa-10">
                  <div>
                    <h2 class="text-h4 text-white font-weight-medium">
                      Elegant Design with unlimited features, built with love
                    </h2>
                    <h6
                      class="
                        text-subtitle-1 text-high-emphasis
                        mt-4
                        text-white
                        font-weight-regular
                      "
                    >
                      Wrappixel helps developers to build organized and
                      well-coded admin dashboards full of beautiful and feature
                      rich modules.
                    </h6>
                    <v-btn
                      class="mt-6 text-capitalize"
                      size="x-large"
                      variant="outlined"
                      color="white"
                      >Learn More</v-btn
                    >
                  </div>
                </div>
              </div>
            </v-col>
            <v-col lg="5">
              <div class="pa-7 pa-sm-12">
                <img src="@/assets/images/logo-icon.png" />
                <h2 class="font-weight-bold mt-4 text--darken-2">Sign in</h2>
                <h6 class="text-subtitle-1 text-grey-darken-1">
                  Don't have an account?
                  <a
                    href="#/pages/fullregister"
                    class="text-primary text-decoration-none"
                    >Sign Up</a
                  >
                </h6>

                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  action="/dashboards/analytical"
                >
                  <v-text-field
                    v-model="corporation"
                    label="Corporación"
                    class="mt-4"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.email"
                    :rules="emailRules"
                    label="E-mail"
                    class="mt-4"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.password"
                    :counter="10"
                    :rules="passwordRules"
                    label="Password"
                    required
                    variant="outlined"
                    type="password"
                  ></v-text-field>

                  <div class="d-block d-sm-flex align-center mb-4 mb-sm-0">
                    <v-checkbox
                      v-model="checkbox"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="Remember me?"
                      required
                      hide-details
                    ></v-checkbox>
                    <div class="ml-auto">
                      <a
                        href="javascript:void(0)"
                        class="text-primary text-decoration-none"
                        >Forgot pwd?</a
                      >
                    </div>
                  </div>
                  <v-btn
                    @click="login"
                    color="secondary"
                    block
                    class="mr-4"
                    submit
                    >Sign In</v-btn
                  >
                </v-form>
                <div class="text-center mt-6">
                  <div class="d-flex align-center justify-center gap-2">
                    <v-btn icon color="secondary">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon color="primary">
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import graphApi from "@/services/api/graphApi";
export default {
  data() {
    return {
      loading: false,
      user: { email: "", password: "" },
      corporation: null,
    };
  },
  created() {
    if (this.$store.state.authModule.isTokenSet) {
      this.$router.push({ name: "dashboard" });
    }
  },
  methods: {
    login() {
      let user = this.user;
      let corporation = this.corporation;
      // this.loading = true;
      this.$store
        .dispatch("authModule/login", {
          user,
          corporation,
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch((error) => {
          console.log("error en login: ", error);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>