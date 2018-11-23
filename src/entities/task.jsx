import React from 'react'
import Assignment from '@material-ui/icons/Assignment'
import apiUrls from '../utils/apiUrls'
import { UpdateEntityUrlMethod } from '../utils/constants'

// NOTICE: we should use .jsx extention for this file to support custom actions
export default {
  name: 'task',

  icon: Assignment,

  url: apiUrls.fake.task,

  updateUrlMethod: UpdateEntityUrlMethod.PATCH,

  filtersUrl: apiUrls.fake.taskFilters,

  pagination: { pageSize: 20, pageNumber: 1 },

  filters: [
    {
      name: 'status',
      value: ''
    },
    {
      name: 'importance',
      value: ''
    }
  ],

  fields: [
    {
      name: 'name',
      type: 'string',
      rules: 'required'
    },
    {
      name: 'desc',
      type: 'string',
      rules: 'email|required'
    },
    {
      name: 'status',
      type: 'dropdown',
      rules: 'required',
      options: ['Created', 'In progress', 'Closed'],
      // example of custom body action
      actions: {
        body: {
          custom: ({ value }) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  borderRadius: '50%',
                  width: 8,
                  height: 8,
                  marginRight: 8,
                  backgroundColor:
                    value === 'Created'
                      ? '#bbb'
                      : value === 'In progress'
                      ? '#3d2'
                      : '#222'
                }}
              />
              {value}
            </div>
          )
        }
      }
    },
    {
      name: 'importance',
      type: 'dropdown',
      rules: 'required',
      options: ['Low', 'Medium', 'High'],
      // example of custom body action
      actions: {
        body: {
          custom: ({ value }) => (
            <span
              style={{
                color: value === 'Low' ? '#3d2' : value === 'Medium' ? '#c37800' : '#e23'
              }}
            >
              {value}
            </span>
          )
        }
      }
    }
  ]
}
