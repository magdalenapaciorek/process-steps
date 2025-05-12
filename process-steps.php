<?php
/**
 * Plugin Name:       Process Steps
 * Description:       A block that can be used to visually present a step-by-step process.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Magdalena Paciorek
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       process-steps
 *
 * @package MpBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function mp_blocks_process_steps_block_init() {
	
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'mp_blocks_process_steps_block_init' );