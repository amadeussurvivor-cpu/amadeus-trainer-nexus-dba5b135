export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      access_codes: {
        Row: {
          code: string
          created_at: string | null
          is_used: boolean | null
          used_by: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          is_used?: boolean | null
          used_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          is_used?: boolean | null
          used_by?: string | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: number
          message: string
          status: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: never
          message: string
          status?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: never
          message?: string
          status?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          access_coches: boolean | null
          access_hoteles: boolean | null
          access_vuelos: boolean | null
          activated_at: string | null
          cars_call: number | null
          cars_cheatsheet_read: boolean | null
          cars_manual_read: boolean | null
          cars_rooms_completed: string[] | null
          cars_step: number | null
          chuleta_read: boolean | null
          completed_categories: string[] | null
          current_call: number | null
          current_step: number | null
          email: string | null
          has_access: boolean | null
          hotel_call: string | null
          hotel_step: number | null
          id: string
          last_training: string | null
          manual_read: boolean | null
          preferred_difficulty: string | null
          session_start: string | null
          training_times: Json | null
          updated_at: string | null
          vuelos_call: number | null
          vuelos_step: number | null
        }
        Insert: {
          access_coches?: boolean | null
          access_hoteles?: boolean | null
          access_vuelos?: boolean | null
          activated_at?: string | null
          cars_call?: number | null
          cars_cheatsheet_read?: boolean | null
          cars_manual_read?: boolean | null
          cars_rooms_completed?: string[] | null
          cars_step?: number | null
          chuleta_read?: boolean | null
          completed_categories?: string[] | null
          current_call?: number | null
          current_step?: number | null
          email?: string | null
          has_access?: boolean | null
          hotel_call?: string | null
          hotel_step?: number | null
          id: string
          last_training?: string | null
          manual_read?: boolean | null
          preferred_difficulty?: string | null
          session_start?: string | null
          training_times?: Json | null
          updated_at?: string | null
          vuelos_call?: number | null
          vuelos_step?: number | null
        }
        Update: {
          access_coches?: boolean | null
          access_hoteles?: boolean | null
          access_vuelos?: boolean | null
          activated_at?: string | null
          cars_call?: number | null
          cars_cheatsheet_read?: boolean | null
          cars_manual_read?: boolean | null
          cars_rooms_completed?: string[] | null
          cars_step?: number | null
          chuleta_read?: boolean | null
          completed_categories?: string[] | null
          current_call?: number | null
          current_step?: number | null
          email?: string | null
          has_access?: boolean | null
          hotel_call?: string | null
          hotel_step?: number | null
          id?: string
          last_training?: string | null
          manual_read?: boolean | null
          preferred_difficulty?: string | null
          session_start?: string | null
          training_times?: Json | null
          updated_at?: string | null
          vuelos_call?: number | null
          vuelos_step?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      activate_cars_license: {
        Args: { input_code: string; user_id: string }
        Returns: boolean
      }
      activate_hotel_license: {
        Args: { input_code: string; user_id: string }
        Returns: boolean
      }
      activate_license:
        | { Args: { input_code: string }; Returns: boolean }
        | { Args: { input_code: string; user_id: string }; Returns: boolean }
      activate_vuelos_license: {
        Args: { input_code: string; user_id: string }
        Returns: boolean
      }
      admin_delete_user: {
        Args: { target_user_id: string }
        Returns: undefined
      }
      generate_new_codes_with_prefix: {
        Args: { prefix_text: string; qty: number }
        Returns: undefined
      }
      is_admin: { Args: never; Returns: boolean }
      reset_access_code: { Args: { target_code: string }; Returns: undefined }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
