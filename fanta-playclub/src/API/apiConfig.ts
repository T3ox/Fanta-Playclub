const usingMock = true;

const BASE_URL_MOCK = "http://localhost:3000";
const BASE_URL_REAL = "https://fantaplayclub-server-mock.vercel.app";

export const API_BASE_URL = usingMock ? BASE_URL_MOCK : BASE_URL_REAL;
