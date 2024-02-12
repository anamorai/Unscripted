import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './QuoteComponent.css'; // Import the CSS file for any additional styling

const QuoteComponent = () => {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });

  useEffect(() => {
    // Fetch quote data from your API
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://example.com/api/quote');
        const data = await response.json();
        setQuoteData(data); // Assuming the API returns an object with 'quote' and 'author' properties
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <Box
      sx={{
        borderRadius: 8,
        boxShadow: 3,
        p: 2, 
      }}
    >
      <Paper elevation={0} className="grid-item">
        <div className="quote-box">
          <div className="quote-icon">❝</div>
          <Typography variant="body1" className="quote">
            {quoteData.quote}
          </Typography>
          <Typography variant="caption" className="author">
            - {quoteData.author}
          </Typography>
        </div>
      </Paper>
    </Box>
  );
};

export default QuoteComponent;
