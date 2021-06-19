import { server } from './server';
const port = Number(process.env.APP_PORT) || 3000;

server.listen(port, '0.0.0.0', (error, address) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

