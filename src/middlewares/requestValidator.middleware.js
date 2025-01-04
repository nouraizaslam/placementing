
exports.requestValidator = (schema) => {
  return (req, res, next) => {
    try {
      const {
        method,
        body,
        files,
        _parsedUrl,
        query,
      } = req;
      const fullURL = _parsedUrl.pathname;
      let data = null;
      switch (method) {
        case "POST":
          data = files && files.length ? { ...body, files } : body;
          break;
        case "PUT":
          data = files && files.length ? { ...body, files } : body;
          break;
        case "GET":
          data = query;
          break;
        case "DELETE":
          data = query;
          break;
        default:
          data = {};
      }

      const { error } = schema.validate(data);

      if (error) throw { ...error.details[0], code: "validation_error" };
      else next();
    } catch (e) {
      next(e);
    }
  };
};
