import { BaseApi } from './BaseApi'

class ContactMessageApi extends BaseApi {}

export default new ContactMessageApi('/api/contact-messages', 'Contact Message')
