<template>
      <div class="main">
            <main-header/>
            <div class="container">
                  <slot/>
            </div>
      </div>
</template>

<script>
import MainHeader from "./Header.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MainHeader
  },

  computed: {
    ...mapGetters("global", {
      isLoggedIn: "isLoggedIn"
    })
  },
  created() {},
  methods: {}
};
</script>

<style>
</style>
