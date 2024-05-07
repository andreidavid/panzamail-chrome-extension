# PanzaMail Chrome Extension

## Description  

This is a POC Chrome extension for PanzaMail. It is a simple extension that allows the user to interact with the main PanzaMail application from the Gmail web app (running in Chrome). The extension activates when the user opens the compose window in Gmail, and sends the subject of the email to the PanzaMail application bridge using the native messaging API. For our POC, the bridge is a simple Python script that receives the subject and prints it to ``messages_log.txt``. For the production version, the bridge will be a more complex script that will interact with the PanzaMail application via some type of communication protocol.

## Installation

Run the extension in developer mode in Chrome.

Copy ``com.panzamail.app.com`` to ``/Library/Google/Chrome/NativeMessagingHosts/com.panzamail.app.json`` and update the path to the ``app.py`` script, as well as the extension ID.