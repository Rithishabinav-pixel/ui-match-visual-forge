
-- Delete all existing project data
DELETE FROM project_enquiries;
DELETE FROM projects;

-- Reset the auto-increment sequences if needed
-- This ensures clean IDs for new projects
