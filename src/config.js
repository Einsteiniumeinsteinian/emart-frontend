var enviroment = {};

enviroment.development = {
    'backendApi': process.env.REACT_APP_BACKEND_API,
    'productApi': process.env.REACT_APP_PRODUCT_API,
    'paystackKey': process.env.REACT_APP_PAYSTACK_PUBLIC_KEY
}

enviroment.production = {
    'backendApi': process.env.REACT_APP_BACKEND_API,
    'productApi': process.env.REACT_APP_PRODUCT_API,
    'paystackKey': process.env.REACT_APP_PAYSTACK_PUBLIC_KEY
}

// Check for present env
var currentEnviroment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : false;

// Env to export
var envToExport = typeof(enviroment[currentEnviroment]) == 'object' ? enviroment[currentEnviroment] : enviroment['development'];

module.exports = envToExport;