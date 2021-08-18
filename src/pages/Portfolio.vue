<template>
  <div id="portfolio" class="page">
    <div id="portfolio-content" class="page-content">
      <h1>Portfolio</h1>
      <section id="archive">
        <ul>
          <li v-for="project in archivedProjects" :key="project.id">
            <ArchivedProjectCard :project="project" />
          </li>
        </ul>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ArchivedProjectCard from "@/components/portfolio/ArchivedProjectCard.vue";
import Footer from "@/layouts/Footer.vue";
import archivedProjects from "@/ts/content/pages/portfolio/archived-projects";

@Component({ components: { ArchivedProjectCard, Footer } })
export default class Portfolio extends Vue {
  private archivedProjects = archivedProjects;
}
</script>
