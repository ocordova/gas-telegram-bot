function doPost(e) {
  var update = JSON.parse(e.postData.contents);
  // Make sure this is update is a type message
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var chatId = msg.chat.id;

    // Make sure the update is a command.
    if (
      msg.hasOwnProperty('entities') &&
      msg.entities[0].type == 'bot_command'
    ) {
      // If the user sends the /quote command
      if (msg.text == '/quote') {
        var url =
          'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';
        var data = UrlFetchApp.fetch(url);
        var posts = JSON.parse(data);
        var post = posts.shift();

        // Delete the html tags and \n (newline)
        var cleanContent = post.content.rendered
          .replace(/<(?:.|\n)*?>/gm, '')
          .replace(/\n/gm, '');

        // Format the quote
        var quote =
          '"' +
          cleanContent +
          '"\n — <strong>' +
          post.title.rendered +
          '</strong>';

        var payload = {
          method: 'sendMessage',
          chat_id: String(chatId),
          text: quote,
          parse_mode: 'HTML',
        };

        var data = {
          method: 'post',
          payload: payload,
        };

        // Replace with your token
        var API_TOKEN = '297019760:BAFbL3yMus67Qv3Xu6gQ7VB93Jq4dkVaGP4';
        UrlFetchApp.fetch(
          'https://api.telegram.org/bot' + API_TOKEN + '/',
          data
        );
      }
    }
  }
}
