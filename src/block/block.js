import nanoid from 'nanoid';

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RangeControl } = wp.components;
const { RichText } = wp.blockEditor;

registerBlockType( 'dan/progress', {
	title: __( 'Progress' ),
	description: __( 'Show your progress with this handy progress bar.' ),
	icon: 'performance',
	category: 'common',
	keywords: [
		__( 'Bar' ),
		__( 'Percentage' ),
		__( 'Gauge' ),
		__( 'Indicator' ),
	],

	attributes: {
		progressId: {
			type: 'string',
			source: 'attribute',
			attribute: 'id',
			selector: 'progress',
		},
		value: {
			type: 'string',
			default: '0',
			source: 'attribute',
			attribute: 'value',
			selector: 'progress',
		},
		label: {
			type: 'string',
			default: '',
			source: 'html',
			selector: 'label',
		},
		description: {
			type: 'string',
			default: '',
			source: 'html',
			selector: 'p',
		},
	},

	edit( { className, attributes, setAttributes, isSelected } ) {
		const {
			label,
			value,
			description,
		} = attributes;

		return (
			<div className={ className }>
				<RichText
					className="wp-block-dan-progress__label"
					tagName="p"
					value={ label }
					aria-label={ __( 'Enter Progress Indicator Label' ) }
					placeholder={ __( 'Write label... ' ) }
					onChange={ ( updatedLabel ) => setAttributes( { label: updatedLabel } ) }
					withoutInteractiveFormatting
				/>
				<progress
					className="wp-block-dan-progress__progress"
					aria-label={ label }
					value={ value }
					max={ 100 }
				>
					{ value }%
				</progress>
				{ isSelected && (
					<RangeControl
						aria-label={ __( 'Set Progress Indicator Percentage' ) }
						value={ parseInt( value, 10 ) }
						max={ 100 }
						onChange={ ( updatedValue ) => setAttributes( { value: updatedValue } ) }
					/>
				) }
				<RichText
					className="wp-block-dan-progress__description"
					tagName="p"
					value={ description }
					aria-label={ __( 'Enter Progress Indicator Description' ) }
					placeholder={ __( 'Write description...' ) }
					onChange={ ( updatedDescription ) => setAttributes( { description: updatedDescription } ) }
				/>
			</div>
		);
	},

	save( { attributes } ) {
		const {
			progressId = `wp-block-dan-progress-${ nanoid() }`,
			label,
			value,
			description,
		} = attributes;

		return (
			<div>
				<label className="wp-block-dan-progress__label" htmlFor={ progressId }>
					{ label }
				</label>
				<progress className="wp-block-dan-progress__progress" id={ progressId } value={ value } max={ 100 }>
					{ value }%
				</progress>
				{ ! RichText.isEmpty( description ) && (
					<p className="wp-block-dan-progress__description">
						{ description }
					</p>
				) }
			</div>
		);
	},
} );
