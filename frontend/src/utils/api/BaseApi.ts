import { StrapiQueryBuilder } from 'app/types/types'
import { AxiosRequestConfig } from 'axios'
import { Notify } from 'quasar'
import { api } from 'src/boot/axios'
import { ref } from 'vue'

export class BaseApi {
  url: string
  name: string

  public constructor(url: string, name: string) {
    this.url = url
    this.name = name
  }

  public async find(
    query?: StrapiQueryBuilder,
    config?: AxiosRequestConfig<any> | undefined
  ) {
    const loading = ref(false)
    const data = ref(null)
    const errorMessage = ref<string | null>(null)
    try {
      loading.value = true
      const res = await api.get(this.url, {
        params: {
          ...query
        },
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        ...config
      })
      if (res?.data) {
        data.value = res?.data
      }
      loading.value = false
    } catch (error: any) {
      loading.value = false
      if (error?.response) {
        errorMessage.value = error?.response?.error?.message
        Notify.create({
          message:
            error?.response?.error?.message || `Failed to fetch ${this.name}`,
          color: 'negative'
        })
      } else if (error?.request) {
        errorMessage.value = `Trying to fetch ${this.name}.Server Not Reachable!`
        Notify.create({
          message: `Trying to fetch ${this.name}.Server Not Reachable!`,
          color: 'negative'
        })
      } else {
        errorMessage.value = error.message
        Notify.create({ message: error.message, color: 'negative' })
      }
    }

    return { loading, data, errorMessage }
  }

  public async findOne(
    id: string,
    query?: StrapiQueryBuilder,
    config?: AxiosRequestConfig<any> | undefined
  ) {
    const loading = ref(false)
    const data = ref(null)
    const errorMessage = ref<string | null>(null)
    try {
      loading.value = true
      const res = await api.get(this.url + `/${id}`, {
        params: {
          ...query
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
        errorMessage.value = error?.response?.error?.message
        Notify.create({
          message:
            error?.response?.error?.message || `Failed to fetch ${this.name}`,
          color: 'negative'
        })
      } else if (error?.request) {
        errorMessage.value = `Trying to fetch ${this.name}.Server Not Reachable!`
        Notify.create({
          message: `Trying to fetch ${this.name}.Server Not Reachable!`,
          color: 'negative'
        })
      } else {
        errorMessage.value = error.message
        Notify.create({ message: error.message, color: 'negative' })
      }
    }

    return { loading, data, errorMessage }
  }

  public create(
    config?: AxiosRequestConfig<any> | undefined,
    cb?: { onSuccess?: () => void; onError?: () => void }
  ) {
    const loading = ref(false)
    const errorMessage = ref<string | null>(null)
    const execute = async (data: any) => {
      try {
        loading.value = true
        const res = await api.post(this.url, data, config)
        loading.value = false
        cb?.onSuccess && cb?.onSuccess()
        Notify.create({
          message: `${this.name} created successfully`,
          color: 'positive',
          icon: 'done'
        })
      } catch (error: any) {
        if (error?.response) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error?.response?.error?.message
          Notify.create({
            message:
              error?.response?.error?.message ||
              `Failed to create ${this.name}`,
            color: 'negative'
          })
        } else if (error?.request) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = `Trying to create ${this.name}.Server Not Reachable!`
          Notify.create({
            message: `Trying to create ${this.name}.Server Not Reachable!`,
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

  public update(
    config?: AxiosRequestConfig<any> | undefined,
    cb?: { onSuccess?: () => void; onError?: () => void }
  ) {
    const loading = ref(false)
    const errorMessage = ref<string | null>(null)
    const execute = async (id: string, data: any) => {
      try {
        loading.value = true
        const res = await api.put(this.url + `/${id}`, data, config)
        loading.value = false
        cb?.onSuccess && cb?.onSuccess()
        Notify.create({
          message: `${this.name} updated successfully`,
          color: 'positive',
          icon: 'done'
        })
      } catch (error: any) {
        if (error?.response) {
          loading.value = false
          cb?.onError && cb?.onError()
          errorMessage.value = error?.response?.error?.message
          Notify.create({
            message:
              error?.response?.error?.message ||
              `Failed to updtae ${this.name}`,
            color: 'negative'
          })
        } else if (error?.request) {
          cb?.onError && cb?.onError()
          loading.value = false
          errorMessage.value = `Trying to update ${this.name}.Server Not Reachable!`
          Notify.create({
            message: `Trying to update ${this.name}.Server Not Reachable!`,
            color: 'negative'
          })
        } else {
          cb?.onError && cb?.onError()
          loading.value = false
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

  public delete(
    config?: AxiosRequestConfig<any> | undefined,
    cb?: { onSuccess?: () => void; onError?: () => void }
  ) {
    const loading = ref(false)
    const execute = async (id: string) => {
      try {
        loading.value = true
        const res = await api.delete(this.url + `/${id}`, config)
        loading.value = false
        cb?.onSuccess && cb?.onSuccess()
        Notify.create({
          message: `${this.name} deleted successfully`,
          color: 'positive',
          icon: 'done'
        })
      } catch (error: any) {
        if (error?.response) {
          cb?.onError && cb?.onError()
          loading.value = false
          Notify.create({
            message:
              error?.response?.error?.message ||
              `Failed to delete ${this.name}`,
            color: 'negative'
          })
        } else if (error?.request) {
          cb?.onError && cb?.onError()
          loading.value = false
          Notify.create({
            message: `Trying to delte ${this.name}.Server Not Reachable!`,
            color: 'negative'
          })
        } else {
          cb?.onError && cb?.onError()
          loading.value = false
          Notify.create({ message: error.message, color: 'negative' })
        }
      }
    }

    return {
      loading,
      execute
    }
  }

  //   public async exportExcel(
  //     query?: AdditionalParams,
  //     config?: AxiosRequestConfig<any> | undefined
  //   ) {
  //     const loading = ref(false);
  //     const data = ref(null);
  //     try {
  //       loading.value = true;
  //       const res = await api.get(this.url + '/export', {
  //         params: {
  //           ...query,
  //         },
  //         headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //         ...config,
  //       });
  //       if (res?.data) {
  //         data.value = res?.data;
  //       }
  //       loading.value = false;
  //     } catch (error: any) {
  //       loading.value = false;
  //       if (error?.response) {
  //         Notify.create({
  //           message:
  //             error?.response?.data?.message || `Failed to export ${this.name}`,
  //           color: 'negative',
  //         });
  //       } else if (error?.request) {
  //         Notify.create({
  //           message: `Trying to fetch ${this.name}.Server Not Reachable!`,
  //           color: 'negative',
  //         });
  //       } else {
  //         Notify.create({ message: error.message, color: 'negative' });
  //       }
  //     }

  //     return { loading, data };
  //   }

  //   public importExcel(
  //     config?: AxiosRequestConfig<any> | undefined,
  //     cb?: { onSuccess?: () => void; onError?: () => void }
  //   ) {
  //     const loading = ref(false);
  //     const execute = async (data: any) => {
  //       try {
  //         loading.value = true;
  //         const res = await api.post(this.url + '/import', data, config);
  //         loading.value = false;
  //         cb?.onSuccess && cb?.onSuccess();
  //         Notify.create({
  //           message: 'Data Uploaded, Refresh the page',
  //           color: 'positive',
  //           icon: 'done',
  //         });
  //       } catch (error: any) {
  //         if (error?.response) {
  //           loading.value = false;
  //           cb?.onError && cb?.onError();
  //           Notify.create({
  //             message:
  //               JSON.stringify(error?.response?.data) || 'Failed to Import Excel',
  //             color: 'negative',
  //           });
  //         } else if (error?.request) {
  //           loading.value = false;
  //           cb?.onError && cb?.onError();
  //           Notify.create({
  //             message: 'Trying to import excel .Server Not Reachable!',
  //             color: 'negative',
  //           });
  //         } else {
  //           loading.value = false;
  //           cb?.onError && cb?.onError();
  //           Notify.create({ message: error.message, color: 'negative' });
  //         }
  //       }
  //     };

  //     return {
  //       loading,
  //       execute,
  //     };
  //   }
}
