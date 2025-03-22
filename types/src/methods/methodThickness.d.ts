declare type IMethodSettings<DataType, Self extends object> = {
	init?: DataType | undefined;

	before?(this: Self, value: DataType | undefined): void;

	set?(this: Self, value: DataType): void;

	get?(this: Self): DataType;

	enforce?: (value: unknown, alt: DataType, coerce?: boolean) => DataType;
	compare?: (newValue: unknown, value: DataType) => boolean;
	stringify?: boolean;
	other?: unknown;
}

declare function _default<Self extends object>(settings?: IMethodSettings<Thickness, Self>): {
	(value: Thickness | string, isForcedSave?: boolean): Self;

	(): Thickness;
};

export default _default;
import Thickness, { Coerc } from '../Thickness.js';
