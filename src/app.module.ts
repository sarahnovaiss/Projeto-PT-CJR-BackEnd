import { Module } from '@nestjs/common';
import { AssessmentModule } from './assessment/assessment.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TeacherModule } from './teacher/teacher.module';
import { SubjectModule } from './subject/subject.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,
    AssessmentModule,
    CommentModule,
    TeacherModule,
    SubjectModule,
    AuthModule,
    JwtModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
