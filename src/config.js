const config = {
    // env: process.env.NODE_ENV,
    baseURI: "http://localhost:5000", //process.env.REACT_APP_API_BASE_URI,
    // baseURI: "http://3.222.126.35:8000",
    api: {
        endpoints: {
            all: "/news",
            filter: "/news/filter"
        }
    }
};

export default config;
