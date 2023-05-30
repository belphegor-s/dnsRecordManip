import { Router } from "express";
import { getDNSRecords, addDNSRecord, updateDNSRecord, deleteDNSRecord } from "../controllers/dnsRecord";
const router = Router();

router.get('/api/getDNSRecords', getDNSRecords)
router.post('/api/addDNSRecord', addDNSRecord)
router.put('/api/updateDNSRecord', updateDNSRecord)
router.delete('/api/deleteDNSRecord', deleteDNSRecord)

export default router;