import nanoid from 'nanoid';

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType( 'dan/progress', {
	title: __( 'Progress' ),
	icon: 'performance',
	category: 'common',
	keywords: [
		__( 'Bar' ),
		__( 'Percentage' ),
		__( 'Gauge' ),
	],

	edit( { className } ) {
		return (
			<div className={ className }>

			</div>
		);
	},

	save( { className, attributes } ) {
		const {
			progressId = `wp-block-dan-progress-${ nanoid() }`,
			label,
			value,
			description,
		} = attributes;

		return (
			<div className={ className }>
				<label htmlFor={ progressId }>{ label }</label>
				<progress id={ progressId } value={ value } max={ 100 } />
				{ RichText.isEmpty( description ) && ( <p>{ description }</p> ) }
			</div>
		);
	},
} );
