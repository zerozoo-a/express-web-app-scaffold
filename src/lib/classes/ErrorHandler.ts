export class Error2 extends Error {
  status: number;

  constructor(message?: string, status: number = 500) {
    super(message);
    this.status = status;
  }
}
