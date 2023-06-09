import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PersistenceModule } from './persistence/persistence.module';
import { AuthModule } from './infrastructure/auth/auth.module';
import { LoginMiddleware } from './shared/middlewares/validation/authValidation/login.middleware';
import { RegisterMiddleware } from './shared/middlewares/validation/authValidation/register.middleware';
import { EnvironmentConfigModule } from './infrastructure/config/environment/environment.module';
import { TokenAuthMiddleware } from './shared/middlewares/jwt/token.middleware';
import { RequestMethod } from '@nestjs/common';
import { UserMiddleware } from './shared/middlewares/validation/userValidation/user.middleware';
@Module({
  imports: [PersistenceModule, AuthModule, EnvironmentConfigModule.register()],
})

export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenAuthMiddleware).exclude(
      { path: 'auth/(login|register)', method: RequestMethod.ALL },
      { path: 'user/check-existed-email', method: RequestMethod.ALL }
    ).forRoutes('*')
    consumer.apply(UserMiddleware).exclude(
      { path: 'auth/(login|register)', method: RequestMethod.ALL },
      { path: 'user/check-existed-email', method: RequestMethod.ALL }
    ).forRoutes('*')
    consumer.apply(LoginMiddleware).forRoutes('auth/login')
    consumer.apply(RegisterMiddleware).forRoutes('auth/register')
  }
}
