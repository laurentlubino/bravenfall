export class BaseError extends Error {
  statusCode: number;
  constructor(message?: string) {
    super(message);
    this.name = 'BaseError';
    this.message = message || 'Internal Server Error';
    this.statusCode = 500;
  }
}

export class NotFoundError extends BaseError {
  constructor(message?: string) {
    super(message);
    this.name = 'NotFoundError';
    this.message = message || 'Not Found';
    this.statusCode = 404;
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message?: string) {
    super(message);
    this.name = 'UnauthorizedError';
    this.message = message || 'Unauthorized';
    this.statusCode = 401;
  }
}

export class BadRequestError extends BaseError {
  constructor(message?: string) {
    super(message);
    this.name = 'BadRequestError';
    this.message = message || 'Bad Request';
    this.statusCode = 400;
  }
}

export class ForbiddenError extends BaseError {
  constructor(message?: string) {
    super(message);
    this.name = 'ForbiddenError';
    this.message = message || 'Forbidden';
    this.statusCode = 403;
  }
}
