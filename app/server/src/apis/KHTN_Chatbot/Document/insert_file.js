/* eslint-disable no-unused-vars */

import { buildErrObject } from '../../../middlewares/utils'

// const domain = `http://${process.env.KHTNCHATBOT_HOST}:${process.env.KHTNCHATBOT_PORT}`
const domain = process.env.PYTHON_URI || 'http://localhost:5000'

export const insert_file = async (formData = null) => {
  const url = `${domain}/file/insert`
  const structure = {
    method: 'POST',
    body: formData
  }
  // Thực hiện GET request
  return fetch(url, structure)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok')
      return response.json()
    })
    .catch(error => {
      throw buildErrObject(422, error)
    })
}

