import { emitAction } from '../../socket';

export const increment = emitAction(() => ({
    type: 'INCREMENT',
}));
