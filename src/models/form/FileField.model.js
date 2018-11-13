import { flow, getRoot, types } from 'mobx-state-tree'
// import ReactAlert from 'react-s-alert'
import API from '../../utils/API'
// import Logger from '../../utils/Logger'
// import { errorMessages } from '../../utils/constants'

export const FileFieldModel = types
  .model('FileFieldModel', {
    nameKey: types.optional(types.string, 'file'),
    uploadedFileData: types.optional(types.frozen(), {}),
    maxFileSize: types.optional(types.number, 5),
    uploadUrl: types.optional(types.string, '')
  })
  .actions(self => {
    const removeFile = () => {
      self.uploadedFileData = { image: null }
      self.value = null
    }

    const uploadFileRequest = flow(function* uploadFileRequest(file, cb) {
      if (!self.uploadUrl) {
        throw new Error('Use should specify url for uploading this file')
      }

      self.disabled = true
      getRoot(self).setPendingStatus(true)

      try {
        const formData = new FormData()
        formData.append(self.nameKey, file)

        const request = yield API.postData(self.uploadUrl, formData)
        self.uploadedFileData = request.data
        cb && cb(request.data)
        if (Array.isArray(self.value)) {
          self.value = [...self.value, request.data.id]
        } else {
          self.value = request.data.id
        }
        self.disabled = false
        getRoot(self).setPendingStatus(false)
      } catch (error) {
        if (error.response.data.image) {
          // ReactAlert.error(error.response.data.image[0], configs.alertConfig)
        }
        // TODO we should assign these errors to appropriate form field
        // const { data } = error.response
        // if (data && self.setServerErrors) {
        //   self.setServerErrors(data)
        // }
        // Logger.error(data)
        self.disabled = false
        getRoot(self).setPendingStatus(false)
      }
    })

    const onFileChange = (file, cb) => {
      if (self.maxFileSize * 1024 * 1024 < file.size) {
        // const msg = errorMessages.maxFileSize(self.maxFileSize)
        // ReactAlert.error(msg, configs.alertConfig)
      } else {
        return uploadFileRequest(file, cb)
      }
    }

    return { onFileChange, removeFile }
  })
