import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const { stepBackgroundColor, stepTextColor, stepBorderColor } = attributes;

	const styles = {
		'--step-background-color': stepBackgroundColor,
		'--step-text-color': stepTextColor,
		'--step-border-color': stepBorderColor,
	};

	return (
		<div { ...useBlockProps.save( { style: styles } ) }>
			<InnerBlocks.Content />
		</div>
	);
}
