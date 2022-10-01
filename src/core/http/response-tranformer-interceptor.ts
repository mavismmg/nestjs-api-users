import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
import { map, Observable } from "rxjs";
import { NestResponse } from "./nest-response";

@Injectable()
export class ResponseTransformInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter;
  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(map((controllerResponse: NestResponse) => {
      if (controllerResponse instanceof NestResponse) {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const { headers, status, body } = controllerResponse;
        const headersNames = Object.getOwnPropertyNames(headers);
        headersNames.forEach(headersNames => {
          const headerValue = headers[headersNames];
          this.httpAdapter.setHeader(response, headersNames, headerValue);
        });
        this.httpAdapter.status(response, status);
        return body;
      }
      return controllerResponse;
    }));
  }
}