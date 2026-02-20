import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { insertContactSchema } from "../shared/schema";

// In-memory store (resets between cold starts — fine for demo)
const contacts: Array<{ id: number; name: string; email: string; message: string; phone?: string | null; createdAt: Date }> = [];
let nextId = 1;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // POST /api/contacts
    if (req.method === "POST") {
        try {
            const input = insertContactSchema.parse(req.body);
            const contact = {
                id: nextId++,
                ...input,
                createdAt: new Date(),
            };
            contacts.push(contact);
            return res.status(201).json(contact);
        } catch (err) {
            if (err instanceof z.ZodError) {
                return res.status(400).json({
                    message: err.errors[0].message,
                    field: err.errors[0].path.join("."),
                });
            }
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    return res.status(405).json({ message: "Method not allowed" });
}
