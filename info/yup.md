# Yup

## yup schema

```javascript
// use strict with string otherwise yup will try to convert it from ex. date | array to string
yup.string().strict(true);
```

```javascript
yub.object({
  duration: yup.number().typeError("must be positive").positive().required("required"),
  fromDate: yup.date().required("required"),
  toDate: yup
    .date()
    .required("required")
    .test("match", "", function (value) {
      const { path, parent, createError } = this;
      if (value.getTime() - parent.fromDate.getTime() < 0) {
        return createError({
          path,
          message: `must be greater than ${format(parent.fromDate, "dd/MM/yyy HH:mm")}`,
        });
      }
      return true; // otherwise server side not working
    }),
});
```
