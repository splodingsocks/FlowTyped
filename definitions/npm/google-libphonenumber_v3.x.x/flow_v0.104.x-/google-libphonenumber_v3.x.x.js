declare module 'google-libphonenumber' {
  declare var PhoneNumberFormat: {
    E164: string,
    INTERNATIONAL: string,
    NATIONAL: string,
    RFC3966: string
  };

  declare var PhoneNumberType: {
    FIXED_LINE: 0,
    MOBILE: 1,
    FIXED_LINE_OR_MOBILE: 2,
    TOLL_FREE: 3,
    PREMIUM_RATE: 4,
    SHARED_COST: 5,
    VOIP: 6,
    PERSONAL_NUMBER: 7,
    PAGER: 8,
    UAN: 9,
    VOICEMAIL: 10,
    UNKNOWN: -1
  };

  declare class PhoneNumber {
    static CountryCodeSource: {
      FROM_NUMBER_WITH_PLUS_SIGN: 1,
      FROM_NUMBER_WITH_IDD: 5,
      FROM_NUMBER_WITHOUT_PLUS_SIGN: 10,
      FROM_DEFAULT_COUNTRY: 20,
    };

    getCountryCode(): number | void;
    getCountryCodeOrDefault(): number;
    setCountryCode(value: number): void;
    hasCountryCode(): boolean;
    countryCodeCount(): number;
    clearCountryCode(): void;
    getNationalNumber(): number | void;
    getNationalNumberOrDefault(): number;
    setNationalNumber(value: number): number;
    hasNationalNumber(): boolean;
    nationalNumberCount(): number;
    clearNationalNumber(): void;

    getExtension(): string | void;
    getExtensionOrDefault(): string;
    setExtension(value: string): void;
    hasExtension(): boolean;
    extensionCount(): number;
    clearExtension(): void;

    getItalianLeadingZero(): boolean | void;
    getItalianLeadingZeroOrDefault(): boolean;
    setItalianLeadingZero(value: boolean): void;
    hasItalianLeadingZero(): boolean;
    italianLeadingZeroCount(): number;
    clearItalianLeadingZero(): void;

    getNumberOfLeadingZeros(): number | void;
    getNumberOfLeadingZerosOrDefault(): number;
    setNumberOfLeadingZeros(value: number): void;
    hasNumberOfLeadingZeros(): boolean;
    numberOfLeadingZerosCount(): number;
    clearNumberOfLeadingZeros(): void;

    getRawInput(): string | void;
    getRawInputOrDefault(): string;
    setRawInput(value: string): void;
    hasRawInput(): boolean;
    rawInputCount(): number;
    clearRawInput(): void;

    getCountryCodeSource(): $Values<typeof PhoneNumber.CountryCodeSource> | void;
    getCountryCodeSourceOrDefault(): $Values<typeof PhoneNumber.CountryCodeSource>;
    setCountryCodeSource(value: $Values<typeof PhoneNumber.CountryCodeSource>): void;
    hasCountryCodeSource(): boolean;
    countryCodeSourceCount(): number;
    clearCountryCodeSource(): void;

    getPreferredDomesticCarrierCode(): string | void;
    getPreferredDomesticCarrierCodeOrDefault(): string;
    setPreferredDomesticCarrierCode(value: string): void;
    hasPreferredDomesticCarrierCode(): boolean;
    preferredDomesticCarrierCodeCount(): number;
    clearPreferredDomesticCarrierCode(): void;
  }

  declare class StringBuffer {
      constructor(opt_a1?: any, ...var_args: any[]): StringBuffer;
      append(a1: any, opt_a2?: any, ...var_args: any[]): StringBuffer;
      toString(): string;
  }

  declare class PhoneNumberUtil {

    static ValidationResult: {
      IS_POSSIBLE: string,
      INVALID_COUNTRY_CODE: string,
      TOO_SHORT: string,
      TOO_LONG: string
    };

    static MatchType: {
      EXACT_MATCH: string,
      NO_MATCH: string,
      NOT_A_NUMBER: string,
      NSN_MATCH: string,
      SHORT_NSN_MATCH: string
    };

    static getInstance(): PhoneNumberUtil;
    extractCountryCode(fullNumber: StringBuffer, nationalNumber: StringBuffer): number;
    format(phoneNumber: PhoneNumber, format: PhoneNumberFormat): string;
    formatOutOfCountryCallingNumber(phoneNumber: PhoneNumber, regionDialingFrom?: string): string;
    getNddPrefixForRegion(regionCode?: string, stripNonDigits?: boolean): string | undefined;
    getNumberType(phoneNumber: PhoneNumber): $Values<typeof PhoneNumberType>;
    getCountryCodeForRegion(supportedRegion:string):string;
    getExampleNumber(regionCode: string): PhoneNumber;
    getExampleNumberForType(regionCode: string, type: $Values<typeof PhoneNumberType>): PhoneNumber;
    getRegionCodeForCountryCode(countryCallingCode: number): string;
    getRegionCodeForNumber(phoneNumber: PhoneNumber): string | undefined;
    getSupportedRegions():string [];
    isAlphaNumber(number: string): boolean;
    isLeadingZeroPossible(countryCallingCode: number): boolean;
    isNANPACountry(regionCode?: string): boolean;
    isPossibleNumber(number: PhoneNumber): boolean;
    isPossibleNumber(phoneNumber: PhoneNumber): boolean;
    isPossibleNumberForType(number: PhoneNumber, type: $Values<typeof PhoneNumberType>): boolean;
    isPossibleNumberForTypeWithReason(number: PhoneNumber, type: $Values<typeof PhoneNumberType>): $Values<typeof PhoneNumberUtil.ValidationResult>;
    isPossibleNumberString(number: string, regionDialingFrom: string): boolean;
    isPossibleNumberWithReason(number: PhoneNumber): $Values<typeof PhoneNumberUtil.ValidationResult>;
    isPossibleNumberWithReason(phoneNumber: PhoneNumber): $Values<typeof PhoneNumberUtil.ValidationResult>;
    isValidNumber(phoneNumber: PhoneNumber): boolean;
    isValidNumberForRegion(phoneNumber: PhoneNumber, region?: string): boolean;
    parse(number?: string, region?: string): PhoneNumber;
    parseAndKeepRawInput(number: string, regionCode?: string): PhoneNumber;
    truncateTooLongNumber(number: PhoneNumber): boolean;
    isNumberMatch(firstNumber: string | PhoneNumber, secondNumber: string | PhoneNumber): $Values<typeof PhoneNumberUtil.MatchType>;
  }

  declare class AsYouTypeFormatter {
      constructor(region: string): AsYouTypeFormatter;
      inputDigit(digit: string): string;
      clear(): void;
  }

  declare type libphonenumber = {
    PhoneNumberFormat: typeof PhoneNumberFormat,
    PhoneNumberType: typeof PhoneNumberType,
    PhoneNumber: PhoneNumber,
    PhoneNumberUtil: PhoneNumberUtil,    
    AsYouTypeFormatter: AsYouTypeFormatter,
  };

  declare module.exports: libphonenumber;
}
