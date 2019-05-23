function user(state={
    data: {
        avatar_url: "",
        create_at: "",
        loginname: "",
        rencent_replies: [],
        recent_topics: [],
        score: ""
    },
    loading: true
}, action) {
    switch (action.type) {
        case "USER_UPDATE":
            return {
                data: state.data,
                loading: true
            }
        case "USER_UPDATE_SUCC":
            return {
                data: action.data.data,
                loading: false
            }
        case "USER_UPDATE_ERR":
            return {
                data: {
                    avatar_url: "",
                    create_at: "",
                    loginname: "",
                    rencent_replies: [],
                    recent_topics: [],
                    score: ""
                },
                loading: false
            }
        default:
            return state
    }

}
export default user