import { Injectable } from "@nestjs/common";

@Injectable()
export class CkanModuleService {
  constructor() {}
  async FetchCkanData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
