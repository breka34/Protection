<template>
  <div class="contact-cards">
    <h2>Ostali kontakti</h2>
    <div class="cards">
      <div
        class="card"
        v-match-heights="{
          el: ['.card'],
        }"
      >
        <div class="card-title">
          <h3>Centrala</h3>
        </div>
        <div class="card-info">
          <p>
            <b-icon-telephone class="b-icon contact"></b-icon-telephone> +387 39
            700 700
          </p>
          <p>
            <b-icon-telephone class="b-icon contact"></b-icon-telephone> +387 39
            703 415
          </p>
        </div>
      </div>
      <div
        class="card"
        v-match-heights="{
          el: ['.card'],
        }"
      >
        <div class="card-title">
          <h3>Prodaja</h3>
        </div>
        <div class="card-info">
          <p>
            <b-icon-telephone class="b-icon contact"></b-icon-telephone> 387 39
            700 702
          </p>
          <p>
            <b-icon-telephone class="b-icon contact"></b-icon-telephone> +387 39
            700 703
          </p>
        </div>
      </div>
      <div
        class="card"
        v-match-heights="{
          el: ['.card'],
        }"
      >
        <div class="card-title">
          <h3>Servis</h3>
        </div>
        <div class="card-info">
          <p>
            <b-icon-telephone class="b-icon contact"></b-icon-telephone> +387 39
            700 704
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 680px) {
 .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card {
  margin-top: 5px;
}

}
.contact-cards h2 {
  border-bottom: 1px solid #db2728;
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 29px;
}
.contact-cards {
  max-width: 1344px;
  margin: 0 auto;
  /* background: rgba(128, 128, 128, 0.185); */
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
}
.cards {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.card {
  /* padding: 10px; */
  border-radius: 10px;
  width: 250px;
}
.card-title {
  background: #db2728;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 60px;
  text-transform: uppercase;
}
.card-title h3 {
  font-size: 24px;
  font-weight: 600;
}
.card-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.card-info p {
  font-size: 18px;
  border-radius: 20px;
  background: rgba(128, 128, 128, 0.151);
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.b-icon {
  margin-right: 7px;
  height: 24px;
  width: 24px;
  color: #666666;
  margin-left: 2px;
}
</style>
