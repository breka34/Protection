<template>
  <div class="content__width" id="news_section">
    <div class="news_container">
      <div class="news_headline__container">
        <h3>Novosti</h3>
      </div>
      <div class="accordion" role="tablist">
        <b-card
          no-body
          class="mb-1"
          v-for="singleNews in news"
          :key="singleNews.id"
        >
          <b-card-header header-tag="header" class="p-1" role="tab">
            <div block variant="info">
              <h3>{{ singleNews.title }}</h3>
              <div class="description__text">
                {{ singleNews.description }}
                <span
                  v-b-toggle="'accordion-' + singleNews.id"
                  class="expand__link"
                  ><span class="when-open">Prikazi manje</span
                  ><span class="when-closed">Prikazi vise</span>
                </span>
              </div>
            </div>
          </b-card-header>
          <b-collapse
            :id="'accordion-' + singleNews.id"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>{{ singleNews.bigDescription }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
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
.news_container {
  max-width: 1024px;
  margin: 48px auto;
  padding: 24px;
}
.news_container .card-header.p-1 {
  background-color: #fff;
}
.news_container .card.mb-1 {
  box-shadow: 0 2px 9px 0 rgb(0 0 0/15%);
  margin: 12px 0px;
}
.card-body {
  border-bottom: 1px solid #d3d3d3;
}
.news_container .card-text {
  font-size: 15px;
}
.news_headline__container {
  text-align: center;
  padding: 12px 0px;
  font-size: 1.125rem;
}
.card-header.p-1 h3 {
  font-size: 1.125rem;
}
.card-header.p-1 {
  padding: 1.25rem !important;
}
.expand__link {
  color: steelblue;
}
.expand_link:hover {
  cursor: pointer;
  text-decoration: underline;
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
.description__text {
  font-size: 15px;
}
@media screen and (min-width: 1024px) {
  .card-header.p-1 h3 {
    font-size: 1.5rem;
  }
}
</style>
