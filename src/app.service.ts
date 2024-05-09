import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Webserver is running on version ${process.env.npm_package_version}`;
  }
}
