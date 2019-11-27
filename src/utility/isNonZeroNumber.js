import { isFloat } from 'type-enforcer-math';
import { ZERO_PIXELS } from './cssUnits';

export default (size) => isFloat(size, true) && Boolean(size) && size !== ZERO_PIXELS;
