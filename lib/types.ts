export interface HairStyle {
  id: string;
  name: string;
  description: string;
  category: 'short' | 'medium' | 'long' | 'curly' | 'straight' | 'wavy' | 'modern' | 'classic';
  prompt: string;
}

export interface GenerationRequest {
  image: string;
  prompt: string;
  styleId: string;
  additionalInstructions?: string;
}

export interface GenerationResult {
  id: string;
  originalImage: string;
  generatedImage: string;
  prompt: string;
  timestamp: number;
}
