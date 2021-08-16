<template>
  <div class="list-tab">
    <!-- w100%  overflow-x: auto-->
    <div class="tab-wrapper">
      <!-- li.w * num -->
      <ul
        class="tab-list"
        ref="tabWrapper"
        :style="{ width: (fieldData.length + 1) * tabWidth + 'rem' }"
      >
        <tab-item
          :data="{ field_name: '全部课程', field: 'all' }"
          :index="0"
          :tabIndex="tabIndex"
          @onTabClick="onTabClick('all', 0)"
        ></tab-item>
        <!-- fieldData Object{field_name: xxx, field: xxx} -->
        <tab-item
          v-for="(item, index) of fieldData"
          :key="index"
          :index="index + 1"
          :data="item"
          :tabIndex="tabIndex"
          @onTabClick="onTabClick(item.field, index + 1)"
        ></tab-item>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import { scrollToPosition } from "utils/tools";

import TabItem from "./Item";

export default {
  name: "ListTab",
  props: {
    fieldData: Array,
  },
  components: {
    TabItem,
  },
  computed: {
    ...mapState(["tabIndex"]),
  },
  data() {
    return {
      tabWidth: 1.2,
    };
  },
  methods: {
    ...mapMutations(["selectField", "changeTabIndex"]),
    onTabClick(field, index) {
      this.selectField(field);
      this.changeTabIndex(index);
    },
  },
  watch: {
    tabIndex() {
      scrollToPosition(this.$refs.tabWrapper.children[this.tabIndex]);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-tab {
  height: 0.35rem;
  background-color: #fff;
  border-bottom: #eee;
  overflow: hidden;

  .tab-wrapper {
    height: 0.43rem;
    overflow-x: auto;
    overflow-y: hidden;

    .tab-list {
      height: 0.35rem;
    }
  }
}
</style>




