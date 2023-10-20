import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.

// options - are the parameters passed by the user to the schematic
// command line option --exports - to export a component from a module
export function helloWorld(_options: any): Rule {

  // the code of the schematic - that generates other code
  return (tree: Tree, _context: SchematicContext) => {

    tree.create("index.js", "console.log('Hello, World!');")

    return tree;
  };
}
