/**
 * Block: PMPro Membership Account
 *
 * Displays the Membership Account page.
 *
 */
 /**
  * Block dependencies
  */
 import './style.scss';
 import classnames from 'classnames';
 import Inspector from './inspector';
 /**
  * Internal block libraries
  */
 const { __ } = wp.i18n;
 const {
    registerBlockType,
    AlignmentToolbar,
    BlockControls,
    BlockAlignmentToolbar,
} = wp.blocks;
const {
    PanelBody,
    PanelRow,
    TextControl,
} = wp.components;

const {
    RichText,
    InspectorControls,
} = wp.editor;

 /**
  * Register block
  */
 export default registerBlockType(
     'pmpro/account-page',
     {
         title: __( 'Membership Account Page', 'paid-memberships-pro' ),
         description: __( 'Displays the sections of the Membership Account page as selected below.', 'paid-memberships-pro' ),
         category: 'pmpro',
         icon: {
            background: '#2997c8',
            foreground: '#ffffff',
            src: 'admin-users',
         },
         keywords: [ __( 'pmpro', 'paid-memberships-pro' ) ],
         supports: {
         },
         attributes: {
             membership: {
                 type: 'boolean',
                 default: false,
             },
             profile: {
                 type: 'boolean',
                 default: false,
             },
             invoices: {
                 type: 'boolean',
                 default: false,
             },
             links: {
                 type: 'boolean',
                 default: false,
             },
         },
         edit: props => {
             const { attributes: { fields }, className, setAttributes, isSelected } = props;
             return [
                isSelected && <Inspector { ...{ setAttributes, ...props} } />,
                <div className={ className }>
                  <span>Paid Memberships Pro</span>
                  <span>Membership Account Page</span>
                </div>
            ];
         },
         save() {
           return null;
         },
       }
 );
