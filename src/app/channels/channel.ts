export abstract class Channel {
  abstract get(resourceUrl: string, config?: any): Promise<any>;
  abstract create(resourceUrl: string, payload: any, config?: any): Promise<any>;
  abstract update(resourceUrl: string, payload: any, config?: any): Promise<any>;
  abstract delete(resourceUrl: string, config?: any): Promise<any>;
}
