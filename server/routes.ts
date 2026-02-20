import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { contacts } from "@shared/schema";

async function seedDatabase() {
  const existingContacts = await db.select().from(contacts);
  if (existingContacts.length === 0) {
    await storage.createContact({
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "0501234567",
      message: "I would like to book a hair styling appointment for next Saturday."
    });
    await storage.createContact({
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "0509876543",
      message: "Do you offer beard grooming and a haircut package?"
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  await seedDatabase();

  app.post(api.contacts.create.path, async (req, res) => {
    try {
      const input = api.contacts.create.input.parse(req.body);
      const contact = await storage.createContact(input);
      res.status(201).json(contact);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}