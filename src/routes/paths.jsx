function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOT_ADMIN = '/admin';
const ROOT_AUTH = '/auth';

export const PATH_AUTH = {
    root : ROOT_AUTH,
    login : path(ROOT_AUTH, '/login'),
    forgotpassword : path(ROOT_AUTH, '/forgotpassword'),
    resetpassword : path(ROOT_AUTH, '/resetpassword'),
}

export const PATH_COMMON = {
    maintenance : '/maintenance',
    page404 : '/404',
}

export const PATH_ADMIN = {
    root : ROOT_ADMIN,
    apprisalCycle : {
        list : path(ROOT_ADMIN, '/apprisalcycle'),
        add : path(ROOT_ADMIN, '/apprisalcycle/add'),
        view : path(ROOT_ADMIN, '/apprisalcycle/view'),
    },
}