<template>
  <div class="cards-container">
    <div class="cards-up-text headline__container">
      <div class="headline__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
    <div class="cards">
      <div class="card" v-for="data in json" :key="data.id">
        <div class="card-img"><img src="../images/kamir3.png" alt="" /></div>
        <div class="card-description">
          <div class="card-title">{{ data.title }}</div>
          <div class="card-desc">
            <p>{{ data.desc }}</p>
          </div>
          <div class="card-btn">
            <button>{{ data.button }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../assets/json.json";
export default {
  data() {
    return {
      json,
    };
  },
};
</script>

<style>
.card-description {
  border: 1px solid rgb(255, 0, 0);
}
.cards-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cards-up-text {
  width: 100%;
  background-color: #6c757d;
}
.headline__text {
  max-width: 900px;
  font-weight: 700;
  color: #fff;
  padding: 12px;
  text-align: center;
  margin: 0 auto;
}
.cards {
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 48px auto;
}
.card {
  flex: 0 0 500px;
  align-self: auto;

  margin: 10px;
}
.card-img img {
  width: 100%;
  height: 250px;
}
.card-title {
  padding: 12px;
  background: #dd3333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
}
.card-btn button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dd3333;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 12px;
}
.card-btn button:hover {
  background: #b20000;
}
.card-desc {
  min-height: 100px; /* overrides height and max-height */
  height: 130px;
  max-height: 200px;
  width: 100%;
  /* height: 130px; */
  display: flex;
  justify-content: center;
}
.card-desc p {
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  width: 90%;
}
/* media queries */
@media only screen and (max-device-width: 1024px) {
  .card {
    flex: 0 0 350px;
  }
  .card-desc {
    height: 200px;
  }
}
@media only screen and (max-width: 368px) {
  .card {
    flex: 0 0 300px;
  }
}
@media only screen and (min-device-width: 368px) and (max-device-width: 480px) {
  .card {
    flex: 0 0 350px;
  }
  .card-desc {
    height: 160px;
  }
  .card-desc p {
    line-height: 18px;
  }
  .card-img img {
    height: 200px;
  }
}
</style>
