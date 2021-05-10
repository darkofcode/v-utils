export interface formDataInterface {
  toJson: { (formData: FormData): { [key]: any } };
  toFormData: { ([key]: any): FormData };
}

declare const formData: formDataInterface;

export { formData };
