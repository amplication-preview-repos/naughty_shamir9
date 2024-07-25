import { Module } from "@nestjs/common";
import { CkanModuleService } from "./ckanmodule.service";
import { CkanModuleController } from "./ckanmodule.controller";
import { CkanModuleResolver } from "./ckanmodule.resolver";

@Module({
  controllers: [CkanModuleController],
  providers: [CkanModuleService, CkanModuleResolver],
  exports: [CkanModuleService],
})
export class CkanModuleModule {}
