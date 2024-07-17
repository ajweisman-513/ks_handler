import express from 'express';
//import { processFolderName, createFolderInBox } from './candidateService.js';

const router = express.Router();

router.post('/candidates', async (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));

    if (req.body.challenge) {
        console.log('challenge found!', req.body);
        res.status(200).send(req.body.challenge);
    } else {
        console.log('NO challenge!', req.body);
        res.status(200).send('Webhook received');
    }
    // } else {
    //     const folderName = req.body.name;

    //     if (folderName) {
    //         try {
    //             const orderedName = processFolderName(folderName);
    //             const response = await createFolderInBox(orderedName);
    //             res.status(200).send(response.data);
    //         } catch (error) {
    //             console.error('Error creating folder in Box:', error.response.data);
    //             res.status(500).send('Error creating folder in Box');
    //         }
    //     } else {
    //         res.status(400).send('Missing "name" field in payload');
    //     }
    // }
});

export default router;
