# DNS Records Manipulation

Express API for CRUD operations on DNS records (Cloudflare Namservers via Cloudflare APIs)

### Local setup
- Make sure you have NodeJS installed v^16+
- Clone the repo and install dependencies via `npm i`
- Add environment variables in `.env` file at root of the project
    ```bash
    CLOUDFLARE_AUTH_TOKEN=<your_cloudflare_auth_token>
    ZONE_ID=<your_cloudflare_zone_id>
    AUTH_TOKEN=<your_auth_token> # for api endpoint authentication middleware
    ```
- Build for production and fire up the server `npm run build && npm start`

### Endpoints

**GET**: `/api/getDNSRecords` → For getting all the DNS Records configured on Cloudflare Nameserver

**POST**: `/api/addDNSRecord` → For adding a single DNS record

**PUT**: `/api/updateDNSRecord` → For updating a single DNS record

**DELETE**: `/api/deleteDNSRecord` → For deleting a single DNS record by passing an identifier