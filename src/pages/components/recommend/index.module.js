import { callApi } from "@/utils";

export default {
  namespaced: true,
  state: {
    per_page: 10
  },
  mutations: {
  },
  actions: {
    async queryListByPage({commit, state}, page) {
      return  await callApi('homePageList', { page, per_page: state.per_page, category: 'recommend' })
    }
  }
};
