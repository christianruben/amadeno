import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();
router.get('/', async (ctx) => {
  await ctx.send({
    root: `${Deno.cwd()}/public`,
    index: "index.html"
  });
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: 8080});