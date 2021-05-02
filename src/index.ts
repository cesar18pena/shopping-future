import fastify from "fastify";
import dotenv from 'dotenv';
dotenv.config();

const server = fastify();
const port = Number(process.env.APP_PORT) || 3000;

server.get("/", async (request, reply) => {
  console.log('Here');
  return { hello: "world from the fastify sekai" };
});

server.listen(port, '0.0.0.0', (error, address) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);

});

