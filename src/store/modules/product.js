import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
    eventList: [],
    eventDetail: {},
    classID: 0
}

const mutations = {
    getProducts(state, payload) {
        state.classID += 1
        state.eventList = state.eventList.concat(payload.res)
    },
    getProDetail(state, payload) {
        state.eventDetail = payload.res
    }
}

const actions = {
    getProducts({ commit, state }) {
        request
            .get('http://datainfo.duapp.com/shopdata/getGoods.php?classID=' + state.classID + '&lineNumber=20')
            .use(jsonp)
            .end((err, res) => {
                console.log(res)
                if (!err) {
                    commit({
                        type: 'getProducts',
                        res: res.body
                    })
                }
            })
    },

    getProDetail({ commit, state }, payload) {
        request
            .get('http://datainfo.duapp.com/shopdata/getGoods.php?goodsID=' + payload.id)
            .use(jsonp)
            .end((err, res) => {
                console.log(res)
                if (!err) {
                    commit({
                        type: 'getProDetail',
                        res: res.body
                    })
                }
            })
    }
}

export default {
    state,
    mutations,
    actions
}