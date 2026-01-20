import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import AIAssistantNavbarItem from './AIAssistantNavbarItem';

const ExtendedComponentTypes = {
  ...ComponentTypes,
  'custom-aiAssistant': AIAssistantNavbarItem,
};

export default ExtendedComponentTypes;
