const changeStatus = ({status, login, register}) => {
    login = login === undefined ? status.login : login;
    register = register === undefined ? status.register : register;
    return {login, register};
};

export {
    changeStatus
};
