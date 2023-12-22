import { yupResolver } from '@hookform/resolvers/yup'
import axios, { isAxiosError } from 'axios'
import Cookies from 'js-cookie'
import Router from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import MagicButton from '@/src/components/atoms/MagicButton/MagicButton'
import { COOKIES } from '@/src/constants/constants'
import { loginSchema } from '@/src/lib/yupValidation'

import styles from './LoginPage.module.scss'

/** страница логина */
const LoginPage = () => {
  /** ошибки с бэка */
  const [error, setError] = useState('')

  /** инициализация формы */
  const {
    formState: { errors, isValid },
    handleSubmit,
    register
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema)
  })

  /** обработчик сабмита */
  const onSubmit = async (data: any) => {
    try {
      /** дата юзера с бэка */
      const { data: user } = await axios.post('https://api.yamaguchi.ru/api/auth/login', {
        email: data?.email,
        password: data?.password
      })

      if (!user) {
        return ''
      } else {
        Cookies.set(COOKIES.AUTH_TOKEN, user?.access_token, { expires: 30 })
        Router.reload()
      }
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error?.response?.data?.error)
      }
    }
  }

  return (
    <section className={styles.signin}>
      <div className={styles.formWrapper}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className={styles.inputWrapper}>
              <input
                {...register('email')}
                className={styles.input}
                id='email'
                name='email'
                placeholder='введите email'
                required
                type='input'
              />
              <label
                className={styles.inputLabel}
                htmlFor='email'
              >
                введите email
              </label>
            </div>
            <div className={styles.inputWrapper}>
              <input
                {...register('password')}
                className={styles.input}
                id='password'
                name='password'
                placeholder='password'
                required
                type='password'
              />
              <label
                className={styles.inputLabel}
                htmlFor='password'
              >
                введите пароль
              </label>
            </div>
          </div>
          {error || Object.values(errors)?.length
            ? (
              <p className={styles.error}>
                Введите данные, указанные при регистрации
              </p>
            )
            : null}
          {/* <button
            className={styles.signInBtn}
            disabled={!isValid}
            type='submit'
          >
            Войти
          </button> */}
          <MagicButton
            className={styles.magicButton}
            disabled={!isValid}
            hueValue={200}
            type='submit'
          >
            Войти
          </MagicButton>
        </form>
      </div>
      <div className={styles.gif} />
    </section>
  )
}

export default React.memo(LoginPage)
