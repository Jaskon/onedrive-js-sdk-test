require("isomorphic-fetch");

const { Client } = require("@microsoft/microsoft-graph-client");
const { TokenCredentialAuthenticationProvider } = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const { ClientSecretCredential } = require("@azure/identity");

const clientId = process.env.ONEDRIVE_CLIENT_ID;
const clientSecret = process.env.ONEDRIVE_CLIENT_SECRET;
const scopes = 'User.Read';
const tenantId = process.env.ONEDRIVE_TENANT_ID;

const redirectUri = 'http://localhost:3000/onedrive';
const authHost = 'https://login.microsoftonline.com';  // ?

const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: [scopes] });
const client = Client.initWithMiddleware({
    debugLogging: true,
    authProvider
});

client
    .api('/me')  // ?
    .select('displayName')  // ?
    .get()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


module.exports = {
    client
};
