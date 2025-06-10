
-- Add new columns to projects table for dynamic content sections
ALTER TABLE projects ADD COLUMN IF NOT EXISTS hero_image text;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS hero_tags text[] DEFAULT '{}';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS project_details jsonb DEFAULT '{}';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS video_section jsonb DEFAULT '{}';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS amenities jsonb DEFAULT '[]';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS faq_section jsonb DEFAULT '[]';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS additional_gallery jsonb DEFAULT '[]';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS floor_plans jsonb DEFAULT '[]';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS brochure_section jsonb DEFAULT '{}';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS progress_gallery jsonb DEFAULT '[]';

-- Update the projects table to include more flexible content structure
ALTER TABLE projects ADD COLUMN IF NOT EXISTS hero_description text;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS specifications jsonb DEFAULT '{}';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS location_details jsonb DEFAULT '{}';
