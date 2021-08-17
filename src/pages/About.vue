<template>
  <div id="about" class="page">
    <div id="about-content" class="page-content">
      <h1>About Me</h1>
      <section id="intro">
        <img src="../assets/img/about/profile-pic.jpg" alt="Profile Picture" />
        <p>
          Hello! I'm Ji Ho Oh (오지호) but I also go by Jay. I'm a 3rd-year
          undergrad at the University of Waterloo.<br /><br />
          I like creating user-facing software mostly because I want the things
          I make to look
          <span><em>a e s t h e t i c</em></span
          >. This has led to me building websites, Android applications, and
          games. At the moment, I am focusing on learning new libraries and
          frameworks over specializing in one specific aspect. However, I am
          also looking for a field that might capture my interest and allow me
          to dive deeper.<br /><br />Aside from coding, my hobbies include
          playing video games, reading manga, and world-building.
        </p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <div id="experience-content">
          <ul id="timeline">
            <div class="navigation-bar-scroll-wrapper">
              <h4 class="navigation-bar-content">
                <li
                  v-for="experience in experiences"
                  :key="experience.id"
                  @click="activeExperience = experience"
                  :class="{ active: activeExperience === experience }"
                >
                  {{ experience.employer }}
                </li>
              </h4>
            </div>
          </ul>
          <transition name="flicker" mode="out-in">
            <ExperienceCard
              :key="activeExperience.id"
              :activeExperience="activeExperience"
            />
          </transition>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ExperienceCard from "@/components/about/ExperienceCard.vue";
import Footer from "@/layouts/Footer.vue";
import experiences from "@/ts/content/about/experience";

@Component({
  components: { ExperienceCard, Footer },
})
export default class About extends Vue {
  private experiences = experiences;
  private activeExperience = experiences[0];
}
</script>
