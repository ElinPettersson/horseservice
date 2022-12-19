import environment from "./environment";

const swaggerOptions = {
  routePrefix: "/documentation",
  exposeRoute: true,
  openapi: {
    openapi: "3.0.3",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    },
  },
  swagger: {
    info: {
      title: "Stable Backend Service",
      description: "The backend server for the stable app",
      version: "1.0.0",
    },
    securityDefinitions: {
      Authorization: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    host: `localhost:${environment.PORT}`,
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};

export default swaggerOptions;
