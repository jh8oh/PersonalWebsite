<template>
  <div class="archived-project-card">
    <h4>{{ project.title }}</h4>
    <ul>
      <li v-for="link in project.links" :key="link.title">
        <a :href="link.to">
          <img
            @mouseover="link.hoverIcon.setIcon(true)"
            @mouseleave="link.hoverIcon.setIcon(false)"
            :src="link.hoverIcon.icon"
          />
        </a>
      </li>
    </ul>
    <p v-html="project.description" />
    <ul>
      <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
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
