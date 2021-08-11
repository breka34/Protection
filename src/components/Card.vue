<template>
  <div
    class="card"
    v-match-heights="{
      el: ['.card-desc'],
    }"
  >
    <div class="card-img"><img src="../images/kamir3.png" alt="" /></div>
    <div class="card-description">
      <div class="card-title">{{ card.title }}</div>
      <div class="card-desc">
        {{ card.desc }}
      </div>
      <div class="card-btn">
        <button>{{ card.button }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<style scoped>
.card {
  max-width: 400px;
}
.card-desc {
  padding: 12px;
}
.card-img img {
  width: 100%;
  height: auto;
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
  margin: 0;
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
</style>