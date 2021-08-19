<template>
  <div class="form__container">
    <b-form>
      <b-form-group
        id="input-group-1"
        label="E-Mail adresa:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="E-Mail adresa"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Lozinka:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Lozinka"
          required
        ></b-form-input>
      </b-form-group>
      <div class="register__link__container">
        Nemate racun? Registrirajte se
        <router-link :to="'/'">ovdje</router-link>
      </div>
      <div class="btn__container">
        <b-button type="submit">Prijava</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>
.form__container {
  max-width: 600px;
  margin: 0 auto;
  padding: 48px;
}
.register__link__container {
  padding: 0px 0px 12px 0px;
}
.btn__container {
  width: 100%;
  text-align: center;
}
.btn__container .btn {
  background: transparent;
  color: #262626;
}
.btn__container .btn:hover {
  background: rgba(211, 211, 211, 0.4);
}
</style>