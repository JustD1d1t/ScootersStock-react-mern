export const createSearchParamsString = (data) => {
  console.log(data);
  const params = new URLSearchParams();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key].forEach((element) => {
        if (params.get(key.toLowerCase())) {
          const existingParam = params.get(key.toLowerCase());
          const newParam = `${existingParam}.${element}`;
          params.set(key, newParam);
        } else {
          params.set(key, element);
        }
      });
    } else if (data[key]) {
      params.set(key, data[key]);
    }
  });
  return params.toString();
};
