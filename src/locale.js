/* eslint-disable max-len */
const APP_NAME = 'LadyBug404 Blog';

const ERROR_MSG = {
    CREATE: 'Can\'t create post. Check your internet connection and try again',
    EDIT: 'Can\'t edit post. Check your internet connection and try again',
    DELETE: 'Can\'t delete post. Check your internet connection and try again',
    LIKE: 'Can\'t toggle like. Check your internet connection and try again',
    LOGIN: 'Login has failed :с',
    SIGN_UP: 'Registering has failed :с'
};

const RULE = {
    NAME: 'Name has to be at least 3 characters (a-z,A-Z,0-9, _) long and must begin with a letter',
    EMAIL: 'Email has to be at least 3 characters (a-z,A-Z,0-9, _) long and must contain domain name of the server (ex., @gmail.com)',
    PASSWORD: 'Password has to be at least 6 characters (a-z,A-Z,0-9) long. Must contain at least one lower case letter, one upper case letter and one digit',
    CONFIRM_PASSWORD: 'Confirm password should match password'
};

const PAGE_TITLE = {
    LOGIN: 'Sign in',
    SIGN_UP: 'Sign up',
    POSTS: 'Post list',
    CREATE_POST: 'Create post',
    EDIT_POST: 'Edit post'
};

const BUTTON = {
    SIGN_IN: 'Sign in',
    SIGN_UP: 'Sign up',
    LOGOUT: 'Logout',
    DELETE: 'Delete',
    SAVE: 'Save'
};

const FIELD_LABEL = {
    NAME: 'Name',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    CONFIRM_PASSWORD: 'Confirm password'
};

const FIELD_PLACEHOLDER = {
    NAME: 'Name',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    CONFIRM_PASSWORD: 'Confirm password',
    TITLE: 'Enter title',
    CONTENT: 'Enter text'
};

export {
    APP_NAME,
    ERROR_MSG,
    RULE,
    PAGE_TITLE,
    BUTTON,
    FIELD_LABEL,
    FIELD_PLACEHOLDER
};
