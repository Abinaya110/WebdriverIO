describe('Web application', async () => {
    it('should test the website', async () => {
        const domain = "twinmo.ai";


        await browser.url("https://twinmo.ai/");
        console.log(await browser.getTitle());
    });
});
