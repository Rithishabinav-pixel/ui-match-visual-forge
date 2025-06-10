export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_sessions: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          session_token: string
        }
        Insert: {
          created_at?: string
          expires_at: string
          id?: string
          session_token: string
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          session_token?: string
        }
        Relationships: []
      }
      contact_enquiries: {
        Row: {
          created_at: string
          email: string
          id: string
          is_read: boolean
          message: string
          name: string
          phone: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_read?: boolean
          message: string
          name: string
          phone?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_read?: boolean
          message?: string
          name?: string
          phone?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      project_enquiries: {
        Row: {
          created_at: string
          email: string
          id: string
          is_read: boolean
          message: string
          name: string
          phone: string | null
          project_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_read?: boolean
          message: string
          name: string
          phone?: string | null
          project_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_read?: boolean
          message?: string
          name?: string
          phone?: string | null
          project_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_enquiries_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          additional_gallery: Json | null
          amenities: Json | null
          amenities_section: Json | null
          brochure_section: Json | null
          button_link: string | null
          button_text: string | null
          client_feedback: Json | null
          client_name: string
          completion_date: string | null
          created_at: string
          cta_subtitle: string | null
          cta_title: string | null
          faq_section: Json | null
          floor_plans: Json | null
          floor_plans_section: Json | null
          gallery_images: string[]
          gallery_section: Json | null
          hero_description: string | null
          hero_image: string | null
          hero_section: Json | null
          hero_tags: string[] | null
          highlights: string[]
          id: string
          location: string | null
          location_details: Json | null
          nearby_locations_section: Json | null
          objectives: string | null
          overview: string | null
          progress_gallery: Json | null
          project_detail_section: Json | null
          project_details: Json | null
          project_info_stats: Json | null
          specifications: Json | null
          specifications_section: Json | null
          status: string[]
          subtitle: string | null
          timeline_steps: Json
          title: string
          type: string
          unit_sizes: string | null
          unit_types: string | null
          updated_at: string
          video_section: Json | null
        }
        Insert: {
          additional_gallery?: Json | null
          amenities?: Json | null
          amenities_section?: Json | null
          brochure_section?: Json | null
          button_link?: string | null
          button_text?: string | null
          client_feedback?: Json | null
          client_name: string
          completion_date?: string | null
          created_at?: string
          cta_subtitle?: string | null
          cta_title?: string | null
          faq_section?: Json | null
          floor_plans?: Json | null
          floor_plans_section?: Json | null
          gallery_images?: string[]
          gallery_section?: Json | null
          hero_description?: string | null
          hero_image?: string | null
          hero_section?: Json | null
          hero_tags?: string[] | null
          highlights?: string[]
          id?: string
          location?: string | null
          location_details?: Json | null
          nearby_locations_section?: Json | null
          objectives?: string | null
          overview?: string | null
          progress_gallery?: Json | null
          project_detail_section?: Json | null
          project_details?: Json | null
          project_info_stats?: Json | null
          specifications?: Json | null
          specifications_section?: Json | null
          status?: string[]
          subtitle?: string | null
          timeline_steps?: Json
          title: string
          type: string
          unit_sizes?: string | null
          unit_types?: string | null
          updated_at?: string
          video_section?: Json | null
        }
        Update: {
          additional_gallery?: Json | null
          amenities?: Json | null
          amenities_section?: Json | null
          brochure_section?: Json | null
          button_link?: string | null
          button_text?: string | null
          client_feedback?: Json | null
          client_name?: string
          completion_date?: string | null
          created_at?: string
          cta_subtitle?: string | null
          cta_title?: string | null
          faq_section?: Json | null
          floor_plans?: Json | null
          floor_plans_section?: Json | null
          gallery_images?: string[]
          gallery_section?: Json | null
          hero_description?: string | null
          hero_image?: string | null
          hero_section?: Json | null
          hero_tags?: string[] | null
          highlights?: string[]
          id?: string
          location?: string | null
          location_details?: Json | null
          nearby_locations_section?: Json | null
          objectives?: string | null
          overview?: string | null
          progress_gallery?: Json | null
          project_detail_section?: Json | null
          project_details?: Json | null
          project_info_stats?: Json | null
          specifications?: Json | null
          specifications_section?: Json | null
          status?: string[]
          subtitle?: string | null
          timeline_steps?: Json
          title?: string
          type?: string
          unit_sizes?: string | null
          unit_types?: string | null
          updated_at?: string
          video_section?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
