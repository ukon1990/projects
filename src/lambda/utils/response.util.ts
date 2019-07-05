export class Response {
  body: string;

  constructor(
    body: any,
    public statusCode: number = 200) {
    this.body = typeof body === 'object' ?
      JSON.stringify(body) : body;
  }
}
