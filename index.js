const cheerio = require('cheerio');
const request = require('request-promise');

cors();

async function init(){
    const $ = await request({
        uri: 'https://articulo.mercadolibre.com.co/MCO-837869156-escritorio-gamer-max-wenguerojo-_JM#backend=item_decorator&backend_type=function&client=bookmarks-polycard',
        transform: body => cheerio.load(body)
    });
        
    const title = $('title');
    console.log(title.html())
}

            
init();