<template>
  <div class="list-icon">
    <div class="link-wrap" @click="onRouteTo('all')">
      <i class="iconfont icon-cc-list" v-show="listIconShow"></i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "HeaderListIcon",
  props: {
    listIconShow: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  methods: {
    ...mapMutations(["selectField"]),
    onRouteTo(field) {
      this.selectField(field);
      this.$router.push("./list");
    },
  },
};
</script>

<style lang="scss" scoped>
.list-icon {
  display: flex;
  width: 0.44rem;
  height: 0.44rem;
  justify-content: center;
  align-items: center;
  color: #000;

  .iconfont {
    font-size: 0.25rem;
  }
}
</style>