export const PageType = Object.freeze({ ENTITY: 0, GENERAL: 1 })

export const errorMessages = {
  isDefaultRequiredValue: 'This field is required',
  required: 'This field is required',
  isEmail: 'You have to type valid email',
  minLength: length => `You can not type less than ${length} characters`,
  maxLength: length => `You can not type more than ${length} characters`,
  equalsField: "These passwords don't match",
  equalTo: fieldName => `This field should match with "${fieldName}" field`,
  professions: 'Each profession can be chosen only one time.',
  maxFileSize: size => `You can't upload file more than ${size}Mb`,
  validUrl: 'Enter a valid URL.'
}
