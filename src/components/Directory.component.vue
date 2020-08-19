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
import section_data from "@/dummy-data/sections.data.js";
export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      sections: section_data,
    };
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