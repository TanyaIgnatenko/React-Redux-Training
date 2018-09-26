const isValidName = name => /^[a-zA-Z]\S\S+$/.test(name);

const isValidEmail = email => /^\w{3,}@(a-zA-Z)+\.(a-zA-Z)+$/.test(email);

const isValidPassword = password => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);

const isValidConfirmPassword = ({password, confirmPassword}) => password === confirmPassword;

export {
    isValidName,
    isValidEmail,
    isValidPassword,
    isValidConfirmPassword
};
