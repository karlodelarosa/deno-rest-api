import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './core/routes/routes.ts';

const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

app.use((ctx) => {
  ctx.response.body = "Hello Worlqweqweqwed!";
});

await app.listen({ port: 8000 });