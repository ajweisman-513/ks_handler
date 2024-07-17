import axios from 'axios';

const parentFolderId = 'YOUR_PARENT_FOLDER_ID';
const boxAccessToken = 'YOUR_BOX_ACCESS_TOKEN';

export const processFolderName = (folderName) => {
    const nameParts = folderName.trim().split(' ');

    const lastName = nameParts.pop();

    const orderedName = [lastName, ...nameParts].join(', ');

    console.log(orderedName);

    return orderedName;
};

export const createFolderInBox = async (folderName) => {
    return await axios.post(
        'https://api.box.com/2.0/folders',
        {
            name: folderName,
            parent: { id: parentFolderId }
        },
        {
            headers: {
                'Authorization': `Bearer ${boxAccessToken}`,
                'Content-Type': 'application/json'
            }
        }
    );
};
