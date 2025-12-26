import api from '~/services/api'

export const uploadMedia = async (file: File) => {
  const form = new FormData()
  form.append('file', file)

  const { data } = await api.post(
    '/admin/media/upload',
    form,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )

  return data
}
