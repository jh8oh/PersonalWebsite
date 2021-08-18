<template>
  <header>
    <router-link id="logo" to="/">
      <img @mouseover="setLogo(true)" @mouseleave="setLogo(false)" :src="logoIcon" alt="Logo" />
    </router-link>
    <input id="toggle-menu" type="checkbox" />
    <label id="menu-icon" for="toggle-menu" />
    <nav>
      <ul>
        <router-link
          tag="li"
          v-for="page in pages"
          :key="page.title"
          :to="page.url"
          :class="{ right: page.floatRight }"
        >
          {{ page.title }}
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import logo from "@/assets/ico/header/logo-white.png";
import logoHovered from "@/assets/ico/header/logo-accent.png";

@Component
export default class Header extends Vue {
  private logoIcon = logo;

  private pages = [
    { title: "About Me", url: "/about", floatRight: false },
    { title: "Portfolio", url: "/portfolio", floatRight: false },
    { title: "Contact Me", url: "/contact", floatRight: true },
  ];

  private setLogo(isLogoHovered: boolean) {
    if (isLogoHovered) {
      this.logoIcon = logoHovered;
    } else {
      this.logoIcon = logo;
    }
  }
}
</script>
