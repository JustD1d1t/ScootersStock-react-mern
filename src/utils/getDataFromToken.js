export const getDataFromToken = (setValue, context) => {
  const {
    email,
    name,
    lastName,
    street,
    houseNumber,
    flatNumber,
    zipCode,
    phoneNumber,
    city,
    country,
  } = context.userData;
  setValue("name", name);
  setValue("lastName", lastName);
  setValue("street", street);
  setValue("houseNumber", houseNumber);
  setValue("flatNumber", flatNumber);
  setValue("zipCode", zipCode);
  setValue("phoneNumber", phoneNumber);
  setValue("city", city);
  setValue("country", country);
  if (email) setValue("email", email);
};
