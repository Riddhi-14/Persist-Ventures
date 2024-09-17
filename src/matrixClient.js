import { createClient } from 'matrix-js-sdk';

// Setup a Matrix client with your access credentials
const matrixClient = createClient({
    baseUrl: "https://matrix.org",
    accessToken: "YOUR_ACCESS_TOKEN",  // Replace with your Matrix access token
    userId: "@your-user-id:matrix.org" // Replace with your Matrix user ID
});

export const startMatrixClient = () => {
    matrixClient.startClient({ initialSyncLimit: 10 });
    return matrixClient;
};

export default matrixClient;
