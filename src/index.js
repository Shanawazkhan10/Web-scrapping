const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
const writeStream = fs.createWriteStream('data.csv')


// writeStream.write(`data`)








request('https://www.imdb.com/search/title/?count=100&groups=top_1000&sort=user_rating',(error,response,html)=>{
     if(!error){
         const $ = cheerio.load(html);  // dollor sign $ loaded all html page value
        //  console.log(load);     successfully html loaded
        // const title = $('.lister-item-header');
        // html() => html code
        // text() => text value
        // find('h1,span,a') => finding particular items
        //  next() => to find next element of selection elements
        //   const item = title.find('span').text()
        $('.lister-item-header').each((i, el)=>{
            const items = $(el)
            .find('a')
            .text()
            .replace(/\s\s+/g, '');
            writeStream.write(`${items}\n`)
          
        })
        console.log('WEBSITE SCRAPED')
     }
})