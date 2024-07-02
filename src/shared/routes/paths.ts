const ROOTS = {
    AUTH: '/auth',
    ADMIN: '/admin'
}

export const AUTH_PATH = {
    SIGN_IN: `${ROOTS.AUTH}/sign-in`,
    FORGOT_PASSWORD: `${ROOTS.AUTH}/forgot-password`
}

export const ADMIN_PATH = {
    DASHBOARD: `${ROOTS.ADMIN}/dashboard`,
    USERS: `${ROOTS.ADMIN}/users`,
    PROJECTS: `${ROOTS.ADMIN}/projects`,
    TASKS: `${ROOTS.ADMIN}/tasks`,
    INVOICES: `${ROOTS.ADMIN}/invoices`
}