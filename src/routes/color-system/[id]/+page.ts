import { error } from '@sveltejs/kit';
import { colorSystems } from '$lib/data/colorSystems';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const system = colorSystems.find(s => s.id === params.id);
  
  if (!system) {
    throw error(404, {
      message: 'Color system not found'
    });
  }
  
  return {
    system
  };
}; 