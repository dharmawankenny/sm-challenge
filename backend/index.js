const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000

const issues = {};

app.use(express.json());
app.use(cors());

app.get('/api/issues', (req, res) => {
    res.send(Object.values(issues));
});

app.get('/api/issues/:id', (req, res) => {
    if (!issues[req.params.id]) {
        res.status(404).send('Issue not found');
        return;
    }
    res.send(issues[req.params.id]);
});

app.post('/api/issues', (req, res) => {
    const issue = req.body;
    if (!issue || !issue.title || !issue.description) {
        console.log(req.body);
        res.status(400).send('Invalid issue');
        return;
    }
    issue.id = Object.keys(issues).length + 1;
    issues[issue.id] = issue;
    res.send(issue);
});

app.put('/api/issues/:id', (req, res) => {
    if (!issues[req.params.id]) {
        res.status(404).send('Issue not found');
        return;
    }
    const issue = req.body;
    issue.id = req.params.id;
    issues[issue.id] = issue;
    res.send(issue);
});

app.delete('/api/issues/:id', (req, res) => {
    if (!issues[req.params.id]) {
        res.status(404).send('Issue not found');
        return;
    }
    delete issues[req.params.id];
    res.send('Issue deleted');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
