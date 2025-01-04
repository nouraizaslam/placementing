// @Generic Response Send Function
exports.successResponse = ({ res, code = 200, data, message = "Successful" }) => {
  console.log(`Success Response ::: ${message}`)
  return res.status(code).json({
    status: {
      code,
      success: true,
    },

    response: {
      message,
      data: data || {}
    },
  });
};