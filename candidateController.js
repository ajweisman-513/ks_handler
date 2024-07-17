import { createCandidateFolder } from './candidateService.js';

export const handleCandidateRequest = async (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));

    if (req.body.challenge) {
        console.log('challenge found!', req.body);
        res.status(200).send(req.body);
    } else {
        console.log('Non-challenge Request!', req.body);
        console.log(req.body);
        res.status(200).send(req.body);

        // const folderName = req.body.name;

        // if (folderName) {
        //     try {
        //         const folder = await createCandidateFolder(folderName);
        //         res.status(200).send(folder);
        //     } catch (error) {
        //         console.error('Error creating folder in Box:', error);
        //         res.status(500).send('Error creating folder in Box');
        //     }
        // } else {
        //     res.status(400).send('Missing "name" field in payload');
        // }
    }
};
