const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Server Error";
  res.status(status).send({ error: message });
};

export default errorHandler;
