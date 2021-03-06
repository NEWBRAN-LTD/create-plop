// plopfile.ts
// Here we don't really specify anything instead we will scan folder
// and dynamic import the plopfiles from users or other places
import { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {
  // plop generator code
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
        path: 'tests/{{name}}.ts',
        templateFile: 'src/tpl/ava.test.tpl'
      }
    ]  // array of actions
  })
}
