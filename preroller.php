<?php

/*
Plugin Name: Preroller
Plugin URI: http://cfo.com/
Description: Roll a preroll
Version: 1.0.0
Author: Aram Zucker-Scharff, CFO Publishing
License: GPL2
*/

require_once('cfo-plugin.php');
class CFO_Preroller extends CFO_Plugin {

	/**
	 * Set up variables for the class.
	 */
	protected function setup_globals() {

		$this->file       = __FILE__;
		$this->basename   = apply_filters( 'CFO_Preroller_plugin_basename', plugin_basename( $this->file ) );
		$this->plugin_dir = apply_filters( 'CFO_Preroller_plugin_dir_path', plugin_dir_path( $this->file ) );
		$this->plugin_url = apply_filters( 'CFO_Preroller_plugin_dir_url',  plugin_dir_url( $this->file ) );

	}

	/**
	 * Load required or conditional includes
	 */
	protected function includes() {

	}

  public function setup_actions(){
    add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ) );
  }

	/**
	 * Enqueue Preroller Scripts
	 *
	 * @return null
	 */
	public function scripts() {
		wp_enqueue_style( 'videojs-473-style', 'http://vjs.zencdn.net/4.7.1/video-js.css');
		wp_enqueue_style( 'videojs-ads-style', $this->plugin_url . '/library/videojs-contrib-ads/src/videojs.ads.css');
		wp_enqueue_style( 'videojs-vast-style', $this->plugin_url . '/library/videojs-vast-plugin/videojs.vast.css');

		wp_enqueue_script( 'videojs-473', $this->plugin_url . '/library/videojs/video.js', array('jquery'), '4.7.3' );
    wp_enqueue_script( 'videojs-youtube', $this->plugin_url . '/library/videojs-youtube/src/youtube.js', array('jquery', 'videojs-473') );
    wp_enqueue_script( 'videojs-vast-plugin', $this->plugin_url . '/library/videojs_vast_ad_serving_plugin/js/vast.plugin.js', array('jquery', 'videojs-473', 'videojs-youtube') );
    wp_enqueue_script( 'videojs-vast-init', $this->plugin_url . '/assets/js/init.js', array('jquery', 'videojs-473', 'videojs-youtube') );
	}


}

function CFO_Preroller() {
   return CFO_Preroller::get_instance();
}
add_action( 'plugins_loaded', 'CFO_Preroller' );
