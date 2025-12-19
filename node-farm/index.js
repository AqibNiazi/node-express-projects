const fs = require(`fs`);
const http = require(`http`);
const url = require('url');
const slugify = require('slugify');
// Blocking, synchronous way
// const textIn = fs.readFileSync(`./txt/input.txt`, `utf-8`);
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync(`./txt/output.txt`, textOut);
// console.log(`File written!`);

// Non Block Asynchrounous way

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("will read file");

///////////////////////////////////////////
// SERVER

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%SLUG%}/g, product.slug);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, product.organic);
  return output;
};

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productData = JSON.parse(data);

const slugs = productData.map((el) => slugify(el.productName, { lower: true }));
productData.forEach((el, i) => (el.slug = slugs[i]));
const productMap = {};
productData.forEach((el) => (productMap[el.slug] = el));

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  //Overview Page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    const cardHtml = productData
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace(`{%PRODUCT_CARDS%}`, cardHtml);

    res.end(output);

    //Product Page
  } else if (pathname.startsWith('/product/')) {
    const slug = pathname.slice(9);
    const product = productMap[slug];
    if (product) {
      res.writeHead(200, {
        'Content-type': 'text/html',
      });
      const output = replaceTemplate(tempProduct, product);
      res.end(output);
    } else {
      res.writeHead(404, {
        'Content-type': 'text/html',
      });
      res.end('<h1>Product Not Found!</h1>');
    }

    // Api
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    //Not Found page
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end('<h1>Page Not Found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
