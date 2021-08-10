<template>
  <!-- <nav> -->
  <div class="navigation-nav">
  <b-navbar  toggleable="lg" class="navnav" >
    <b-navbar-brand class="logo" href="#">Logo</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="nav-boostrap">
        <b-nav-item-dropdown text="Solutions" right >
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
         <b-nav-item-dropdown text="Products" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
         <b-nav-item-dropdown  text="Software" right >
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
         <b-nav-item-dropdown text="Contact" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
         <div class="nav-btn">
          <div class="support">
            <button class="btn-support">
              <font-awesome-icon
                class="icon-phone"
                :icon="['fas', 'phone']"
              />Support
            </button>
          </div>
          <div class="downloads">
            <button class="btn-download">
              <font-awesome-icon
                class="icon-download"
                :icon="['fas', 'download']"
              />Downloads
            </button>
          </div>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
 <!-- </nav> -->
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>

nav {
  min-height: 80px;
}
.navigation-nav {
 min-height: 80px;
}
.logo {
  height: 50px;
}
.navnav{
  width: 100%;
  /* height: 60px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav-item:after{
  display:block;
  content: '';
  border-bottom: solid 2px rgb(255, 0, 0);  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
.nav-item:hover:after { transform: scaleX(0.9);
 }
.nav-item {
  height: 50px;
  /* napomena!! */
 width: 120px;
  text-transform: uppercase;
}
.dropdown-menu{
 transition: all  0.9s;
 
 /* width: 20px; */
 /* transform: translate3d(-30px, 15px, 0px); */
 -ms-transform: skewY(30deg); /* IE 9 */
  transform: skewY(30deg);
}

 
.nav-boostrap {
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* height: 180px; */
}






.nav-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.btn-support {
  background: rgba(128, 128, 128, 0.219);
    width: 120px;


}
.btn-download {
  background: rgba(128, 128, 128, 0.473);
  margin-left: 7px;
  width: 145px;
}
.icon-phone, .icon-download {
    color: rgb(255, 0, 0);
    margin-right: 3px;
    font-size: 18px;
}
.btn-support,
.btn-download {
  border: none;
  height: 45px;
    height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-transform: uppercase;
}


</style>
