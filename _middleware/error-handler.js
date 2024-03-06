module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    switch (true) {
        case typeof err == 'string' :
            const is404 = err.toLocaleLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 404;
            return res.statusCode(statusCode).json({ message: err });
        default:
            return res.statusCode(500).json({ message: err. message});
    }
}