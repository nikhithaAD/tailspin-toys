/**
 * Publisher lookup helpers.
 *
 * These queries provide the stable publisher catalog used by the storefront
 * and game detail views.
 */

import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';

/**
 * Retrieves every publisher ordered alphabetically by name.
 *
 * @param db The database connection used to query the publishers table.
 * @returns A list of publishers sorted by their display name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    const rows = await db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));

    return rows.map((row) => ({ id: row.id, name: row.name }));
}
