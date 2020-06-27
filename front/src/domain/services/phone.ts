export const isPhoneNumber = (target: string) =>
  /^(\d{0,11}|\d{0,3}|\d{3}-\d{0,4}-\d{0,4})$/.test(target);
