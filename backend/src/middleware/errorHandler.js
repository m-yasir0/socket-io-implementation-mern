module.exports = (err, req, res, _next) => {
  res.locals.message = err.message
  const status = err.status || 500
  res.locals.status = status
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(status).json({
    error: {
      status: err.status,
      message: err.message,
      type: err.type,
    },
  })
}
