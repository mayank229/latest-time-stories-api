const rp = require('request-promise');
let url = "https://time.com/"

// GET /getTimeStories
exports.getTimeStories = async function(req, res, next) {
    let latestStories = [];
   
    try {
        const html = await rp(url);
        const result = html.match(/<h2 class="title">.*?<\/h2>/gi);
        for(var i=18; i<23; i++) {
            var story = result[i];
            let plainText = story.replace(/<[^>]+>/g, '');
            var storyParts = story.split('href=');
            var link = storyParts[1].split('>');
            latestStories.push({"title": plainText, "link": `https://time.com${link[0]}` });
        }

        return res.status(200).json({
            success: true,
            message: `latest stories retrieved successfully`,
            result: latestStories
        });
        }

    catch(error) {
        return res.status(400).json({
            success: false,
            message: 'Could not process.',
            error: error
        });
    }
};