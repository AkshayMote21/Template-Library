import { Router } from "express";
import TemplateRoutes from './template.routes.js';

const router = Router();
router.use("/template",TemplateRoutes);

export default router;