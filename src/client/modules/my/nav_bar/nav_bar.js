import { LightningElement, api } from 'lwc';

export default class nav_bar extends LightningElement {
  @api navItems = [
    {
      name : 'Home'
    },
    {
      name : 'About'
    },
    {
      name : 'Service'
    },
    {
      name : 'Contact'
    },
];
}