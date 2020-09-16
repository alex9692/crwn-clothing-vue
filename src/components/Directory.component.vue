<template>
  <div class="directory-menu">
    <MenuItem
      v-for="section in sections"
      :key="section.id"
      :title="section.title"
      :imageUrl="section.imageUrl"
      :size="section.size"
      :linkUrl="section.linkUrl"
    />
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem.component.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MenuItem,
  },
  computed: {
    ...mapGetters({
      sections: "directory/getSectionData",
    }),
  },
};
</script>

<style lang="scss" scoped>
.directory-menu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>