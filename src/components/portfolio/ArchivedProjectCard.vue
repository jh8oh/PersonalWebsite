<template>
  <div class="archived-project-card">
    <div class="archived-project-card-heading">
      <h4>{{ project.title }}</h4>
      <ul class="archived-project-card-links">
        <li v-for="link in project.links" :key="link.title">
          <a :href="link.to" target="_blank">
            <img
              @mouseover="link.hoverIcon.setIcon(true)"
              @mouseleave="link.hoverIcon.setIcon(false)"
              :src="link.hoverIcon.icon"
            />
          </a>
        </li>
      </ul>
    </div>
    <p v-html="project.description" />
    <ul class="archived-project-card-tags">
      <li v-for="tag in project.tags" :key="tag"><code>{{ tag }}</code></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ArchivedProjectCard extends Vue {
  @Prop({ required: true, type: Object }) readonly project!: object;
}
</script>
