import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

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
				Hello, world!
			</div>
		);
	},

	save( { className } ) {
		return (
			<div className={ className }>
				Hello, world!
			</div>
		);
	},
} );
