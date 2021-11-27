
import { powerStylesForSapper } from './sapperActions';
import { powerStylesForSvelte } from './svelteActions';
import { powerStylesForSvelteKit } from './sveltekitActions';


export const switchPlataform = (plataform) => {
    switch (plataform) {
        case 'sveltekit':
            return powerStylesForSvelteKit;
        case 'sapper':
            return powerStylesForSapper;
        case 'svelte':
        case 'sveltejs':
        default:
            return powerStylesForSvelte;
    }
}
