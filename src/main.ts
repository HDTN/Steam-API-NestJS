import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'e3e89232d466d81b86cfa45775fed615e6b2a738086c095a17778ec74c9d57d77c4ebd701955ef2cf46ed5ebee8409ec04ecec5c43835557191ca576d7ef7ea3', // Substitua por uma chave secreta segura
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false }, // Altere para true em produção
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();
