import * as yup from 'yup'

/** паттерн для емейла */
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

/** cсхема для логина */
export const loginSchema: any = yup.object().shape({
  email: yup
    .string()
    .required('введите почту, указанную при регистрации')
    .email('введите почту в правильном формате')
    .matches(emailRegex, 'формат почты неверный'),
  password: yup.string().required('введите пароль')
})
