import * as icons from '@hugeicons/react';
console.log('Keys:', Object.keys(icons).length);
const matches = Object.keys(icons).filter(k => k.toLowerCase().includes('call') || k.toLowerCase().includes('what'));
console.log('Matches:', matches);
