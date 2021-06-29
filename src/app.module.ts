import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemsModule } from './items/items.module'
import config from './config/keys'
import { GoogleStrategy } from './google.strategy'

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot(process.env.MONGODB_URI || config.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
