
-- Add the missing gallery_section column to the projects table
ALTER TABLE projects ADD COLUMN gallery_section jsonb;
