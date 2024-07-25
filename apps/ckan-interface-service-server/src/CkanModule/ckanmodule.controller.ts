import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CkanModuleService } from "./ckanmodule.service";

@swagger.ApiTags("ckanModules")
@common.Controller("ckanModules")
export class CkanModuleController {
  constructor(protected readonly service: CkanModuleService) {}

  @common.Get("/fetch-ckan-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchCkanData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchCkanData(body);
      }
}
