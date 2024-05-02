const teslaStockData = [
    { date: '2024-01-01', price: 800 },
    // ... more data points
    { date: '2024-05-01', price: 1200 }
  ];
  
  // Prepare the data for the mountain chart
  const trace = {
    x: teslaStockData.map(data => data.date),
    y: teslaStockData.map(data => data.price),
    type: 'scatter',
    mode: 'lines',
    fill: 'tozeroy', // This creates the mountain chart effect
    line: { color: 'green' } // Color of the mountain chart
  };
  
  // Define the layout for the chart
  const layout = {
    title: 'Tesla Stock Market Graph',
    xaxis: {
      title: 'Date',
      type: 'date'
    },
    yaxis: {
      title: 'Stock Price (USD)'
    }
  };
  
  // Plot the chart
  Plotly.newPlot('myDiv', [trace], layout);