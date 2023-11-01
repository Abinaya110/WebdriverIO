describe('Web application', async () => {
    it('should test the website', async () => {
        const domain = "twinmo.ai";


        await browser.url("https://twinmo.ai/services");
        console.log(await browser.getTitle());

        await expect(browser).toHaveTitleContaining("Tailored Support for Product Development | Twinmo Services")
    
    
        
    
    
    
    
    
    
    });


});
  