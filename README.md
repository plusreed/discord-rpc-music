# discord-rpc-music
A Node.js program utilizing the Discord RPC API to show playing music

### Requirements
You will need the LTS of Node.js. You can get this [here](https://nodejs.org).

Then, you will need `discord-rpc`. You can get this by running the following **from the root of the repo**: `npm install discord-rpc`.

Once done, make an application for Discord. You can do this [here](https://discordapp.com/developers). Enable Rich Presence on the application. **You don't need the features that Discord requires review for. Don't check them.**

Get the client ID of the application and paste it in the script.

Now, **ensure you have [Snip](https://github.com/dlrudie/Snip)**. You can put it anywhere, but you will need to put the directory in the script as well. **If you're using Windows, you will need two backslashes between directories.** Example: `C:\\Users\\User\\Snip`

Open Snip, right click on it's system tray icon and turn on "Save Information Separately" and "Empty File If No Track Playing". You should also choose your music player.

Once you have everything filled in and ready to go, from the root of the directory run `node app.js`. Your Discord should notice the RPC application and switch your playing status to it.

Congratulations! You're done. Just keep the app running and Discord will continue showing your music.


### Bugs
This program naturally has many bugs. I've tried to minimize the bugs but there is a chance something is broken. It shouldn't be too hard to fix them yourself, though. I do accept pull requests if you would like to fork this repository and push your changes/fixes.

### License
GNU AGPL v3.0
