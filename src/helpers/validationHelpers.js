const isValidName = name => true; //later here would be RegExp

const isValidEmail = email => true; //later here would be RegExp

const isValidPassword = password => true; //later here would be RegExp

const isValidConfirmPassword = ({password, confirmPassword}) => password === confirmPassword;

export {
    isValidName,
    isValidEmail,
    isValidPassword,
    isValidConfirmPassword
};
