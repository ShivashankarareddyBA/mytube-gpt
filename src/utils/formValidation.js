export const checkValidData = (email, password, fullName, phoneNumber) => {
  const isEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // const isFullNameValid = /^[a-zA-Z\s]+$/.test(fullName);
  // const isPhoneNumberValid = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(phoneNumber);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  // if (!isFullNameValid) return "Enter a valid name";
  // if (!isPhoneNumberValid) return "Enter a valid phone number";

  return null;
};
