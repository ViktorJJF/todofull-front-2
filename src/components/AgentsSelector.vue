<template>
  <div>
    <select
      style="width: auto"
      @change="onSelectedAgent($event)"
      :value="telefonoId"
    >
      <option value="Sin valor">Sin agente</option>
      <option
        v-for="telefono in telefonos"
        :value="telefono._id"
        :key="telefono._id"
      >
        {{ telefono.agenteId.nombre }} ({{ telefono.numero }})
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    telefonoId: {
      type: String,
      default: "Sin valor",
    },
  },
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
        (telefono) => telefono.active == true && telefono.agenteId != null
      );
    },
    onSelectedAgent(event) {
      const agent = this.telefonos.find(
        (telefono) => telefono._id == event.target.value
      );
      this.$emit("onSelectedAgent", agent);
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