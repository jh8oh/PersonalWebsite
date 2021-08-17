<template>
  <div id="portfolio" class="page">
    <div id="portfolio-content" class="page-content">
      <h1>Portfolio</h1>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/layouts/Footer.vue";

@Component({ components: { Footer } })
export default class Portfolio extends Vue {}
</script>
