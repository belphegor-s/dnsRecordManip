import { Router } from "express";
import { getDNSRecords, addDNSRecord, updateDNSRecord, deleteDNSRecord } from "../controllers/dnsRecord";
import { authMiddleware } from "../middleware/auth";
const router = Router();

router.get('/api/getDNSRecords', authMiddleware, getDNSRecords)
router.post('/api/addDNSRecord', authMiddleware, addDNSRecord)
router.put('/api/updateDNSRecord', authMiddleware, updateDNSRecord)
router.delete('/api/deleteDNSRecord', authMiddleware, deleteDNSRecord)

export default router;