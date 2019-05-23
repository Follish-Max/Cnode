function list(state={
    data:[],
    loading: true
}, action) {
    switch (action.type) {
        case "LIST_UPDATE":
            return {
                loading: true,
                data: state.data
            }
        case "LIST_UPDATE_SUCC":
            return {
                loading: false,
            data: action.data.data
            }
        case "LIST_UPDATE_ERROR":
            return {
                loading: false,
                data: []
            }
        default:
            return state
    }

}
export default list