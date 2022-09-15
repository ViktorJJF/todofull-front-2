<template>
  <select>
    <option v-for="telefono in telefonos" :key="telefono._id">
      {{ telefono.agenteId.nombre }} ({{ telefono.numero }})
    </option>
  </select>
</template>

<script>
export default {
  props: ["telefonoId"],
  data() {
    return {
      telefonos: [],
      search: "",
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize() {
      await Promise.all([this.$store.dispatch("telefonosModule/list")]);
      this.telefonos = this.$store.state.telefonosModule.telefonos.filter(
        (telefono) => telefono.active == true
      );
      this.telefonos = this.telefonos.filter(
        (telefono) => telefono.agenteId != null
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.caja {
  margin: 20px auto 40px auto;
  border: 1px solid #d9d9d9;
  height: 30px;
  overflow: hidden;
  width: 230px;
  position: relative;
}
select {
  background: transparent;
  border: none;
  font-size: 14px;
  height: 30px;
  padding: 5px;
  width: 250px;
}
select:focus {
  outline: none;
}

.caja::after {
  content: "\025be";
  display: table-cell;
  padding-top: 7px;
  text-align: center;
  width: 30px;
  height: 30px;
  background-color: #d9d9d9;
  position: absolute;
  top: 0;
  right: 0px;
  pointer-events: none;
}
</style>