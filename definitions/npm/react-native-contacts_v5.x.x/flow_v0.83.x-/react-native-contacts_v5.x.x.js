declare module 'react-native-contacts' {
  declare interface EmailAddress {
    label: string;
    email: string;
  }

  declare interface PhoneNumber {
    label: string;
    number: string;
  }

  declare interface PostalAddress {
    label: string;
    formattedAddress: string;
    street: string;
    pobox: string;
    neighborhood: string;
    city: string;
    region: string;
    state: string;
    postCode: string;
    country: string;
  }

  declare interface InstantMessageAddress {
    username: string;
    service: string;
  }

  declare interface Birthday {
    day: number;
    month: number;
    year: number;
  }

  declare interface Contact {
    recordID: string;
    backTitle: string;
    company: string;
    emailAddresses: EmailAddress[];
    familyName: string;
    givenName: string;
    middleName: string;
    jobTitle: string;
    phoneNumbers: PhoneNumber[];
    hasThumbnail: boolean;
    thumbnailPath: string;
    postalAddresses: PostalAddress[];
    prefix: string;
    suffix: string;
    department: string;
    birthday: Birthday;
    imAddresses: InstantMessageAddress[];
    note: string;
  }

  declare export function getAll(
    callback: (error: mixed, contacts: Contact[]) => void
  ): void;

  declare export function getAllWithoutPhotos(
    callback: (error: mixed, contacts: Contact[]) => void
  ): void;

  declare export function getContactById(
    contactId: string,
    callback: (error: mixed, contact: Contact) => void
  ): void;

  declare export function getCount(callback: (count: number) => void): void;

  declare export function getPhotoForId(
    contactId: string,
    callback: (error: mixed, photoUri: string) => void
  ): void;

  declare export function addContact(
    contact: Contact,
    callback: (error?: mixed) => void
  ): void;

  declare export function openContactForm(
    contact: $Rest<Contact, { ... }>,
    callback: (error: mixed, contact: Contact) => void
  ): void;

  declare export function openExistingContact(
    contact: Contact,
    callback: (error: mixed, contact: Contact) => void
  ): void;

  declare export function editExistingContact(
    contact: Contact,
    callback: (error: mixed, contact: Contact) => void
  ): void;

  declare export function updateContact(
    contact: Contact,
    callback: (error?: mixed) => void
  ): void;

  declare export function deleteContact(
    contact: Contact,
    callback: (error?: mixed) => void
  ): void;

  declare export function getContactsMatchingString(
    str: string,
    callback: (error: mixed, contacts: Contact[]) => void
  ): void;

  declare export function getContactsByPhoneNumber(
    phoneNumber: string,
    callback: (error: mixed, contacts: Contact[]) => void
  ): void;

  declare export function checkPermission(
    callback: (error: mixed, result: "authorized" | "denied" | "undefined") => void
  ): void;

  declare export function requestPermission(
    callback: (error: mixed, result: "authorized" | "denied" | "undefined") => void
  ): void;

  declare export function writePhotoToPath(
    contactId: string,
    file: string,
    callback: (error: mixed, result: boolean) => void
  ): void;

  declare export function iosEnableNotesUsage(enabled: boolean): void;
}
