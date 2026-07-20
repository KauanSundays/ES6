const rawApiResponse: unknown = fetchExternalData();

// ❌ O TypeScript nem deixa compilar isso:
// const formatted = rawApiResponse.toUpperCase(); 

// ✅ Type Guard: Provando ao TypeScript o que existe ali
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

if (isString(rawApiResponse)) {
  // Aqui dentro, o TS "afunila" o tipo de unknown para string com segurança
  console.log(rawApiResponse.toUpperCase());
} else {
  console.log("Dado inválido recebido da API");
}