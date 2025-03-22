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

declare function _default<Self extends object>(settings?: IMethodSettings<CssSize, Self>): {
	(value: CoercibleToCssSize, isForcedSave?: boolean): Self;

	(): CssSize;
};

export default _default;
import CssSize, { CoercibleToCssSize } from '../CssSize.js';
