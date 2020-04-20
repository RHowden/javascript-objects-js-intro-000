var playlist = {a: 'b'}

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle
}

function(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
