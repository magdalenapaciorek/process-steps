import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		stepHeadingLevel,
		stepBackgroundColor,
		stepTextColor,
		stepBorderColor,
		allowedBlocks,
	} = attributes;

	const styles = {
		'--step-background-color': stepBackgroundColor,
		'--step-text-color': stepTextColor,
		'--step-border-color': stepBorderColor,
	};

	const setStepBackgroundColor = ( value ) => {
		setAttributes( { stepBackgroundColor: value } );
	};

	const setStepTextColor = ( value ) => {
		setAttributes( { stepTextColor: value } );
	};

	const setStepBorderColor = ( value ) => {
		setAttributes( { stepBorderColor: value } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Heading Settings', 'process-steps' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Step heading level', 'process-steps' ) }
						value={ stepHeadingLevel }
						options={ [
							{ label: 'H2', value: 2 },
							{ label: 'H3', value: 3 },
							{ label: 'H4', value: 4 },
							{ label: 'H5', value: 5 },
							{ label: 'H6', value: 6 },
						] }
						onChange={ ( value ) =>
							setAttributes( {
								stepHeadingLevel: parseInt( value, 10 ),
							} )
						}
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Step Color Settings', 'process-steps' ) }
					colorSettings={ [
						{
							value: stepBackgroundColor,
							onChange: setStepBackgroundColor,
							label: __( 'Background color', 'process-steps' ),
						},
						{
							value: stepTextColor,
							onChange: setStepTextColor,
							label: __( 'Text color', 'process-steps' ),
						},
						{
							value: stepBorderColor,
							onChange: setStepBorderColor,
							label: __( 'Border color', 'process-steps' ),
						},
					] }
				/>
			</InspectorControls>
			<div { ...useBlockProps( { style: styles } ) }>
				<InnerBlocks
					orientation="horizontal"
					template={ [ [ 'mp-blocks/process-step' ] ] }
					allowedBlocks={ allowedBlocks }
				/>
			</div>
		</>
	);
}
