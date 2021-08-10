<template>
  <div class="cards-container">
    <div class="cards-up-text">
      <span
        >All products are the result of our own development and production,
        which is based on more than 25 years of experience with access control
        systems, time & attendance systems and visitor control systems.</span
      >
    </div>
    <div class="cards">
      <div class="card" v-for="data in json" :key="data.id">
        <div class="card-img"><img src="../images/kamir3.png" alt="" /></div>
        <div class="card-description">
          <div class="card-title">{{ data.title }}</div>
          <div class="card-desc"><p>{{ data.desc }}</p></div>
          <div class="card-btn"><button>{{ data.button }}</button>
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
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 15px;
}
.cards-up-text span {
  text-align: center;
  width: 100%;
  font-size: 16px;
}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
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
  width: 100%;
  height: 40px;
  background: #dd3333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #fff;
  text-transform: uppercase;
}
.card-btn button {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dd3333;
  border: none;
  color: #fff;
  font-size: 20px;
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
@media only screen and   (max-device-width: 1024px) {
   .card {
      flex: 0 0 350px;
    }
     .card-desc  {
      height:200px;
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
    .cards-up-text {
      width: 95%;
    }
}
</style>
