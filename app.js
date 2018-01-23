const DiscordRPC = require("discord-rpc");
const fs = require('fs')

const ClientId = 'client_id_here';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

const snip = "path/to/snip/directory";

// Get Snip files.
// The user needs to have "Save Information Separately" enabled in Snip for this to work.
var s_name = fs.readFileSync(snip + "Snip_Track.txt", "utf-8");
var s_artist = fs.readFileSync(snip + "Snip_Artist.txt", "utf-8");
var s_newartist = null;
var s_newname = null;

async function set_status(details, state) {
  rpc.setActivity({
    details: details,
    state: state,
    instance: false,
  });
}

rpc.on('ready', () => {
  console.log("rpc is ready!");
  if(!s_artist && !s_name) { 
    console.log("nothing is playing at the moment!");
    set_status("Nothing", "Nothing (no song playing)");
  } else { 
  console.log("current song is " + s_artist + " - " + s_name);
  set_status(s_artist, s_name);
  }

  fs.watch(snip + "Snip_Track.txt", () => {
    s_newname = fs.readFileSync(snip + "Snip_Track.txt", "utf-8");
  });

  fs.watch(snip + "Snip_Artist.txt", () => {
    s_newartist = fs.readFileSync(snip + "Snip_Artist.txt", "utf-8");
  });

  setInterval(() => {
    if(!s_artist && !s_name) {
      set_status("Nothing", "Nothing (no song playing)");
    }
    var newSong = s_newartist + " - " + s_newname;
    var current = s_artist + " - " + s_name;
    if(current === newSong || s_newartist === null && s_newname == null) { 
      set_status(s_artist, s_name);
    } else {
      console.log(`changing to ${newSong}`);
      set_status(s_newartist, s_newname);
      s_artist = s_newartist;
      s_name = s_newname;
    }
  }, 15e3);
});

rpc.login(ClientId).catch(console.error);
