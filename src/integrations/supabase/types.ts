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
      bills: {
        Row: {
          amount: number
          created_at: string
          currency: string | null
          description: string | null
          due_date: string
          id: string
          invoice_number: string | null
          status: string | null
          updated_at: string
          user_id: string
          vendor_name: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string | null
          description?: string | null
          due_date: string
          id?: string
          invoice_number?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
          vendor_name: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string | null
          description?: string | null
          due_date?: string
          id?: string
          invoice_number?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
          vendor_name?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          address: string | null
          company_name: string | null
          created_at: string
          email: string | null
          id: string
          metadata: Json | null
          name: string
          payment_terms: number | null
          phone: string | null
          status: string | null
          tax_id: string | null
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          company_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          metadata?: Json | null
          name: string
          payment_terms?: number | null
          phone?: string | null
          status?: string | null
          tax_id?: string | null
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          company_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          payment_terms?: number | null
          phone?: string | null
          status?: string | null
          tax_id?: string | null
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      entities: {
        Row: {
          created_at: string
          id: string
          monite_entity_id: string | null
          name: string
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          monite_entity_id?: string | null
          name: string
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          monite_entity_id?: string | null
          name?: string
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      invoices: {
        Row: {
          amount: number
          client_name: string
          created_at: string
          currency: string | null
          due_date: string
          id: string
          invoice_number: string
          items: Json
          notes: string | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          client_name: string
          created_at?: string
          currency?: string | null
          due_date: string
          id?: string
          invoice_number: string
          items?: Json
          notes?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          client_name?: string
          created_at?: string
          currency?: string | null
          due_date?: string
          id?: string
          invoice_number?: string
          items?: Json
          notes?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      monite_audit_logs: {
        Row: {
          created_at: string
          details: Json | null
          entity_id: string | null
          event_type: string
          id: string
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          details?: Json | null
          entity_id?: string | null
          event_type: string
          id?: string
          status: string
          user_id: string
        }
        Update: {
          created_at?: string
          details?: Json | null
          entity_id?: string | null
          event_type?: string
          id?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "monite_audit_logs_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "monite_entities"
            referencedColumns: ["id"]
          },
        ]
      }
      monite_entities: {
        Row: {
          created_at: string
          entity_type: string
          id: string
          metadata: Json | null
          monite_id: string
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          entity_type: string
          id?: string
          metadata?: Json | null
          monite_id: string
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          entity_type?: string
          id?: string
          metadata?: Json | null
          monite_id?: string
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      monite_settings: {
        Row: {
          api_key: string
          created_at: string
          entity_id: string
          environment: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          api_key: string
          created_at?: string
          entity_id: string
          environment?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          api_key?: string
          created_at?: string
          entity_id?: string
          environment?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      monite_tokens: {
        Row: {
          access_token: string
          created_at: string
          entity_id: string
          expires_at: string
          id: string
          refresh_token: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          entity_id: string
          expires_at: string
          id?: string
          refresh_token?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          entity_id?: string
          expires_at?: string
          id?: string
          refresh_token?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "monite_tokens_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "monite_entities"
            referencedColumns: ["id"]
          },
        ]
      }
      monite_webhooks: {
        Row: {
          created_at: string
          entity_id: string | null
          event_type: string
          id: string
          payload: Json
          processed_at: string | null
          status: string | null
        }
        Insert: {
          created_at?: string
          entity_id?: string | null
          event_type: string
          id?: string
          payload: Json
          processed_at?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string
          entity_id?: string | null
          event_type?: string
          id?: string
          payload?: Json
          processed_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "monite_webhooks_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "monite_entities"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          id: string
          updated_at: string | null
          user_id: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string | null
          username?: string | null
        }
        Relationships: []
      }
      quick_pay_transactions: {
        Row: {
          amount: number
          created_at: string
          currency: string | null
          id: string
          payment_details: Json | null
          payment_method: string
          recipient_email: string | null
          recipient_name: string
          recipient_phone: string | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string | null
          id?: string
          payment_details?: Json | null
          payment_method: string
          recipient_email?: string | null
          recipient_name: string
          recipient_phone?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string | null
          id?: string
          payment_details?: Json | null
          payment_method?: string
          recipient_email?: string | null
          recipient_name?: string
          recipient_phone?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      wonderpay_capital_applications: {
        Row: {
          application_data: Json | null
          approved_amount: number | null
          created_at: string
          id: string
          interest_rate: number | null
          product: string
          requested_amount: number | null
          status: string | null
          terms: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          application_data?: Json | null
          approved_amount?: number | null
          created_at?: string
          id?: string
          interest_rate?: number | null
          product: string
          requested_amount?: number | null
          status?: string | null
          terms?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          application_data?: Json | null
          approved_amount?: number | null
          created_at?: string
          id?: string
          interest_rate?: number | null
          product?: string
          requested_amount?: number | null
          status?: string | null
          terms?: number | null
          updated_at?: string
          user_id?: string
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
