# Google Apps Script Telegram Bot

🤖 A simple [Telegram Bot](https://core.telegram.org/bots/api) that replies with a random quote from [quotesondesign.com](http://quotesondesign.com/)

The step by step explanation is available in [my blog](https://ocordova.me/blog/telegram-bot-with-apps-script).

<img src="https://cloud.githubusercontent.com/assets/694736/19078172/dddc7e86-8a14-11e6-80a0-c8ff5010c6f7.gif" height="480">

## Try it out

You can test it just by starting a conversation with [DesignQuotesBot](https://telegram.me/DesignQuotesBot) and sending the command `/quote`.

## Set it up

1.  Visit **script.google.com/start** to open the script editor.
1.  **Delete** any code in the script editor and paste in the code in code.gs
1.  **Replace** the constants `API_TOKEN` and `BOT_USERNAME`.
1.  Select the menu item **File > Save**. Name your new script and click **OK**.
1.  Select the **Run** menu, select the function **doPost**.
1.  In the dialog **Authorization required**, click **Review Permissions** and click **Allow**.
1.  Select **Publish > Deploy as web app**.
1.  Under **Project version**, select **New**.
1.  Under **Execute the app as**, select your account.
1.  Under **Who has access to the app**, select "Anyone, even anonymous".
1.  Click **Deploy**.
1.  **Copy** the URL labeled **Current web app URL** and ends in **/exec**
1.  **Set up** the **Webhook** by visting the URL in your browser: 
     `https://api.telegram.org/bot<API_TOKEN>/setWebhook?url=<WEB_APP_URL>`

## License

This is free and unencumbered software released into the public domain. For more information, see <http://unlicense.org/> or the accompanying UNLICENSE file.


&#10084;
