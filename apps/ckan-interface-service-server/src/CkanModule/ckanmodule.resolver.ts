import * as graphql from "@nestjs/graphql";
import { CkanModuleService } from "./ckanmodule.service";

export class CkanModuleResolver {
  constructor(protected readonly service: CkanModuleService) {}

  @graphql.Query(() => String)
  async FetchCkanData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchCkanData(args);
  }
}
