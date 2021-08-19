<template>
  <footer
    class="footer"
    v-match-heights="{
      el: ['.footer'],
    }"
  >
    <div class="footer-center">
      <div class="footer-contact">
        <h4>Kontakt</h4>
        <div class="foot-contact">
          <p>
            <b-icon-signpost class="b-icon"></b-icon-signpost> Široki Brijeg,
            BiH
          </p>
          <p>
            <b-icon-telephone class="b-icon"></b-icon-telephone> + 63 *** ***
          </p>
          <p>
            <b-icon-envelope class="b-icon"></b-icon-envelope> kamir@gmail.com
          </p>
        </div>
      </div>
      <div class="footer-products">
        <h4>Proizvodi</h4>
        <ul>
          <li>Protuprovala</li>
          <li>Videonadzor</li>
          <li>Vatrodojava</li>
          <li>Evidencija RV</li>
          <li>Automatizacija</li>
        </ul>
      </div>
      <div class="footer-company">
        <h4>Informacije</h4>
        <div class="info">
          <p>Vijesti</p>
          <p>O nama</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (min-width: 1344px) {
  .b-icon {
    font-size: 28px;
  }
  .foot-contact,
  ul,
  .info {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
  }
  ul {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  ul li {
    padding: 5px;
  }

  .footer-contact,
  .footer-products,
  .footer-company {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
  }
}

.footer-center {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: row;
}
@media only screen and (max-width: 680px) {
  .b-icon {
    font-size: 22px;
  }
  .footer-center {
    flex-direction: column;
  }
  .footer-contact,
  .footer-products,
  .footer-company {
    border-bottom: 1px solid rgba(128, 128, 128, 0.767);
    /* margin: 6px; */
    /* padding: 3px; */
  }
  ul li {
    line-height: 30px;
  }
}

/* .footer-products, .footer-contact,  .footer-company{
        padding: 3px;
        border-right: 1px solid rgba(128, 128, 128, 0.767);
}  */
.b-icon {
  color: rgba(128, 128, 128, 0.993);
}

.footer-products ul li,
p {
  font-size: 18px;
  /* line-height: 30px; */
}
ul {
  list-style-type: none;
}
.footer h4 {
  font-size: 22px;
}
.footer {
  background: #000000;
  width: 100%;
  padding: 10px;
  /* min-height: 400px; */
  color: #fff;
}
</style>
