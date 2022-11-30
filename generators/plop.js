// eslint-disable-next-line no-undef
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Adding component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Componente name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.hbs',
      },
    ],
  });
};
