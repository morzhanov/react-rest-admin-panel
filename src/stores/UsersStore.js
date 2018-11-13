// import { types, flow, getParent } from 'mobx-state-tree'
// import { Task } from '../models/Task.model'
// import Logger from '../utils/Logger'
// import API from '../utils/API'
// import { routeURLs as URL } from '../configs/routeURLs'

// export const TasksStore = types
//   .model('UsersStore', {
//     allTasks: types.optional(types.map(Task), {}),
//     lastAddedTasks: types.optional(
//       types.array(types.reference(types.late(() => Task))),
//       []
//     ),

//     allTasksByProject: types.optional(
//       types.array(types.reference(types.late(() => Task))),
//       []
//     ),

//     myTasks: types.optional(types.array(types.reference(types.late(() => Task))), [])
//   })
//   .views(self => ({
//     allTasksLink(projectId) {
//       return URL.project.children.detailProject.children.task.children.allTasks.link(
//         projectId
//       )
//     },
//     createNewTaskLink(projectId) {
//       return URL.project.children.detailProject.children.task.children.createTask.link(
//         projectId
//       )
//     }
//   }))

//   .actions(self => {
//     const fetchUsers = flow(function*(url, params, storeKey) {
//       try {
//         const response = yield API.getData(url, params)
//         const { results, ...pagination } = response.data
//         results.forEach(item => {
//           if (params.project && !item.project) {
//             item.project = params.project
//           }
//           self.addTask(item)
//         })
//         self[storeKey] = results.map(item => item.id)
//         return pagination
//       } catch (error) {
//         Logger.error(error)
//       }
//     })

//     const addTask = task => {
//       if (task.project && task.project.id) {
//         getParent(self).addProject(task.project)
//         task.project = task.project.id
//       }
//       self.allTasks.put(task)
//     }

//     return {
//       fetchTasks
//     }
//   })
