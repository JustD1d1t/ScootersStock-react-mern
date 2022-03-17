export const createSearchParamsString = (data) => {
  const params = new URLSearchParams();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key].forEach((element) => {
        if (params.get(key.toLowerCase())) {
          const existingParam = params.get(key.toLowerCase());
          const newParam = `${existingParam}.${element}`;
          params.set(key.toLowerCase(), newParam);
        } else {
          params.set(key.toLowerCase(), element);
        }
      });
    } else if (data[key]) {
      params.set(key.toLowerCase(), data[key]);
    }
  });
  return params.toString();
};
