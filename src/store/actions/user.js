const userIsAuthorized = () => {
    return {
        type: 'USER_ISAUTHORIZED'
    }
}

const userLeft = () => {
    return {
        type: 'USER_LEFT'
    }
}

export {
    userIsAuthorized,
    userLeft,    
}