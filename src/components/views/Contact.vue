<template>
  <div class="contact">
    <div class="contact-title">
      <h1>Kontakt</h1>
    </div>
    <main class="mobile">
      <!-- <div class="main-wrapper"> -->
      <div class="contact-left">
        <aside class="aside"
        v-match-heights="{
            el: ['.aside'],
          }"
        >
        
          <div class="general-title">
            <h2>
              Osnovne Informacije
            </h2>
          </div>
          <div class="info-wrapper">
            <!-- <div class="contact-info">
          Radno vrijeme: <br />Ponedjeljak – Petak: <br />08h – 16h <br />
Subota:08h – 12h
        </div> -->
            <div class="contact-info">
              <b-icon-signpost class="b-icon contact"></b-icon-signpost>
              <p>
                Obilazna cesta 23 <br />
                88220 Široki Brijeg, BiH
              </p>
            </div>
            <div class="contact-info">
              <b-icon-telephone class="b-icon contact"></b-icon-telephone>
              <p>+ 63 *** ***</p>
            </div>
            <div class="contact-info">
              <b-icon-envelope class="b-icon contact"></b-icon-envelope>
              <p>kamir@gmail.com</p>
            </div>
            <div class="contact-info">
              <b-icon-clock class="b-icon contact"></b-icon-clock>
            </div>
          </div>
          
        </aside>
      </div>
      <div class="contact-right">
        <div class="contact-text">
          <p>
            We have more than 25 years of experience in the field of developing
            and producing systems for access control, time & attendance control
            and monitoring of visitors. We develop, produce and provide
            high-quality solutions to meet every requirement. The result of our
            work is a few thousand operating systems throughout Europe. We
            supply our systems and install them in office buildings, financial
            institutions, factories, shopping centres, hospitals, etc. –
            basically anywhere where our customers need a basic or advanced
            access control and a time & attendance system. What separates us
            from our competitors is that we develop and produce all our software
            and hardware. The Black Line enables us to continue achieving
            improvements in the area of quality and efficiency that results in a
            reduction of costs, which is a particularly important information
            for our customers. The philosophy “The client comes first” is still
            central to our business model – this means that we are able to
            provide services of the highest quality to our clients.
          </p>
        </div>
      </div>
      <!-- </div> -->
    </main>

    <!-- <div> -->
    <ContactCards />
    <Maps />
    <!-- </div> -->
  </div>
</template>

<script>
import ContactCards from "./ContactCards.vue";
import Maps from "./Maps.vue";
export default {
  components: {
    ContactCards,
    Maps,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 680px) {
  .mobile {
    display: flex;
    flex-direction: column;
  }
}

.contact-left {
  /* grid-area: menu; */
  background: #ffefef;
  min-width: 220px;
}
.contact-right {
}

.general-title h2 {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  background: #db2728;
  color: #fff;
  text-transform: uppercase;
}
.contact-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: #db2728;
}
.contact-title h1 {
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}
main {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;

  /* display: grid;
  grid-template-areas:
    "header header header header header header"
    "menu main main main right right"
    "menu footer footer footer footer footer";
  grid-gap: 10px; */
}
.contact-text {
  width: 95%;
  margin: 0 auto;
}
.contact-text p {
  font-weight: 300;
  line-height: 2.3rem;
  font-size: 16px;
}
.b-icon {
  height: 28px;
  width: 28px;
  color: rgb(255, 0, 0);
}
.contact-info {
  font-size: 17px;
  /* line-height: 2.3rem; */
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  padding: 3px;
}
.contact-info p {
  font-size: 18px;
  margin-left: 5px;
}
.contact {
  max-width: 1344px;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column; */
}
.info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
