import { createFolderInBox } from './boxService.js';

export const processFolderName = (name) => {
    // Implement any necessary processing logic
    return name.trim();
};

export const createCandidateFolder = async (folderName) => {
    const orderedName = processFolderName(folderName);
    const folder = await createFolderInBox(orderedName);
    return folder;
};
