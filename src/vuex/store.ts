import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import getters from './getter';

import recommendModule from '@/pageComponents/recommend';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        app,
        recommendModule
    },
    getters
});
