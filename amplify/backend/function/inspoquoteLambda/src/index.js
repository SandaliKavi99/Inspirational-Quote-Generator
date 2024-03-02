/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const doClient = new AWS.DynamoDB.DocumentClient();
const sharp = require('sharp');
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');

//update function DynamoDB table
async function updateQuoteDBObject() {
    const quoteTableName = process.env.API_INSPIRATIONALQUOTES_QUOTEAPPDATATABLE_NAME;
    const quoteObjectID = "12232-234532-234234234-234234234";

    try {

        var quoteParams = {
            TableName: quoteTableName,
            Key: {
                "id": quoteObjectID,
            },
            updateExpression: "SET #quotesGenerated = #quotesGenerated + :inc",
            ExpressionAttributeValues: {
                ":inc": 1,
            },
            ExpressionAttributeNames: {
                "#quotesGenerated": "quotesGenerated",
            },
            ReturnValues: "UPDATED_NEW"
        };

        const updateQuoteObject = await doClient.update(quoteParams).promise();
        return updateQuoteDBObject;

    } catch (error) {
         console.log(`error updating quote object in DynamoDB`, error);
    }

}



export async function handler(event) {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const apiURL = "https://zenquotes.io/api/random";

    async function getRandomQuote(apiURL) {
        let quoteText;
        let quoteAuthor;
      
        const response = await fetch(apiURL);
        var quoteData = await response.json();
      
        quoteText = quoteData[0].q;
        quoteAuthor = quoteData[0].a;
      
        const width = 750;
        const height = 483;
        const text = quoteText;
        const words = text.split(" ");
        const lineBreak = 4;
        let newText = "";
      
        let tspanElements = "";
        for (let i = 0; i < words.length; i++) {
          newText += words[i] + " ";
          if ((i + 1) % lineBreak == 0) {
            tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
          }
        }
      
        console.log(tspanElements);
        if (newText !== "") {
          tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
        }
        const svgImage = `<svg width="${width}" height="${height}">
          <style>
              .title{
                  fill:#ffffff;
                  font-size:20px;
                  font-weigh:bold;
              }
              .quoteAuthorStyle{
                  font-size:35px;
                  font-weight:bold;
                  padding:50px;
              }
              .footerStyle{
                  font-size:20px;
                  font-weight:bold;
                  fill: lightgrey;
                  text-anchor: middle;
                  font-family:Verdana;
              }
           </style>
           <circle cx="382" cy="76" r="44" fill="rgba(255, 255, 255, 0.155"/>
           <text x="382" y="76" dy="50" text-anchor="middle" font-size="90" font-family="Verdana" fill="white">"</text>
           <g>
              <rect x="0" y="0" width="${width}" height="auto"></rect>
              <text id="lastLineOfQuote" x="375" y="420" dy="50" text-anchor="middle" font-size="35" font-family="Verdana" fill="white">${tspanElements}</text>
              <tspan class="quoteAuthorStyles" x="375" dy="1.8em">- ${quoteAuthor}</tspan>
           </g>
           <text x="${width / 2}" y="${height - 10}" class="footerStyle">Developed by @Sandali99 | Quotes from ZenQuotes.io</text>
           </svg>  
        `;
      
        const backgroundImages = [
          "backgrounds/Master_Card.jpg",
          "backgrounds/Hydrogen.jpg",
          "backgrounds/Grade_Grey.jpg",
          "backgrounds/Purple_Love.jpg",
        ];
      
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        const backgroundImage = backgroundImages[randomIndex];
        const timestamp = new Date().toLocaleString().replace(/[^\d]/g, "");
        const svgBuffer = Buffer.from(svgImage);
        const imagePath = path.join('/tmp', 'quote-card.png')
        const image = await sharp(backgroundImage)
          .composite([
            {
              input: svgBuffer,
              top: 50,
              left: 50,
            },
          ])
          .toFile(imagePath);

          //update DynamoDB object in table

          try{

            updateQuoteDBObject();

          } catch (error) {
            console.log(`error updating quote object in DynamoDB`,error);
          }

          return {
            statusCode: 200,
        //  Uncomment below to enable CORS requests
            headers: {
                "Content-Type": "image/png",
                "Access-Control-Allow-Origin": "*",
            },
            body: fs.readFileSync(imagePath).toString('base64'),
            isBase64Encoded: true,
            };
        return await getRandomQuote(apiURL);
      }

   
}
