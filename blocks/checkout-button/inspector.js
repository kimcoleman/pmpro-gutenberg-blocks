/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    PanelBody,
    PanelRow,
    TextControl,
} = wp.components;
const {
    InspectorControls,
} = wp.editor;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { text, level, css_class }, setAttributes } = this.props;

        return (
          <InspectorControls>
              <PanelBody>
                 <TextControl
                     label={ __( 'Button Text', 'paid-memberships-pro' ) }
                     help={ __( 'Text for checkout button', 'paid-memberships-pro' ) }
                     value={ text }
                     onChange={ text => setAttributes( { text } ) }
                 />
              </PanelBody>
              <PanelBody>
                 <TextControl
                     label={ __( 'Level ID', 'paid-memberships-pro' ) }
                     help={ __( 'Level id to check out', 'paid-memberships-pro' ) }
                     value={ level }
                     onChange={ level => setAttributes( { level } ) }
                 />
              </PanelBody>
              <PanelBody>
                 <TextControl
                     label={ __( 'CSS Class', 'paid-memberships-pro' ) }
                     help={ __( 'Additional Styling for Button', 'paid-memberships-pro' ) }
                     value={ css_class }
                     onChange={ css_class => setAttributes( { css_class } ) }
                 />
              </PanelBody>
          </InspectorControls>
        );
    }
}
