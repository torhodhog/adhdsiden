const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!;
const CHANNEL_ID = 'UC0OYa2s7OMpxkxdkCU1HJKQ';

export async function getLatestVideos() {
  // Steg 1: Hent uploads playlistId
  const res1 = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
  );
  const data1 = await res1.json();
  const playlistId = data1.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!playlistId) {
    console.error('Fant ikke uploads-playlist ID');
    return [];
  }

  // Steg 2: Hent videoer fra playlisten
  const res2 = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${playlistId}&key=${API_KEY}`
  );
  const data2 = await res2.json();
  return data2.items;
}
