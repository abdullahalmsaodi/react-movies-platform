import { Client, Databases, ID, Query } from "appwrite";

const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const endpointUrl = import.meta.env.VITE_APPWRITE_ENDPOINT;
const tableId = import.meta.env.VITE_APPWRITE_TABLE_ID;

const client = new Client().setEndpoint(endpointUrl).setProject(projectId);

export const database = new Databases(client);
export { ID, Query, databaseId, tableId };
