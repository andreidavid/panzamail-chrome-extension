chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('Received message:', request);
    if (request.action === 'getSubject') {
      console.log('Received subject:', request.subject);
      sendSubjectToPython(request.subject);
    }
  });
  
  function sendSubjectToPython(subject) {
    console.log('Sending subject to Python app...');
    chrome.runtime.sendNativeMessage('com.panzamail.app', { subject: subject }, function (response) {
      if (chrome.runtime.lastError) {
        console.error('Error sending message to Python app:', chrome.runtime.lastError);
      } else {
        console.log('Received response from Python app:', response);
      }
    });
  }