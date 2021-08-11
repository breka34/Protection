<template>
  <div class="news-container">
    <div class="latest-news">
      <h3>Latest news</h3>
    </div>
    <div class="news-cards">
      <div class="news-card" v-for="item in news" :key="item.id">
        <div class="news-img">
          <img src="../images/kamir2.png" />
        </div>
        <div class="card-text">
          <div class="news-title">
            <h2>{{ item.title }}</h2>
          </div>
          <div class="news-desc">
            <span>{{ item.desc }}</span>
          </div>
          <div class="news-btn">
            <button>{{ item.button }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import news from "../assets/news.json";
export default {
  data() {
    return {
      news,
    };
  },
};
</script>

<style>
.news-btn button {
  width: 100%;
  background: rgba(128, 128, 128, 0.795);
  border: none;
  color: #fff;
  padding: 12px;
  font-size: 18px;
}
.news-title h2 {
  color: #dd3333;
  font-size: 18px;
  font-weight: 700;
}
.latest-news {
  width: 100%;
  padding: 48px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}
.latest-news:before {
  content: "";
  position: absolute;
  left: 60;
  bottom: 35px;
  height: 1px;
  width: 220px;
  border-bottom: 2px solid red;
}
.news-container {
  width: 100%;
}
.news-cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.news-card {
  flex: 0 0 400px;
  margin: 10px;
}

.news-img img {
  width: 100%;
}
/* media */

@media only screen and (min-device-width: 320px) and (max-device-width: 1023px) {
  .news-cards {
    display: grid;
    grid-template-columns: repeat(1, 300px);
    justify-content: center;
    grid-gap: 20px;
  }
}
</style>
