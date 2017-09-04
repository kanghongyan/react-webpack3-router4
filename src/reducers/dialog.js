import { UPDATE_DIALOG } from '../actions/dialog'
import { Map } from 'immutable'

function dialog(state = Map({ isShow: false, msg: '' }), action) {
    switch (action.type) {
        case UPDATE_DIALOG:

            console.log(action.payload)

            return state.set('isShow', action.payload.isShow)
                .set('msg', action.payload.msg);
        default:
            return state
    }
}

export default dialog