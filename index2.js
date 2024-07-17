import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 10000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Replace with your Box API details
const boxAccessToken = 'YOUR_BOX_ACCESS_TOKEN';
const parentFolderId = 'TBD_PARENT_FOLDER_ID';

app.post("/candidates", async (req, res) => {
    // Log the incoming request body
    console.log(JSON.stringify(req.body, null, 2));

    // Check for a challenge in the request body
    if (req.body.challenge) {
        // Respond with the challenge
        res.status(200).send(req.body.challenge);
    } else {
        // Extract the name field from the payload
        const folderName = req.body.name;

        if (folderName) {
            try {
                // Assuming req.body.name contains the name field from the payload
const folderName = req.body.name;

    if (folderName) {
        // Split the name into parts
        const nameParts = folderName.trim().split(' ');

        // Extract the last name (always the final part)
        const lastName = nameParts.pop();

        // Combine the parts in the desired order: "last", "first" "second"(if exists), etc.
        const orderedName = [lastName, ...nameParts].join(', ');

        console.log(orderedName); // Example output: "last, first, second, third"

        // Use orderedName as your folder name
        // For example:
        const folderPath = `/path/to/your/folder/${orderedName}`;
        // Create the folder or use the folderPath as needed
    } else {
        console.error('Name field is missing in the payload.');
    }

                // Send a request to Box to create a new folder
                const response = await axios.post(
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

                // Respond with the Box API response
                res.status(200).send(response.data);
            } catch (error) {
                // Handle errors from Box API
                console.error('Error creating folder in Box:', error.response.data);
                res.status(500).send('Error creating folder in Box');
            }
        } else {
            res.status(400).send('Missing "name" field in payload');
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
