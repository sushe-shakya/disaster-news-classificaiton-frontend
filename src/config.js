const config = {
    // env: process.env.NODE_ENV,
    // baseURI: "http://localhost:5000", //process.env.REACT_APP_API_BASE_URI,
    baseURI: "http://manaslu.pcampus.edu.np/dnc",
//     api: {
//         endpoints: {
//             all: "/news",
//             filter: "/news/filter"
//         }
//     }
// };

      api: {
          endpoints: {
              all: "/news",
              filter: "/news/"
          }
      }
      };
export default config;
