import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Achievement } from './entities/achievement.entity';
import { Level } from './entities/level.entity';
import { UserAchievement } from './entities/user-achievement.entity';
import { GamificationService } from './gamification.service';
import { GamificationController } from './gamification.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Achievement, Level, UserAchievement]),
    UsersModule
  ],
  controllers: [GamificationController],
  providers: [GamificationService],
  exports: [GamificationService]
})
export class GamificationModule {}
