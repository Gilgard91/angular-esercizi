import {defineConfig} from 'orval';

export default defineConfig({
  jsonplaceholder: {
    input: './openapi.yaml',
    output: {
      target: './src/app/api/jsonplaceholder.ts',
      client: 'angular',
      baseUrl: 'https://jsonplaceholder.typicode.com',
    },
  },
});

// export default defineConfig({
//   petstore: {
//     input: 'https://petstore3.swagger.io/api/v3/openapi.json',
//     output: {
//       target: './src/app/api/petstore.ts',
//       client: 'angular',
//     },
//   },
// });
