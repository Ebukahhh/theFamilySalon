import { contacts, type InsertContact, type Contact } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  listContacts(): Promise<Contact[]>;
}

// --- In-memory fallback (used when DATABASE_URL is not set) ---
class MemoryStorage implements IStorage {
  private store: Contact[] = [];
  private nextId = 1;

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contact: Contact = {
      id: this.nextId++,
      ...insertContact,
      createdAt: new Date(),
    };
    this.store.push(contact);
    return contact;
  }

  async listContacts(): Promise<Contact[]> {
    return [...this.store];
  }
}

// --- Database-backed storage ---
class DatabaseStorage implements IStorage {
  async createContact(insertContact: InsertContact): Promise<Contact> {
    if (!db) throw new Error("Database not initialized");
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }

  async listContacts(): Promise<Contact[]> {
    if (!db) throw new Error("Database not initialized");
    return db.select().from(contacts);
  }
}

export const storage: IStorage = db ? new DatabaseStorage() : new MemoryStorage();