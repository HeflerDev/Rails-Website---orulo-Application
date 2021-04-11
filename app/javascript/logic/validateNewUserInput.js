const validateNewUserInput = (name, password) => {
  if (name.length === 0 && password.length === 0) {
    return false;
  }

  const pattern = /^[A-Za-z]\S+$/g;
  if (!pattern.test(name)) {
    return false;
  }
  return true;
};

export default validateNewUserInput;
