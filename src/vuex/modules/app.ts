import { SET_SYSTEM_INFO, SET_BOUNDING_RECT } from '../mutation-types';
export default {
    namespaced: true,
    state: {
        systemInfo: {},
        boundingRect: {} //右上角胶囊位置信息
    },
    mutations: {
        [SET_SYSTEM_INFO](state, payload) {
            state.systemInfo = payload;
        },
        [SET_BOUNDING_RECT](state, payload) {
          state.boundingRect = payload;
        }
    },
    actions: {
      [SET_SYSTEM_INFO]({commit}, systemInfo) {
        commit(SET_SYSTEM_INFO, systemInfo);
      },
      [SET_BOUNDING_RECT]({commit}, boundingRect) {
        commit(SET_BOUNDING_RECT, boundingRect);
      }
    }
};
