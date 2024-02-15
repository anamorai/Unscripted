import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import axios from 'axios';


const QuoteComponent = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuoteAPI = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'http://localhost:8000/quote',
      };

      try {
        const response = await axios.request(options);
        setQuote(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuoteAPI();
  }, []);

  return (
    <Box
      sx={{
        borderRadius: 8,
        boxShadow: 3,
        p: 2,
        textAlign: 'left',
        lineHeight: '1.5',
      }}
    >
      {loading && <CircularProgress />}
      {!loading && (
        <Paper elevation={0} className="grid-item">
          <div className="quote-box">
            <div
              className="quote-icon"
              style={{
                fontSize: '55px', 
              }}
            >
              ❝
            </div>
            <Typography
              variant="body1"
              sx={{
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: 8, 
                textAlign: 'center',
              }}
            >
              {quote.text}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontStyle: 'italic',
                fontSize: 18,
                textAlign: 'right', 
              }}
            >
              - {quote.author}
            </Typography>
          </div>
        </Paper>
      )}
    </Box>
  );
};

export default QuoteComponent;