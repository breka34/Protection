<template>
  <b-navbar toggleable="lg" type="light" variant="light" :sticky="true">
    <b-navbar-brand href="#" class="afp__main__logo">
      All for<br />protection
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <div class="main_nav_bar">
        <b-navbar-nav>
          <b-nav-item href="#">Početna</b-nav-item>
          <b-nav-item-dropdown text="Proizvodi">
            <b-dropdown-item href="#">Protuprovala</b-dropdown-item>
            <b-dropdown-item href="#">Videonadzor</b-dropdown-item>
            <b-dropdown-item href="#">Vatrodojava</b-dropdown-item>
            <b-dropdown-item href="#">Evidencija RV</b-dropdown-item>
            <b-dropdown-item href="#">Automatizacija</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">Vijesti</b-nav-item>
          <b-nav-item href="#">O nama</b-nav-item>
          <b-nav-item href="#footer_section">Kontakt</b-nav-item>
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Pretraga proizvoda"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Pretraga</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </div>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content> User </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
};
</script>

<style>
.navbar-collapse {
  max-width: 1024px;
  margin: 0 auto;
}
#app .afp__main__logo {
  font-size: 36px;
  color: #627f9a;
  text-transform: uppercase;
  line-height: 36px;
  padding-left: 24px;
}
.navbar-light .main_nav_bar .navbar-nav .nav-link,
.navbar-light .main_nav_bar .navbar-nav .nav-link span {
  font-size: 18px;
  font-weight: 400;
  color: #262626;
}
</style>
