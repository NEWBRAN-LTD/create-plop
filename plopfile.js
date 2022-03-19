// plopfile.js

export default function (plop) {

  plop.setGenerator('basics', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `name of the test file`
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'tests/{{name}}.test.ts',
        templateFile: 'src/tpl/ava.test.tpl'
      }
    ]  // array of actions
  })

}
