import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PersistenceModule } from './persistence/persistence.module';
import { AuthModule } from './infrastructure/auth/auth.module';
import { LoginMiddleware } from './shared/middlewares/validation/authValidation/login.middleware';
import { RegisterMiddleware } from './shared/middlewares/validation/authValidation/register.middleware';
import { EnvironmentConfigModule } from './infrastructure/config/environment/environment.module';
import { TokenAuthMiddleware } from './shared/middlewares/jwt/token.middleware';
import { RequestMethod } from '@nestjs/common';
import { UserMiddleware } from './shared/middlewares/validation/userValidation/user.middleware';
import { JobMiddleware } from './shared/middlewares/validation/userValidation/job.middleware';

@Module({
  imports: [PersistenceModule, AuthModule, EnvironmentConfigModule.register()],
})

export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenAuthMiddleware).exclude(
      { path: 'auth/(login|register)', method: RequestMethod.POST },
      { path: 'user/check-existed-email', method: RequestMethod.POST }
    ).forRoutes('*')
    consumer.apply(UserMiddleware).forRoutes({ path: 'user/update-user-information/:id', method: RequestMethod.PUT },
      { path: 'user/delete-user/:id', method: RequestMethod.DELETE },
      { path: 'user/change-password/:id', method: RequestMethod.PATCH })
    consumer.apply(LoginMiddleware).forRoutes('auth/login')
    consumer.apply(RegisterMiddleware).forRoutes('auth/register')
    consumer.apply(JobMiddleware).forRoutes(
      { path: 'job/update-job-information/:id', method: RequestMethod.ALL },
      { path: 'job/delete-job/:id', method: RequestMethod.ALL },
    );
  }
}


