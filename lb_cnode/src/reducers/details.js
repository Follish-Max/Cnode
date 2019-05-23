function details(state={
    data: {
        author: {
            loginname: "",
            avatar_url: ""
        },
        replies: [],
        reply_count: 0,
        create_at: "",
        good: true
    },
    loading: true
}, action) {
    switch (action.type) {
        case "DETAILS_UPDATE":
            return {
                data: state.data,
                loading: true
            }
        case "DETAILS_UPDATE_SUCC":
            return {
                loading: false,
                data: action.data.data
            }
        case "DETAILS_UPDATE_ERR":
            return {
                loading: false,
                data: {
                    author: {
                        loginname: "",
                        avatar_url: ""
                    },
                    replies: [],
                    reply_count: 0,
                    create_at: "",
                    good: true
                }
            }
        default:
            return state
    }

}
export default details