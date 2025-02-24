export const required = value => value ? undefined : 'Required'

const maxLength = max => value => value && value.length > max ? `Max length ${max} symbols` : undefined 

export const maxLength10 = maxLength(10);