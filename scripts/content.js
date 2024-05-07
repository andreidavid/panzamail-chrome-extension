function getSubject() {
    console.log('Getting subject...');
    const subjectInput = document.querySelector('input[name="subjectbox"]');
    if (subjectInput) {
        console.log('Subject:', subjectInput.value);
      const subject = subjectInput.value;
      chrome.runtime.sendMessage({ action: 'getSubject', subject: subject });
    }
  }
  
  setInterval(getSubject, 1000);