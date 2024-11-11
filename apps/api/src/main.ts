import { AppModule } from './app/app.module';
import { httpBootstrap } from '@app/nest-helpers/http/http.bootstrap';

httpBootstrap({
  module: AppModule,
  globalPrefix: process.env.BASE_ROUTE,
  docs: (doc) =>
    doc
      .setTitle('Zanga API Docs')
      .setDescription('This is the API docs for Zanga application')
      .setVersion('1.0')
      .addBearerAuth(),
})
  .then((serverApp) => serverApp.listen(process.env.PORT ?? 3000))
  .catch(console.log);
