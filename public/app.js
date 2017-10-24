/* global fetch, WebSocket, location */
(() => {
    const messages = document.querySelector('#messages');
  
    const showMessage = (message) => {
      console.log(message);
    };
  
    const handleResponse = (response) => {
      return response.ok
        ? response.json().then((data) => JSON.stringify(data, null, 2))
        : Promise.reject(new Error('Unexpected response'));
    };
  
    
  
    let ws;  
    
      ws = new WebSocket("ws://localhost:8080");
      ws.onerror = () => showMessage('WebSocket error');
      ws.onopen = () => showMessage('WebSocket connection established');
      ws.onclose = () => showMessage('WebSocket connection closed');
      ws.onmessage = (msg) => showMessage(msg);

  })();
  