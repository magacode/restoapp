import { UPDATE_PAGE } from '../constants';

const setPage = (page) => {
    return {
        type: UPDATE_PAGE,
        payload: page,
    }
}

export { setPage };