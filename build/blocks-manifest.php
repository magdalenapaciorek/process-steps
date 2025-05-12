<?php
// This file is generated. Do not modify it manually.
return array(
	'process-steps' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'mp-blocks/process-steps',
		'version' => '0.1.0',
		'title' => 'Process Steps',
		'category' => 'widgets',
		'icon' => 'list-view',
		'description' => 'A collection of items organized in a specified order, that can be used to visually present a step-by-step process.',
		'allowedBlocks' => array(
			'mp-blocks/process-step'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'full',
				'wide'
			)
		),
		'attributes' => array(
			'stepHeadingLevel' => array(
				'type' => 'number',
				'default' => 3
			),
			'stepBackgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'stepTextColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'stepBorderColor' => array(
				'type' => 'string',
				'default' => '#cccccc'
			)
		),
		'providesContext' => array(
			'mp-blocks/stepHeadingLevel' => 'stepHeadingLevel'
		),
		'textdomain' => 'process-steps',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'step' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'mp-blocks/process-step',
		'version' => '0.1.0',
		'title' => 'Step',
		'category' => 'widgets',
		'icon' => 'excerpt-view',
		'description' => 'Single step block.',
		'parent' => array(
			'mp-blocks/process-steps'
		),
		'usesContext' => array(
			'mp-blocks/stepHeadingLevel'
		),
		'example' => array(
			
		),
		'attributes' => array(
			'headingContent' => array(
				'type' => 'string'
			),
			'descriptionContent' => array(
				'type' => 'string'
			),
			'blockPosition' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'process-steps',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
