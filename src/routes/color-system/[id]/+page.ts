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
  
  // Ensure the image path is correctly prefixed
  const imagePath = system.image.startsWith('./images/') 
    ? system.image.replace('./images/', '/images/') 
    : system.image.startsWith('/images/') 
      ? system.image 
      : `/images/${system.image}`;
  
  return {
    system: {
      ...system,
      image: imagePath
    }
  };
}; 