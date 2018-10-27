/**
 * Block: PMPro Checkout Button
 *
 * Add a styled link to the PMPro checkout page for a
 * specific level.
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
         title: __( 'PMPro Membership Account', 'paid-memberships-pro' ),
         description: __( 'Displays the member\'s full account information.', 'paid-memberships-pro' ),
         category: 'pmpro',
         icon: 'admin-users',
         keywords: [
         ],
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
                  <span>Membership Account</span>
                </div>
            ];
         },
         save() {
           return null;
         },
       }
 );
