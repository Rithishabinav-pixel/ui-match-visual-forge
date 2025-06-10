
-- Add new dynamic section columns to the projects table
ALTER TABLE projects 
ADD COLUMN hero_section jsonb,
ADD COLUMN project_info_stats jsonb,
ADD COLUMN project_detail_section jsonb,
ADD COLUMN amenities_section jsonb,
ADD COLUMN nearby_locations_section jsonb,
ADD COLUMN specifications_section jsonb,
ADD COLUMN floor_plans_section jsonb;
