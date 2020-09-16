# react-rest-admin-panel

<img src="https://i.imgur.com/KKc5TOa.png"/>

Scallable and easy to use admin dashboard that will help you to manage your REST API data built with React and Mobx.

## DEMO

https://rest-admin-panel.herokuapp.com/

## Description

Creating frontend part for the admin panel of the REST API server always takes a lot of time to design and develop, and it's could be complicated and challenging. This project will help you quickly connect your API to a scalable frontend application for managing your data. This project based on JSON configuration files, so to add new Entity to manage you should only add [entity].js config file for it, all other logic is automated. Also this project provides ready to use logging, authentication and other base logic for admin panel. All datatable contais sorting, filtering and search features. Also this project implements pages to create and update you entities items.

## Installation

Use these steps to install project

```
1. yarn install
2. yarn start
```

Build project:

```
yarn build
```

## Main pages

* <a href="https://rest-admin-panel.herokuapp.com/auth">Auth page</a>
* <a href="https://rest-admin-panel.herokuapp.com/admin/home">Home page</a>
* <a href="https://rest-admin-panel.herokuapp.com/admin/task/">Entity list page</a>
* <a href="https://rest-admin-panel.herokuapp.com/admin/task/2">Update entity page</a>
* <a href="https://rest-admin-panel.herokuapp.com/admin/task/add">Add new entity page</a>


#### NOTE: You can also add your custom page into the project, it's always up to You! If you familiar with React and Mobx libraries it's gona be fast and easy.

### Fake API

Project already contains test entities (user and task entity) for demonstration All data generates using <a href="https://github.com/marak/Faker.js/">faker.js</a> library. Also this project contains fake API server with mocked methods that will take test data from fixtures. You can review how project works in the <a href="https://rest-admin-panel.herokuapp.com/">Demo</a> application. 

To enter demo application you should provide any email and password data, application doesn't saves your data and it's not connected to any back-end server or database.

## Configuration file

To add new entity into the project you should create new [entity_name].js file in `/src/entities` folder and connect it in the `/src/entities/index.js` file:

```
// connect your entities here
import user from './user'
import task from './task'

// INFO: provide your entities here
const entities = [user, task]

export default entities
```

Here's basic minimal entity configuration file:

```
import ExampleIcon from '@material-ui/icons/ExampleIcon'

export default {
  name: 'example',

  icon: ExampleIcon,

  url: 'https://url.to.entity.api',

  fields: [
    {
      name: 'name',
      type: 'string',
      rules: 'required'
    }
  ]
}
```

Here's <b>example configuration file</b> that contains more complex fields for the `Task` entity:

```
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
```

## Configuration file API

#### name

Entity name.

#### icon

Entity icon, will be displayed on the sidebar menu. You can use <a href="https://material-ui.com/style/icons/">MaterialUI icons</a> or provide custom icon component or use simple SVG file.

#### url

Entity base url. This url will be used to perform CRUD operations over entity.

#### updateUrlMethod  (optional)

HTTP method that will be used to update update entity, by default project uses PATCH method. Available methods is PUT and PATCH. You can assign here literal values [`PATCH`, `POST`], or use `UpdateEntityUrlMethod` enum from `src/utils/constants`.

#### filtersUrl  (optional)

updateUrlMethod will be used to fetch entity filters, that could be used to filter entity items in the entity table. Filter name should be one of the entity fields. This parameter is optional, and you can provide all options for filters within `filters` item object just hardcoded them. But in the case if you have a big amount of unique options for the filter you probably want to fetch them asyncronously from some API endpoint.

```
NOTE: you can inject all url parameters as string literal or add them to the `src/utils/apiUrls` file and import from there.
```

#### pagination (optional)

pagination field will change default pagination rules. As default project will use `pageSize = 20` and `pageNumber = 1` values. 

example: 
```
pagination: { pageSize: 20, pageNumber: 1 }
```


#### fitlers (optional)

Array that contains entity filters. 

Filter fields:
```
{
  name: 'status',   // name, should be one of the entity fields names
  value: ''         // default filter value
  options: []       // array of options, you can provide them here or fecth async using `filtersUrl`
}
```

#### fields

This array should contain all entity fields configuration.

Field fields:
```
name: 'name',                                     // field name
type: 'dropdown',                                 // field type
rules: 'required',                                // field validation rules
options: ['Created', 'In progress', 'Closed'],    // array of options, only for dropdown type
actions: {                                        // field custom actions
  head: {                                         // field head custom axtions
    custom: <ReactElement>,                       // custom action React element
    className                                     // head custom className
  }
  body: {                                         // body custom actions
    custom:  <ReactElement>,                      // custom action React element
    className                                     // body custom className
  }
}
```

### Entity field fields

#### name

Entity field name

#### type

Entity field type. Available types: number, boolean, string, dropdown.

If field type is boolen in the `Entity edit page` it will be rendered as Checkbox element.
If field type is dropdown it will be rendered as `<select>` element with options from `<options>` field.

#### rules

Entity field validation rules, you can review all available rules in the <a href="https://github.com/skaterdav85/validatorjs">validator.js</a> API page.

#### options

Array of dropdown-select options, only for `dropdown` field type.

#### actions

Actions is a custom React elements. You can use actions if you want to customize you entity table with special fields in the table body or header. Just pass custom render function in the `custom` field. With this function you can 

Example:
```
actions: {
        body: {
          custom: ({ value, name, history }) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  borderRadius: '50%',
                  backgroundColor:
                    value === 'Created'
                      ? '#bbb'
                      : value === 'In progress'
                      ? '#3d2'
                      : '#222'
                }}
              />
              {value} {name}
              <button onClick={() => history.push('home')}>Go to home</button>
            </div>
          )
        }
      }
```

Render function will receive `value`, `className`, `name`, and  `history` object of react-router-dom library. You can add actions into head and body elements which will accordingly customize table head and body items.


## Main Technologies and libraries

- <a href="https://reactjs.org/">React</a>
- <a href="https://reacttraining.com/react-router/">React Router</a>
- <a href="https://github.com/mobxjs/mobx-state-tree">Mobx-State-Tree</a>
- <a href="https://github.com/mobxjs/mobx">Mobx</a>
- <a href="https://material-ui.com/">Material UI</a>
- <a href="https://github.com/foxhound87/mobx-react-form">Mobx-react-form</a>
- <a href="https://webpack.js.org/">Webpack 4</a>
- <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://github.com/skaterdav85/validatorjs">Validator.js</a>
- <a href="https://eslint.org/">ESLint</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://babeljs.io/">Babel</a>
- <a href="http://stylus-lang.com/">Stylus</a>
- <a href="https://lodash.com/">Lodash</a>
- <a href="https://postcss.org/">PostCSS</a>

#### also:

- Webpack to build project.
- Babel to compile ES6 and ES7 code.
- You can use Stylus within this project.
- Check your code with ESLint and Prettier.
- Supports hot-module-reload.
- Uses MaterialUI and base design.

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

Vlad Morzhanov

## License

#### (The MIT License)

Copyright (c) 2018 Vlad Morzhanov.
You can review license in the LICENSE file.
[![Run on Repl.it](https://repl.it/badge/github/morzhanov/react-rest-admin-panel)](https://repl.it/github/morzhanov/react-rest-admin-panel)