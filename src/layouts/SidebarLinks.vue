<template>
  <div id="sidebar-links">
    <ul>
      <li v-for="link in links" :key="link.title">
        <a :href="link.to">
          <img
            @mouseover="link.hoverIcon.setIcon(true)"
            @mouseleave="link.hoverIcon.setIcon(false)"
            :src="link.hoverIcon.icon"
          />
        </a>
        <span class="body-2">{{ link.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import sidebarLinks from "@/ts/content/layouts/sidebar-links";

@Component
export default class SidebarLinks extends Vue {
  private links = sidebarLinks;
}
</script>
