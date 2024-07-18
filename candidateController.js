import { createCandidateFolder } from './candidateService.js';

export const handleCandidateRequest = async (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));

    if (req.body.challenge) {
        console.log('challenge found!', req.body);
        res.status(200).send(req.body);
    } else {
        const candidateName = req.body.event.pulseName;

        if (candidateName) {
            try {
                const folderName = await createCandidateFolder(candidateName);
                console.log('Non-challenge Request!', folderName);
                res.status(200).send(folderName);
            } catch (error) {
                console.error('Error creating folder in Box:', error);
                res.status(500).send('Error creating folder in Box');
            }
        } else {
            res.status(400).send('Missing "candidateName" field in event payload');
        }
    }
};
