import { Router } from "express";
import { CreateTemplate, GetAllTemplates, UpdateTemplate } from "../controllers/template.controller.js";

const router = Router();

router.post('/create-template',CreateTemplate);
router.get('/get-all-templates',GetAllTemplates);
router.put('/update-template',UpdateTemplate);

export default router;


