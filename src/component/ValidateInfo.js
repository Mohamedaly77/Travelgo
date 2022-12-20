function ValidateInfo(values) {
  let errors = {};
  if (!values.username.trim()) {
    errors.username = "Username is required";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  return errors;
}

export default ValidateInfo;
