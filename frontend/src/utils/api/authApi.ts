import { IUser } from 'app/types/types'
import { AxiosRequestConfig } from 'axios'
import { Notify } from 'quasar'
import { api } from 'src/boot/axios'
import { ref } from 'vue'

interface LoginRes {
    jwt: string
    user: IUser
}

export class AuthApi {
  public static useLocalLogin(
    config?: AxiosRequestConfig<any> | undefined,
    cb?: { onSuccess?: () => void; onError?: () => void }
  ) {
    const loading = ref(false)
    const errorMessage = ref<string | null>(null)
    const response = ref<null | LoginRes>(null)
    const login = async (data: {
            identifier: string
            password: string
        }) => {
      try {
        loading.value = true
        const res = await api.post('/api/auth/local', data, config)
        response.value = res.data
        loading.value = false
        cb?.onSuccess && cb?.onSuccess()
        Notify.create({
          message: 'Login successfully',
          color: 'positive',
          icon: 'done'
        })
      } catch (error: any) {
        console.log(error)

        if (error?.response) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error?.response?.data?.error?.message
          Notify.create({
            message:
                            error?.response?.data?.error?.message ||
                            'Login Failed',
            color: 'negative'
          })
        } else if (error?.request) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value =
                        'Trying to Login. Server Not Reachable!'
          Notify.create({
            message: 'Trying to Login. Server Not Reachable!',
            color: 'negative'
          })
        } else {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error.message
          Notify.create({ message: error.message, color: 'negative' })
        }
      }
    }

    return {
      loading,
      login,
      errorMessage,
      response
    }
  }

  public static useRegister(
    config?: AxiosRequestConfig<any> | undefined,
    cb?: { onSuccess?: () => void; onError?: () => void }
  ) {
    const loading = ref(false)
    const errorMessage = ref<string | null>(null)
    const response = ref<null | LoginRes>(null)

    const register = async (data: {
            username: string
            email: string
            password: string
        }) => {
      try {
        console.log('no-log')
        loading.value = true

        const res = await api.post(
          '/api/auth/local/register',
          data,
          config
        )
        response.value = res.data
        loading.value = false
        cb?.onSuccess && cb?.onSuccess()
        Notify.create({
          message:
                        'Registration Successfull. Please check your email and verify your account',
          color: 'positive',
          icon: 'done',
          timeout: 5000
        })
      } catch (error: any) {
        if (error?.response) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error?.response?.data?.error?.message
          Notify.create({
            message:
                            error?.response?.data?.error?.message ||
                            'Registration Failed',
            color: 'negative'
          })
        } else if (error?.request) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value =
                        'Trying to Register. Server Not Reachable!'
          Notify.create({
            message: 'Trying to Login. Server Not Reachable!',
            color: 'negative'
          })
        } else {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error.message
          Notify.create({ message: error.message, color: 'negative' })
        }
      }
    }

    return {
      loading,
      register,
      errorMessage,
      response
    }
  }

  public static useForgotPassword(
    config?: AxiosRequestConfig<any> | undefined,
    cb?: { onSuccess?: () => void; onError?: () => void }
  ) {
    const loading = ref(false)
    const errorMessage = ref<string | null>(null)

    const execute = async (data: { email: string }) => {
      try {
        loading.value = true
        const res = await api.post(
          '/api/auth/forgot-password',
          data,
          config
        )
        loading.value = false
        cb?.onSuccess && cb?.onSuccess()
        Notify.create({
          message:
                        'Password reset email sent! Please Check your mail inbox',
          color: 'positive',
          icon: 'done',
          timeout: 5000
        })
      } catch (error: any) {
        if (error?.response) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error?.response?.data?.error?.message
          Notify.create({
            message:
                            error?.response?.data?.error?.message ||
                            'Passwrod Reset Failed',
            color: 'negative'
          })
        } else if (error?.request) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = 'Server Not Reachable!'
          Notify.create({
            message: 'Server Not Reachable!',
            color: 'negative'
          })
        } else {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error.message
          Notify.create({ message: error.message, color: 'negative' })
        }
      }
    }

    return {
      loading,
      execute,
      errorMessage
    }
  }

  public static useResetPassword(
    config?: AxiosRequestConfig<any> | undefined,
    cb?: { onSuccess?: () => void; onError?: () => void }
  ) {
    const loading = ref(false)
    const errorMessage = ref<string | null>(null)

    const execute = async (data: {
            password: string
            passwordConfirmation: string
            code: string
        }) => {
      try {
        loading.value = true
        const res = await api.post(
          '/api/auth/reset-password',
          data,
          config
        )
        loading.value = false
        cb?.onSuccess && cb?.onSuccess()
        Notify.create({
          message: 'Password reset successfull',
          color: 'positive',
          icon: 'done'
        })
      } catch (error: any) {
        if (error?.response) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error?.response?.data?.error?.message
          Notify.create({
            message:
                            error?.response?.data?.error?.message ||
                            'Passwrod Reset Failed',
            color: 'negative'
          })
        } else if (error?.request) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = 'Server Not Reachable!'
          Notify.create({
            message: 'Server Not Reachable!',
            color: 'negative'
          })
        } else {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error.message
          Notify.create({ message: error.message, color: 'negative' })
        }
      }
    }

    return {
      loading,
      execute,
      errorMessage
    }
  }

  public static useChangePassword(
    config?: AxiosRequestConfig<any> | undefined,
    cb?: { onSuccess?: () => void; onError?: () => void }
  ) {
    const loading = ref(false)
    const errorMessage = ref<string | null>(null)

    const execute = async (data: {
            password: string
            currentPassword: string
            passwordConfirmation: string
        }) => {
      try {
        loading.value = true
        const res = await api.post(
          '/api/auth/change-password',
          data,
          config
        )
        loading.value = false
        cb?.onSuccess && cb?.onSuccess()
        Notify.create({
          message: 'Password changed successfull',
          color: 'positive',
          icon: 'done'
        })
      } catch (error: any) {
        if (error?.response) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error?.response?.data?.error?.message
          Notify.create({
            message:
                            error?.response?.data?.error?.message ||
                            'Passwrod change Failed',
            color: 'negative'
          })
        } else if (error?.request) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = 'Server Not Reachable!'
          Notify.create({
            message: 'Server Not Reachable!',
            color: 'negative'
          })
        } else {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error.message
          Notify.create({ message: error.message, color: 'negative' })
        }
      }
    }

    return {
      loading,
      execute,
      errorMessage
    }
  }

  public static async useEmailConfirmation(
    query: {
            confirmation: string
        },
    config?: AxiosRequestConfig<any> | undefined
  ) {
    const loading = ref(false)
    const data = ref(null)
    const errorMessage = ref<string | null>(null)
    try {
      loading.value = true
      const res = await api.get('/api/auth/email-confrimation', {
        data: {
          ...query
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        ...config
      })
      if (res?.data) {
        data.value = res?.data
      }
      loading.value = false
    } catch (error: any) {
      loading.value = false
      if (error?.response) {
        errorMessage.value = error?.response?.data?.error?.message
        Notify.create({
          message:
                        error?.response?.data?.error?.message ||
                        `Failed to confirm ${this.name}`,
          color: 'negative'
        })
      } else if (error?.request) {
        errorMessage.value = 'Server Not Reachable!'
        Notify.create({
          message: 'Server Not Reachable!',
          color: 'negative'
        })
      } else {
        errorMessage.value = error.message
        Notify.create({ message: error.message, color: 'negative' })
      }
    }

    return { loading, data, errorMessage }
  }

  public static useSendEmailConfrimation(
    config?: AxiosRequestConfig<any> | undefined,
    cb?: { onSuccess?: () => void; onError?: () => void }
  ) {
    const loading = ref(false)
    const errorMessage = ref<string | null>(null)

    const execute = async (data: { email: string }) => {
      try {
        loading.value = true
        const res = await api.post(
          '/api/auth/send-email-confrimation',
          data,
          config
        )
        loading.value = false
        cb?.onSuccess && cb?.onSuccess()
        Notify.create({
          message: 'Email Confirmation Sent',
          color: 'positive',
          icon: 'done'
        })
      } catch (error: any) {
        if (error?.response) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error?.response?.data?.error?.message
          Notify.create({
            message:
                            error?.response?.data?.error?.message ||
                            'Failed to send email confirmation',
            color: 'negative'
          })
        } else if (error?.request) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = 'Server Not Reachable!'
          Notify.create({
            message: 'Server Not Reachable!',
            color: 'negative'
          })
        } else {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error.message
          Notify.create({ message: error.message, color: 'negative' })
        }
      }
    }

    return {
      loading,
      execute,
      errorMessage
    }
  }

  public static async varifyMyAuth(
    config?: AxiosRequestConfig<any> | undefined
  ) {
    const loading = ref(false)
    const data = ref<null | Record<any, any>>(null)
    const errorMessage = ref<string | null>(null)
    try {
      loading.value = true
      const res = await api.get('/api/users/me', {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        ...config
      })
      if (res?.data) {
        data.value = res?.data
      }
      loading.value = false
    } catch (error: any) {
      loading.value = false
      if (error?.response) {
        errorMessage.value = error?.response?.data?.error?.message
        Notify.create({
          message:
                        error?.response?.data?.error?.message ||
                        'Users not logged in or Session expired',
          color: 'negative'
        })
      } else if (error?.request) {
        errorMessage.value = 'Server Not Reachable!'
        Notify.create({
          message: 'Server Not Reachable!',
          color: 'negative'
        })
      } else {
        errorMessage.value = error.message
        Notify.create({ message: error.message, color: 'negative' })
      }
    }

    return { loading, data, errorMessage }
  }
}
