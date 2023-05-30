import { Request, Response } from "express"
import { CLOUDFLARE_AUTH_TOKEN, ZONE_ID } from "../util/env";
import axios from "axios";

const getDNSRecords = async (req: Request, res: Response) => {
    let success = false, msg = '';
    try {
        const response = await axios.get(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records`, {
            headers: {
                'Authorization': `Bearer ${CLOUDFLARE_AUTH_TOKEN}`
            }
        });

        if(response && response.status === 200) {
            success = true;
            msg = 'Successfully fetched DNS records';
            res.status(200).json({success, msg, data: response.data});
        }
    } catch(e) {
        console.log(`Error fetching DNS Records -> ${e}`);
        msg = 'Internal Server Error';
        res.status(500).json({success, msg});
    }
}

const addDNSRecord = async (req: Request, res: Response) => {
    let success = false, msg = '';

    const record = (typeof req.body === 'object' && Object.keys(req.body)?.length > 0 && req.body) || {};

    if(!record) {
        msg = 'Invalid Record'
        res.status(422).json({success, msg})
    }

    try {
        const response = await axios.post(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records`, record, {
            headers: {
                'Authorization': `Bearer ${CLOUDFLARE_AUTH_TOKEN}`
            }
        });


        if(response && response.status === 200) {
            success = true;
            msg = 'Successfully added DNS Record';
            res.status(200).json({ success, msg, data: response.data });
        }
    } catch(e) {
        console.log(`Error adding DNS Records -> ${e}`);
        msg = 'Internal Server Error';
        res.status(500).json({success, msg});
    }
}

const updateDNSRecord = async (req: Request, res: Response) => {
    let success = false, msg = '';

    const record = (req.body?.record && typeof req.body?.record === 'object' && Object.keys(req.body?.record)?.length > 0 && req.body?.record) || {},
        identifier = (req.body?.identifier && typeof req.body?.identifier === 'string' && req.body?.identifier?.trim()?.length > 0 && req.body?.identifier?.trim()) || '';

    if(!record) {
        msg = 'Invalid Record'
        res.status(422).json({success, msg})
    } else if(!identifier) {
        msg = 'Invalid Identifier'
        res.status(422).json({success, msg})
    }

    try {
        const response = await axios.put(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records/${identifier}`, record, {
            headers: {
                'Authorization': `Bearer ${CLOUDFLARE_AUTH_TOKEN}`
            }
        });

        if(response && response.status === 200) {
            success = true;
            msg = 'Successfully updated DNS Record';
            res.status(200).json({ success, msg, data: response.data });
        }
    } catch(e) {
        console.log(`Error updating DNS Record -> ${e}`);
        msg = 'Internal Server Error';
        res.status(500).json({success, msg});
    }
}

const deleteDNSRecord = async (req: Request, res: Response) => {
    let success = false, msg = '';

    const identifier = (req.body?.identifier && typeof req.body?.identifier === 'string' && req.body?.identifier?.trim()?.length > 0 && req.body?.identifier?.trim()) || '';

    if(!identifier) {
        msg = 'Invalid Identifier'
        res.status(422).json({success, msg})
    }

    try {
        const response = await axios.delete(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records/${identifier}`, {
            headers: {
                'Authorization': `Bearer ${CLOUDFLARE_AUTH_TOKEN}`
            }
        });

        if(response && response.status === 200) {
            success = true;
            msg = 'Successfully deleted DNS Record';
            res.status(200).json({ success, msg, data: response.data });
        }
    } catch(e) {
        console.log(`Error deleting DNS Record -> ${e}`);
        msg = 'Internal Server Error';
        res.status(500).json({success, msg});
    }
}

export { getDNSRecords, addDNSRecord, updateDNSRecord, deleteDNSRecord }