sites = 
[
    {
        url: "https://shop.wrexhamafc.co.uk/product/2023-24-third-shirt/",
        keywordsToInclude: "IN STOCK",
        keywordsToExclude: "OUT OF STOCK"
    },
];

// 1000 = 1 second, 5000 = 5 seconds
pollFrequency = 5000;

playAlert = true;

webhookURL = "";

module.exports = {
    sites,
    pollFrequency,
    playAlert,
    webhookURL
}
