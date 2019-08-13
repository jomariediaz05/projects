<template>
  <div>
    <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto">
      <v-container></v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>
