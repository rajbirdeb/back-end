class ApiError extends Error {
    constructor(statusCode, message = "Something Went Wrong", errors = [], stack = "") {
      super(message);
      this.statusCode = statusCode; // HTTP Status Code (e.g., 400, 404, 500)
      this.data = null; // Placeholder for any response data (usually null in errors)
      this.success = false; // Indicates failure
      this.errors = errors; // Array of error details (optional)
  
      // If a stack trace is provided, use it; otherwise, capture the current stack trace
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export default ApiError
  