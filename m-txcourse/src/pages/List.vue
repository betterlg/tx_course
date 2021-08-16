<template>
  <div class="container">
    <page-header :backIconShow="true" :listIconShow="false"></page-header>
    <list-tab :fieldData="fieldData"></list-tab>
    <list-scroll-wrapper :courseData="courseData"></list-scroll-wrapper>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import { findItemIndex } from "utils/tools";

import PageHeader from "components/Header";
import ListTab from "components/ListTab";
import ListScrollWrapper from "components/ScrollWrapper/List";

import ListModel from "models/List";

const listModel = new ListModel();

export default {
  name: "ListPage",
  components: {
    PageHeader,
    ListTab,
    ListScrollWrapper,
  },
  data() {
    return {
      fieldData: [],
      courseData: [],
      currentTabIndex: -1,
    };
  },
  computed: {
    ...mapState(["field", "tabIndex"]),
  },
  async mounted() {
    await this.getCourseFields();
    this.getCourses(this.field);
    this.currentTabIndex = this.tabIndex;
    this.changeTabIndex(findItemIndex(this.fieldData, this.field) + 1);
  },
  activated() {      //生命周期函数激活
    if (this.currentTabIndexd !== this.tabIndex) {
      this.currentTabIndex = this.tabIndex;
      this.changeTabIndex(findItemIndex(this.fieldData, this.field) + 1);
    }
  },
  methods: {
    ...mapMutations(["changeTabIndex"]),
    async getCourseFields() {
      const data = await listModel.getCourseFields();
      this.fieldData = data.result;
    },
    async getCourses(field) {
      const data = await listModel.getCourses(field);
      this.courseData = data.result;
    },
    findFieldIndex(field) {
      return this.fieldData.findIndex((item) => item.field === field) + 1;
    },
  },
  watch: {
    field() {
      this.getCourses(this.field);
    },
  },
};
</script>

<style lang="scss" scoped></style>