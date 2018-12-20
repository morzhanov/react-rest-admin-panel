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
