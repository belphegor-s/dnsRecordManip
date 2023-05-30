const CLOUDFLARE_AUTH_TOKEN = process.env.CLOUDFLARE_AUTH_TOKEN,
    ZONE_ID =  process.env.ZONE_ID;

if(!CLOUDFLARE_AUTH_TOKEN) {
    throw 'CLOUDFLARE_AUTH_TOKEN missing!';
} else if(!ZONE_ID) {
    throw 'ZONE_ID missing!';
}

export { CLOUDFLARE_AUTH_TOKEN, ZONE_ID }