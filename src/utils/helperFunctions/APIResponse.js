// @Generic Response Send Function
exports.APIResponse = ({ res, code = 200, data, message = "Successful" }) => {
    console.log(`API-Response ::: ${message}`)
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