import nanoid from 'nanoid';

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
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
			default: '50',
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

	edit( { attributes, setAttributes } ) {
		return (
			<div>
				Hello, Editor!
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
				<RichText.Content
					tagName="label"
					className="wp-block-dan-progress__label"
					htmlFor={ progressId }
					value={ label }
				/>

				<progress
					id={ progressId }
					className="wp-block-dan-progress__progress"
					value={ value }
					max={ 100 }
				>
					{ value }%
				</progress>

				{ ! RichText.isEmpty( description ) && (
					<RichText.Content
						tagName="p"
						className="wp-block-dan-progress__description"
						value={ description }
					/>
				) }
			</div>
		);
	},
} );
