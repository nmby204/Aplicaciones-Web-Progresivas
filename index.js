const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs"); // si prefieres puedes usar "yaml" o "js-yaml"

const app = express();
const swaggerDocument = YAML.load("./swagger.yaml");

// Servir documentación en /docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}/docs`);
});
