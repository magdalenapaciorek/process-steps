import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import {
	useBlockProps,
	RichText,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: { headingContent, descriptionContent, blockPosition },
		setAttributes,
		context,
		clientId,
	} = props;
	const headingLevel = context?.[ 'mp-blocks/stepHeadingLevel' ] || 3;

	//get the block's position within its parent block
	const blockIndex = useSelect(
		( select ) => {
			const { getBlockParents, getBlockOrder } =
				select( blockEditorStore );

			const parentIds = getBlockParents( clientId );
			const directParentId = parentIds[ parentIds.length - 1 ];
			const siblingIds = getBlockOrder( directParentId );

			return siblingIds.indexOf( clientId );
		},
		[ clientId ]
	);

	//save the block index as an attribute so it can be used in the render
	useEffect( () => {
		if ( blockIndex !== -1 && blockPosition !== blockIndex + 1 ) {
			setAttributes( { blockPosition: blockIndex + 1 } );
		}
	}, [ blockIndex ] );

	return (
		<div { ...useBlockProps() }>
			<span className="wp-block-mp-blocks-process-step-number">
				{ `${ blockIndex + 1 }` }
			</span>
			<div className="wp-block-mp-blocks-process-step-content">
				<RichText
					tagName={ 'h' + headingLevel }
					className="wp-block-mp-blocks-process-step-content-heading"
					identifier="headingContent"
					placeholder={ __( 'Add step title', 'process-steps' ) }
					allowedFormats={ [] }
					value={ headingContent }
					onChange={ ( value ) =>
						setAttributes( { headingContent: value } )
					}
				/>
				<RichText
					tagName="p"
					className="wp-block-mp-blocks-process-step-content-paragraph"
					identifier="descriptionContent"
					placeholder={ __(
						'Add step description',
						'process-steps'
					) }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					value={ descriptionContent }
					onChange={ ( value ) =>
						setAttributes( { descriptionContent: value } )
					}
				/>
			</div>
		</div>
	);
}
