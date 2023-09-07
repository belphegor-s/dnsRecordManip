const CLOUDFLARE_AUTH_TOKEN = process.env?.CLOUDFLARE_AUTH_TOKEN || '',
    ZONE_ID =  process.env?.ZONE_ID || '',
    AUTH_TOKEN = process.env?.AUTH_TOKEN || '';

if(!CLOUDFLARE_AUTH_TOKEN) {
    throw new Error(`CLOUDFLARE_AUTH_TOKEN missing!`)
} else if(!ZONE_ID) {
    throw new Error(`ZONE_ID missing!`)
} else if(!AUTH_TOKEN) {
    throw new Error(`AUTH_TOKEN missing!`)
}

export { CLOUDFLARE_AUTH_TOKEN, ZONE_ID, AUTH_TOKEN }