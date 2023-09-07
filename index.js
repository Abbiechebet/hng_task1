import express from 'express';
const app = express();

const PORT = 3000;

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;

    if (!slack_name || !track) {
        return res.status(400).json({ message: 'slack_name and track are required query parameters' });
    }

    const currentDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const response = {
        slack_name: slack_name,
        current_day: days[currentDate.getUTCDay()],
        utc_time: currentDate.toISOString(),
        track: track,
        github_file_url: "https://github.com/Abbiechebet/hng_task1/blob/main/index.js", 
        github_repo_url: "https://github.com/Abbiechebet/hng_task1",  
        status_code: 200
    };

    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
