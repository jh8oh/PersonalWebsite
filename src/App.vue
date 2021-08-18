<template>
  <div id="app">
    <Header />
    <div id="content">
      <transition :name="transitionName" mode="in-out">
        <router-view />
      </transition>
    </div>
    <SidebarLinks v-if="isContent()" />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import Header from "@/layouts/Header.vue";
import SidebarLinks from "@/layouts/SidebarLinks.vue";

@Component({
  components: { Header, SidebarLinks },
})
export default class App extends Vue {
  private transitionName = "";

  @Watch("$route.name", { immediate: true, deep: true })
  onUrlChanged(to: string, from: string) {
    const routeIdMap = new Map([
      ["Home", 0],
      ["About", 1],
      ["Portfolio", 2],
      ["ContactMe", 3],
      ["NotFound", 4],
    ]);

    const toId = routeIdMap.get(to);
    const fromId = routeIdMap.get(from);

    if ((toId as number) > (fromId as number)) {
      this.transitionName = "page-slide-ltr";
    } else if ((toId as number) < (fromId as number)) {
      this.transitionName = "page-slide-rtl";
    } else {
      this.transitionName = "";
    }
  }

  isContent() {
    const routeName = this.$route.name;
    return !(routeName === "Home" || routeName === "NotFound");
  }
}
</script>

<style lang="scss" src="./scss/main.scss" />
