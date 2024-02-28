import { BackgroudImage1, BackgroudImage2, FooterContainer, FooterLink, GradientBackgroundCon, QuoteGeneratorButton, QuoteGeneratorButtonText, QuoteGeneratorContainer, QuoteGeneratorInnerContainer, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from "@/components/QuoteGenerator/QuoteGeneratorElements";
import Head from "next/head";
import cloud1 from '@/assests/cloudy.png';
import cloud2 from '@/assests/lightning-cloud.png'
import { useEffect, useState } from "react";
import { GraphQLResult, generateClient } from 'aws-amplify/api';
import { quotesQueryName } from "@/src/graphql/queries";
import QuoteGeneratorModal from '@/components/QuoteGenerator';

// import {API } from 'aws-amplify';

//interface for our Dynamodb

interface UpdateQuoteInfoData{
  id:string;
  queryName:string;
  quotesGenerated: number;
  createAt: string;
  updateAt: string;
}

function isGraphQLResultForquotesQueryName(response : any):response is GraphQLResult<{
  quotesQueryName:{
    items: [UpdateQuoteInfoData];
  };
}>{
  return response.data && response.data.quotesQueryName && response.data.quotesQueryName.items;
}

export default function Home() {

  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  const [openGenerator,setOpenGenerator] = useState<boolean>(false);
  const [processingQuotes, setProcessingQuotes] = useState<boolean>(false);
  const [quoteReceived, setQuoteReceived] = useState<String | null>(null);


  //fetch our dynamodb objects
  

  const client = generateClient();



  const updateQuoteInfo = async()=>{
    try{

      const response = await client.graphql<UpdateQuoteInfoData>({
          query: quotesQueryName,
          variables: {
            queryName: "LIVE",
          },
      })
      // console.log('response',response);

      if(!isGraphQLResultForquotesQueryName(response)){
        throw new Error('Unexpected response from API.graphql');
      }

      if(!response.data){
        throw new Error('Response data is undefined');
      }

      const receivedNumberOfQuotes = response.data.quotesQueryName.items[0].quotesGenerated;
      setNumberOfQuotes(receivedNumberOfQuotes);

    }catch(error)
    {
          console.log('error getting with quote data',error)
    }
  }

  useEffect(()=>{
    updateQuoteInfo();
  },[]);


  const handleCloseGenerator=()=>{
    setOpenGenerator(false);
  }
  
  const handleOpenGenerator = async (e: React.SyntheticEvent)=>{
    e.preventDefault();
    setOpenGenerator(true);
    setProcessingQuotes(true);

    try{

      // setProcessingQuotes(false);
      setTimeout(()=>{
        setProcessingQuotes(false);
      },3000);
    }catch(error){
      console.log('error generating quote.',error);
      setProcessingQuotes(false);
    }
  }
  
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="Sample project for quote generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <GradientBackgroundCon>

      <QuoteGeneratorModal
          open={openGenerator}
          close={handleCloseGenerator}
          processingQuote={processingQuotes}
          setProcessingQuote={setProcessingQuotes}
          quoteReceived={quoteReceived}
          setQuoteReceived={setQuoteReceived}
      
      /> 

      <QuoteGeneratorContainer>

        <QuoteGeneratorInnerContainer>

         <QuoteGeneratorTitle> Daily Inspiration Generator </QuoteGeneratorTitle>
          
          <QuoteGeneratorSubTitle>
            Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <FooterLink href='https://zenqoutes.io/' target="_blank">ZenQuotes API</FooterLink>
          </QuoteGeneratorSubTitle> 
          
          <QuoteGeneratorButton  onClick={handleOpenGenerator}>
            <QuoteGeneratorButtonText>Make a quote</QuoteGeneratorButtonText> 
          </QuoteGeneratorButton>

        </QuoteGeneratorInnerContainer>

      </QuoteGeneratorContainer>


      
      <BackgroudImage1 src={cloud1} alt="cloudyImage"></BackgroudImage1>

      <BackgroudImage2 src={cloud2} alt="lightning image"></BackgroudImage2>
      
      <FooterContainer>
        <>
        Quote Generator : {numberOfQuotes}
        <br></br>
        Developed by <FooterLink href="https://github.com/SandaliKavi99/Quote-Generator.git" target='_blank'>@Sandali99</FooterLink> 
        </>
      </FooterContainer>

     </GradientBackgroundCon>




    </>
  );
}
