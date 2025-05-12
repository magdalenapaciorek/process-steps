<?php
$block_position       = isset( $attributes['blockPosition'] ) ? $attributes['blockPosition'] : '-';
$description_content  = isset( $attributes['descriptionContent'] ) ? $attributes['descriptionContent'] : '';
$heading_content      = isset( $attributes['headingContent'] ) ? $attributes['headingContent'] : '';
$heading_level        = isset( $block->context['mp-blocks/stepHeadingLevel'] ) ? (int) $block->context['mp-blocks/stepHeadingLevel'] : 3;
$heading_level        = max( 2, min( 6, $heading_level ) );
?>

<?php if ( ! empty( $heading_content ) || ! empty( $description_content ) ) : ?>
	<div <?php echo get_block_wrapper_attributes(); ?>>
        <span class="wp-block-mp-blocks-process-step-number">
            <?php printf( '<span>%s</span>', esc_html( $block_position ) ); ?>
        </span>
        <div class="wp-block-mp-blocks-process-step-content">
            <?php if ( ! empty( $heading_content ) ) : ?>
                <?php printf( '<h%d class="wp-block-mp-blocks-process-step-content-heading">%s</h%d>', $heading_level, wp_kses_post( $heading_content ), $heading_level ); ?>
            <?php endif; ?>
            <?php if ( ! empty( $description_content ) ) : ?>
                <?php printf( '<p class="wp-block-mp-blocks-process-step-content-paragraph">%s</p>', wp_kses_post( $description_content ) ); ?>
            <?php endif; ?>
        </div>
	</div>
<?php endif; ?>
