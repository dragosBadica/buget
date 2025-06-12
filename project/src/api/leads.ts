import { supabase } from '../lib/supabase';

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  gdpr: boolean;
}

export async function submitLead(formData: LeadData): Promise<{ 
  success: boolean; 
  downloadUrl?: string; 
  message?: string;
  error?: string;
}> {
  try {
    // Inserează datele în tabelul 'leads'
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          gdpr_consent: formData.gdpr,
          source: 'dragos-badica-landing-page',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return {
        success: false,
        error: 'Eroare la salvarea datelor. Te rog încearcă din nou.'
      };
    }

    console.log('Lead saved successfully:', data);

    // Returnează URL-ul de download
    return {
      success: true,
      downloadUrl: '/budget-template.xlsx',
      message: 'Datele au fost salvate cu succes!'
    };

  } catch (error) {
    console.error('Error submitting lead:', error);
    return {
      success: false,
      error: 'Eroare neașteptată. Te rog încearcă din nou.'
    };
  }
}