
-- Clear all specifications_section data from existing projects
UPDATE projects 
SET specifications_section = NULL 
WHERE specifications_section IS NOT NULL;
