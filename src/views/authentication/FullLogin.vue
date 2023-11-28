<template>
  <div class="w-[1440px] h-[900px] px-[135px] pt-[175px] pb-[90px] bg-sky-50 flex-col justify-end items-center gap-10 inline-flex">
      <div class="self-stretch shadow justify-start items-start inline-flex">
          <div class="w-[585px] h-[550px] p-2.5 bg-white flex-col justify-center items-center gap-2.5 inline-flex">
              <div class="flex-col justify-start items-center gap-8 flex">
                  <div class="w-[72px] h-[72px] justify-center items-center inline-flex">
                      <img class="w-[72px] h-[72px]" src="@/assets/images/login/icono.png" />
                  </div>
                  <div class="flex-col justify-start items-center gap-4 flex">
                    <div class="flex-col justify-start items-start gap-2 flex">
                        <div class="w-[383px] h-12 px-4 bg-neutral-50 rounded-lg border border-gray-200 justify-between items-center inline-flex">
                            <input type="email" v-model="user.email" class="w-full h-full bg-transparent focus:outline-none text-gray-500 text-sm font-normal font-['Inter'] leading-[18px]" placeholder="Email" />
                            <div class="w-3.5 h-3.5 relative">
                                <img src="@/assets/images/login/envelope.svg"/>
                            </div>
                        </div>
                    </div>
                      <div class="flex-col justify-start items-start gap-2 flex">
                          <div class="w-[383px] h-12 px-4 bg-neutral-50 rounded-lg border border-gray-200 justify-between items-center inline-flex">
                              <input type="password" v-model="user.password" class="w-full h-full bg-transparent focus:outline-none text-gray-500 text-sm font-normal font-['Inter'] leading-[18px]" placeholder="Contraseña" />
                              <div class="w-3.5 h-3.5 relative">
                                <img src="@/assets/images/login/lock.svg"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="flex-col justify-start items-center gap-4 flex">
                      <button @click="login" class="self-stretch h-12 p-2.5 bg-blue-800 rounded-[5px] shadow flex-col justify-center items-center gap-2.5 flex">
                          <div class="justify-start items-center gap-2 inline-flex">
                              <div class="text-center text-gray-200 text-sm font-semibold font-['Inter']">
                                Iniciar Sesión
                              </div>
                          </div>
                        </button>
                      <div class="w-[383px] h-12 p-2.5 bg-white rounded-[5px] border border-gray-200 flex-col justify-center items-center gap-2.5 flex">
                          <div class="self-stretch justify-center items-center gap-2 inline-flex">
                              <div class="w-4 h-4 relative">
                                <img src="@/assets/images/login/google.svg"/>
                              </div>

                              <div class="text-center text-gray-900 text-sm font-normal font-['Inter'] leading-[18px]">Iniciar Sesión con Google</div>
                          </div>
                      </div>
                      <div class="w-[383px] h-12 p-2.5 bg-white rounded-[5px] border border-gray-200 flex-col justify-center items-center gap-2.5 flex">
                          <div class="self-stretch justify-center items-center gap-2 inline-flex">
                              <div class="w-4 h-4 relative">
                                <img src="@/assets/images/login/facebook.svg"/>
                              </div>
                              <div class="text-center text-gray-900 text-sm font-normal font-['Inter'] leading-[18px]">Iniciar Sesión con Facebook</div>
                          </div>
                      </div>
                      <div class="text-center text-blue-800 text-sm font-normal font-['Inter'] leading-[18px]">¿Olvidaste tu contraseña?</div>
                  </div>
              </div>
          </div>
          <div class="w-[585px] h-[550px] relative">
              <img class="w-[585px] h-[550px] left-0 top-0 absolute" src="@/assets/images/login/Rectangle-5017.png" />
              <div class="w-[585px] h-[550px] p-8 left-0 top-0 absolute bg-slate-800 bg-opacity-95 flex-col justify-end items-start gap-2.5 inline-flex">
                  <div class="flex-col justify-center items-start flex">
                      <div class="w-[219px] text-gray-200 text-2xl font-light font-['Inter']">Bienvenidos a</div>
                      <div class="w-[219px] text-gray-200 text-[32px] font-bold font-['Inter']">TodoFull</div>
                  </div>
              </div>
          </div>
      </div>
      <div class="self-stretch h-[45px] pb-[21px] justify-center items-start gap-[150px] inline-flex">
          <div class="self-stretch justify-start items-center gap-4 inline-flex">
              <div class="justify-start items-end gap-2 flex">
                  <div class="w-6 h-6 relative">
                    <img src="@/assets/images/login/home_pin.svg" />
                  </div>
                  <div class="text-blue-950 text-base font-normal font-['Inter']">TodoFull, 123 East, 17th Street, St. louis 10001,</div>
              </div>
              <div class="w-[341px] self-stretch justify-start items-end gap-4 flex">
                  <div class="text-blue-950 text-base font-normal font-['Inter']">Copyright © 2023 • Cigars People Company.</div>
              </div>
          </div>
          <div class="self-stretch flex-col justify-end items-start gap-4 inline-flex">
              <div class="justify-start items-center gap-[26px] inline-flex">
                  <div class="justify-start items-start gap-6 flex">
                      <div class="w-6 h-6 relative">
                          <div class="w-6 h-6 left-0 top-0 absolute">
                            <img src="@/assets/images/login/facebook-black-1.svg" />
                          </div>
                      </div>
                      <div class="w-6 h-6 relative">
                          <div class="w-6 h-6 left-0 top-0 absolute">
                            <img src="@/assets/images/login/twitter-black-1.svg" />
                          </div>
                      </div>
                      <div class="w-6 h-6 relative">
                          <div class="w-6 h-6 left-0 top-0 absolute">
                            <img src="@/assets/images/login/linkedin-black-1.svg" />
                          </div>
                      </div>
                      <div class="w-6 h-6 relative">
                          <div class="w-6 h-6 left-0 top-0 absolute"></div>
                          <img src="@/assets/images/login/youtube-color-1.svg" />
                      </div>
                      <div class="w-6 h-6 relative">
                          <div class="w-6 h-6 left-0 top-0 absolute"></div>
                          <img src="@/assets/images/login/instagram-black-1.svg" />
                      </div>
                      <div class="w-6 h-6 relative">
                          <div class="w-6 h-6 left-0 top-0 absolute"></div>
                          <img src="@/assets/images/login/googleplus-black-1.svg" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// import graphApi from "@/services/api/graphApi";
export default {
  data() {
    return {
      loading: false,
      user: { email: "", password: "" },
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
      // this.loading = true;
      this.$store
        .dispatch("authModule/login", user)
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

<style scoped lang="">
</style>