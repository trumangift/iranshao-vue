import { SET_SYSTEM_INFO, SET_BOUNDING_RECT, USER_SIGN_IN } from '../mutation-types';
import { callApi } from "@/utils";
export default {
    namespaced: true,
    state: {
        systemInfo: {
          statusBarHeight: 0,
          screenHeight: 0
        },
        boundingRect: {
          bottom: 40,
          top: 40,
          left: 0,
        } //右上角胶囊位置信息
    },
    mutations: {
        [SET_SYSTEM_INFO](state, payload) {
            Object.assign(state.systemInfo, payload);
        },
        [SET_BOUNDING_RECT](state, payload) {
          Object.assign(state.boundingRect, payload);
        }
    },
    actions: {
      [SET_SYSTEM_INFO]({commit}, systemInfo) {
        commit(SET_SYSTEM_INFO, systemInfo);
      },
      [SET_BOUNDING_RECT]({commit}, boundingRect) {
        commit(SET_BOUNDING_RECT, boundingRect);
      },
      // 签到
      userSignIn({commit}, signIn) {
        try{
        const res =  callApi('createCheckin')
        return res;
        } catch(e) {
          console.log(e);
        }
      }
    }
};
