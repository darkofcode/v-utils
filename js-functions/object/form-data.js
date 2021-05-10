import keysIn from "lodash/keysIn";

const formData = {
  toJson: function (formData) {
    let obj = {};
    formData.forEach((v, k) => {
      obj[k] = v;
    });
    return obj;
  },
  toFormData: (obj) => {
    let formData = new FormData();
    keysIn(obj).forEach((k) => {
      formData.append(k, obj[k]);
    });
    return formData;
  },
};

export { formData };
