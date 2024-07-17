import BoxSDK from 'box-node-sdk';
import dotenv from 'dotenv';

dotenv.config();

const clientId = process.env.BOX_CLIENT_ID;
const clientSecret = process.env.BOX_CLIENT_SECRET;
const developerToken = process.env.BOX_DEVELOPER_TOKEN;
const parentFolderId = process.env.BOX_PARENT_FOLDER_ID;

const sdk = new BoxSDK({
    clientID: clientId,
    clientSecret: clientSecret
});

const client = sdk.getBasicClient(developerToken);

export const createFolderInBox = async (folderName) => {
    try {
        const folder = await client.folders.create(
            parentFolderId,
            folderName
        );
        return folder;
    } catch (error) {
        throw new Error(`Error creating folder in Box: ${error.message}`);
    }
};
