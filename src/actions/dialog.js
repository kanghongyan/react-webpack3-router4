const UPDATE_DIALOG = 'UPDATE_DIALOG';

const isShowDialog = ({isShow, msg }) => {

    return {
        type: UPDATE_DIALOG,
        payload: {
            isShow,
            msg,
        }
    }
};

export {
    UPDATE_DIALOG,
    isShowDialog
}
