import { SET_CURRENT_PAGE } from '../constants';

const setPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page,
    }
}

export { setPage };