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
export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
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